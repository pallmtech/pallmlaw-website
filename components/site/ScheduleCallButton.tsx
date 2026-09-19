"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

type ScheduleCallButtonProps = {
  className: string;
  label: string;
};

const bookingUrl = "https://book.pallmtech.com/#/4750853000001453070";
const bookingEmbedUrl =
  "https://book.pallmtech.com/portal-embed#/4750853000001453070";

export default function ScheduleCallButton({
  className,
  label,
}: ScheduleCallButtonProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const embedUrl = useMemo(() => bookingEmbedUrl, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const handleFrameLoad = () => {
    const frame = iframeRef.current;

    if (!frame) {
      return;
    }

    try {
      const frameUrl = new URL(frame.contentWindow?.location.href ?? "");

      if (
        frameUrl.origin === window.location.origin &&
        frameUrl.pathname === "/thank-you"
      ) {
        setOpen(false);
        window.location.href = frameUrl.toString();
      }
    } catch {
      // Cross-origin iframe access is expected until the booking flow redirects back.
    }
  };

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {label}
      </button>

      {mounted && open
        ? createPortal(
            <div
              className="schedule-modal-backdrop"
              role="dialog"
              aria-modal="true"
              aria-label="Schedule a PallmLaw intro meeting"
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                  setOpen(false);
                }
              }}
            >
              <div
                className="schedule-modal"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="schedule-modal-header">
                  <div>
                    <p className="schedule-modal-eyebrow">Book A Conversation</p>
                    <h2>Schedule a 15-minute intro to PallmLaw</h2>
                  </div>
                  <button
                    type="button"
                    className="schedule-modal-close"
                    aria-label="Close scheduling modal"
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </button>
                </div>

                <div className="schedule-modal-frame">
                  <iframe
                    ref={iframeRef}
                    src={embedUrl}
                    title="Schedule a PallmLaw intro meeting"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    onLoad={handleFrameLoad}
                  />
                </div>

                <p className="schedule-modal-fallback">
                  If the scheduler does not load,{" "}
                  <a href={bookingUrl} target="_blank" rel="noreferrer">
                    open it in a new tab
                  </a>
                  .
                </p>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
