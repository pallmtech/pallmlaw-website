"use client";

import { useEffect, useMemo, useState } from "react";

type ScheduleCallButtonProps = {
  className: string;
  label: string;
};

const calUrl = "https://cal.com/amccoy/15-min-intro-to-lawops";

export default function ScheduleCallButton({
  className,
  label,
}: ScheduleCallButtonProps) {
  const [open, setOpen] = useState(false);

  const embedUrl = useMemo(() => `${calUrl}?embed=1`, []);

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

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {label}
      </button>

      {open ? (
        <div
          className="schedule-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Schedule a LawOps intro call"
          onClick={() => setOpen(false)}
        >
          <div
            className="schedule-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="schedule-modal-header">
              <div>
                <p className="schedule-modal-eyebrow">Book A Conversation</p>
                <h2>Schedule a 15-minute intro to LawOps</h2>
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
                src={embedUrl}
                title="Schedule a LawOps intro call"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            <p className="schedule-modal-fallback">
              If the scheduler does not load,{" "}
              <a href={calUrl} target="_blank" rel="noreferrer">
                open it in a new tab
              </a>
              .
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
