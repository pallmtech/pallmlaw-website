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
              src="/lawops-white-logo.png"
              alt="LawOps"
              width={221}
              height={58}
            />
            <p>
              LawOps helps Estate Planning firms see what is going on and keep work
              moving.
            </p>
            <p className="footer-owner">Built and operated by Pallm Tech LLC.</p>
          </div>

          <div className="footer-link-groups">
            <div className="footer-link-group">
              <h3>Product</h3>
              <Link href="/platform">Platform</Link>
              <Link href="/estate-planning">Estate Planning</Link>
              <Link href="/estate-planning-software">Estate Planning Software</Link>
              <Link href="/legal-workflow-software">Legal Workflow Software</Link>
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
              If your workflow is running on memory, handoffs, and status-chasing,
              LawOps is worth a serious look.
            </p>
            <ScheduleCallButton
              className="button button-primary"
              label="Start The Conversation"
            />
          </div>

          <p className="footer-legal">
            (c) {year} LawOps by Pallm Tech LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
