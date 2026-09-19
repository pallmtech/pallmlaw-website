import Image from "next/image";
import Link from "next/link";
import ScheduleCallButton from "@/components/site/ScheduleCallButton";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-band" id="contact">
      <div className="container footer-stack">
        <div className="footer-layout footer-layout-top">
          <div className="footer-brand">
            <Image
              src="/pallmlaw-white-logo.png"
              alt="PallmLaw"
              width={248}
              height={58}
            />
            <p>
              PallmLaw is the operating and intelligence system for trusts and
              estates firms: visible matters, enforced workflows, automated
              client communication, and answers owners can act on.
            </p>
            <p className="footer-owner">Built and operated by Pallm Tech LLC.</p>
          </div>

          <div className="footer-link-groups">
            <div className="footer-link-group">
              <h3>Product</h3>
              <Link href="/platform">Platform</Link>
              <Link href="/workflow-automation">Workflow Automation</Link>
              <Link href="/client-communication-automation">Client Communication</Link>
              <Link href="/ai-agent-connected">AI Agent Connected</Link>
              <Link href="/estate-planning">Estate Planning</Link>
              <Link href="/probate-workflow-automation">Probate Automation</Link>
              <Link href="/probate-case-management-software">Probate Management</Link>
              <Link href="/trust-administration-workflow-software">Trust Administration</Link>
              <Link href="/dedicated-firm-infrastructure">Dedicated Infrastructure</Link>
              <Link href="/estate-planning-software">Estate Planning Software</Link>
              <Link href="/insights">Insights</Link>
            </div>

            <div className="footer-link-group">
              <h3>Company</h3>
              <a href="https://www.pallmtech.com" target="_blank" rel="noreferrer">
                About Us
              </a>
            </div>

            <div className="footer-link-group">
              <h3>Support</h3>
              <a
                href="https://www.pallmtech.com/privacy"
                target="_blank"
                rel="noreferrer"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>

        <div className="footer-layout footer-layout-bottom">
          <div className="footer-cta">
            <h2>Book a fit conversation.</h2>
            <p>
              If your firm is still relying on memory, scattered follow-up, and
              status chasing to move matters forward, see what an operating and
              intelligence system can make visible, enforce, and measure.
            </p>
            <ScheduleCallButton
              className="button button-primary"
              label="Start The Conversation"
            />
          </div>

          <p className="footer-legal">
            &copy; {year} Pallm Tech LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
