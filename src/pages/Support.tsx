import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Bug, Check, ChevronDown, Copy, Lightbulb, Mail, MessageCircleQuestion } from "lucide-react";

import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import { CONTACT_EMAIL } from "../data/apps";
import "./Support.css";

function mailto(subject: string, body = "") {
  const q = [`subject=${encodeURIComponent(subject)}`];
  if (body) q.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${CONTACT_EMAIL}?${q.join("&")}`;
}

const BUG_TEMPLATE = `What happened:


What I expected:


Steps to reproduce:
1.
2.
3.

Zapture version (Settings → About):
Windows version:

Diagnostics (Settings → Advanced → Copy diagnostics, then paste here):
`;

const IDEA_TEMPLATE = `My idea:


How it would help me:


App (Zapture / Textura / other):
`;

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "Where are my screenshots, recordings and clips saved?",
    a: (
      <>
        By default, screenshots go to <b>Pictures\Zapture Screenshots</b>, recordings to <b>Videos\Zapture Recordings</b> and
        clips to <b>Videos\Zapture Clips</b>. You can choose different folders in Settings → Storage, and everything also appears
        in Zapture’s Library.
      </>
    ),
  },
  {
    q: "How do I save a clip of something that just happened?",
    a: (
      <>
        Turn on Clipping in Settings → Clipping (or press <kbd>Win</kbd> <kbd>Shift</kbd> <kbd>Q</kbd> once to switch it on).
        From then on, press <kbd>Win</kbd> <kbd>Shift</kbd> <kbd>Q</kbd> to save the last 15 seconds to 5 minutes. A short chime
        confirms each clip, even in fullscreen games.
      </>
    ),
  },
  {
    q: "Can I change the keyboard shortcuts?",
    a: (
      <>
        Yes. In Settings → Shortcuts, click any shortcut and press the keys you want. Almost any key works, including Win
        combinations, Print Screen, the numpad, media keys and plain keys without Ctrl or Alt. Zapture warns you about keys
        Windows reserves and about clashes with other shortcuts. You can also make Win+Shift+S and Print Screen open Zapture
        instead of the Snipping Tool.
      </>
    ),
  },
  {
    q: "Do I need to install FFmpeg?",
    a: (
      <>
        No. Zapture downloads its own copy of FFmpeg the first time it’s needed and checks the file before using it. If you
        already have FFmpeg, you can point Zapture to it in Settings → Advanced.
      </>
    ),
  },
  {
    q: "How do I make a video small enough for Discord?",
    a: (
      <>
        Open the recording or clip in Zapture’s editor, press <b>For Discord</b>, then <b>Export</b>. Zapture fits the video under
        Discord’s 20 MB limit. You can also export WebM, GIF or MP3, or set your own size limit.
      </>
    ),
  },
  {
    q: "Does Zapture collect my data?",
    a: (
      <>
        No. Zapture has no account and no telemetry, and your captures stay on your PC unless you share them yourself. The{" "}
        <Link to="/privacy">Privacy Policy</Link> has the details.
      </>
    ),
  },
  {
    q: "Which versions of Windows are supported?",
    a: <>Windows 10 (version 1803 or later) and Windows 11, 64-bit.</>,
  },
  {
    q: "How do I update Zapture?",
    a: (
      <>
        Go to Settings → About and press <b>Check now</b>. You can also choose whether Zapture only tells you about updates or
        installs them automatically when you close it.
      </>
    ),
  },
  {
    q: "What should I include when reporting a problem?",
    a: (
      <>
        What happened, what you expected and the steps that lead to it. In Zapture, Settings → Advanced → <b>Copy diagnostics</b>{" "}
        copies a summary of your version and setup that you can paste into your email. The <b>Report a bug</b> button below
        starts an email with all of this laid out for you.
      </>
    ),
  },
];

export default function Support() {
  const [open, setOpen] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${CONTACT_EMAIL}`;
    }
  };

  return (
    <>
      <SEO
        title="Support"
        description="Get help with Zapture and other Korven apps: answers to common questions, bug reports, feature requests and how to contact us."
        path="/support"
      />

      <section className="page-hero">
        <div className="grid-bg" />
        <div className="glow" />
        <div className="container">
          <Reveal className="page-hero-inner center">
            <span className="eyebrow">Help centre</span>
            <h1 className="h1">How can we help?</h1>
            <p className="lead">Answers to common questions, and a direct line to the person who builds the apps.</p>
          </Reveal>

          <div className="support-quick">
            {[
              { href: "#faq", icon: MessageCircleQuestion, title: "Common questions", text: "Quick answers about Zapture." },
              { href: "#contact", icon: Mail, title: "Contact support", text: "Get help with a problem." },
              { href: "#contact", icon: Bug, title: "Report a bug", text: "Tell us what went wrong." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={0.06 * (i + 1)}>
                <a href={c.href} className="card card-hover support-quick-card">
                  <span className="icon-tile">
                    <c.icon size={20} />
                  </span>
                  <span>
                    <strong>{c.title}</strong>
                    <span className="small">{c.text}</span>
                  </span>
                  <ArrowRight size={17} className="support-quick-arrow" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-divider" id="faq">
        <div className="container support-faq">
          <Reveal className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2 className="h2">Frequently asked questions.</h2>
            <p className="lead">Can’t find your answer? <a href="#contact" className="link">Contact us</a></p>
          </Reveal>

          <div className="faq-list">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div className={`faq-item${isOpen ? " open" : ""}`} key={f.q}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                      id={`faq-q-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                    >
                      {f.q}
                      <ChevronDown size={18} />
                    </button>
                  </h3>
                  <div id={`faq-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className="faq-answer" hidden={!isOpen}>
                    <p>{f.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-divider" id="contact">
        <div className="container">
          <Reveal className="section-head center">
            <span className="eyebrow">Contact</span>
            <h2 className="h2">Get in touch.</h2>
            <p className="lead">Pick what fits and your email app opens with the details ready to fill in.</p>
          </Reveal>

          <div className="contact-grid">
            {[
              {
                id: "support",
                icon: Mail,
                title: "Contact & support",
                text: "Questions, help with an app, or anything else.",
                href: mailto("Korven support"),
                cta: "Email support",
              },
              {
                id: "bug",
                icon: Bug,
                title: "Report a bug",
                text: "Something not working as it should? Tell us the steps and we’ll look into it.",
                href: mailto("Bug report: Zapture", BUG_TEMPLATE),
                cta: "Report a bug",
              },
              {
                id: "feature",
                icon: Lightbulb,
                title: "Request a feature",
                text: "Ideas that would make Zapture or a future Korven app better.",
                href: mailto("Feature request", IDEA_TEMPLATE),
                cta: "Suggest a feature",
              },
            ].map((c, i) => (
              <Reveal key={c.id} delay={i * 0.06}>
                <div className="card contact-card" id={c.id === "support" ? undefined : c.id}>
                  <span className="icon-tile">
                    <c.icon size={20} />
                  </span>
                  <h3 className="h3">{c.title}</h3>
                  <p className="body">{c.text}</p>
                  <a className={`btn ${i === 0 ? "btn-primary" : "btn-secondary"}`} href={c.href}>
                    {c.cta}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="contact-email">
              <span className="small">Or write to us directly at</span>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              <button type="button" className="btn btn-secondary btn-sm" onClick={copyEmail}>
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
