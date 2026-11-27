
import { NavLink, useLocation } from "react-router-dom";
import { Mail, ShieldCheck, FileText, Scale } from "lucide-react";

import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import { CONTACT_EMAIL } from "../data/apps";
import "./Legal.css";

type LegalSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

const documents: Record<
  string,
  {
    title: string;
    description: string;
    icon: typeof ShieldCheck;
    sections: LegalSection[];
  }
> = {
  privacy: {
    title: "Privacy Policy",
    description: "How Korven handles information when you visit our website or use our software.",
    icon: ShieldCheck,
    sections: [
      {
        heading: "1. About Korven",
        paragraphs: [
          'Korven is an independent software developer and publisher operating from the United Kingdom. "Korven", "we", "us", and "our" refer to the individual developer operating under the Korven name.',
          "This policy explains how information is handled when you visit our website, download our software, or contact us.",
          "Website: https://korven-28n.pages.dev",
          "Privacy contact: contact.sightie@gmail.com",
        ],
      },
      {
        heading: "2. Our approach to privacy",
        paragraphs: [
          "We aim to collect as little personal information as reasonably necessary.",
          "Our current desktop software approach is local-first. Zapture does not intentionally collect telemetry or usage analytics, and screenshots and recordings are saved locally on your device rather than transmitted to Korven.",
          "We do not operate a Korven cloud storage service for Zapture user-created content.",
        ],
      },
      {
        heading: "3. Information handled by Zapture",
        paragraphs: [
          "Zapture is a Windows screenshot and screen-recording application. Depending on the features you use, it may process screenshots, screen recordings, system audio, microphone input, files you open or export, and local application preferences.",
          "This information is processed on your device and is not intentionally transmitted to Korven. You choose where exported screenshots and recordings are saved.",
          "Zapture may require operating-system permissions to provide features you choose to use.",
          "Text recognition (Copy text) runs on your device using the text recognition built into Windows. The image and the text it finds are not sent to Korven.",
          "Zapture connects to the internet only for the following. These requests reveal your IP address and standard technical request details to the site involved, as with any download. Nothing about your screenshots, recordings, or settings is sent.",
        ],
        bullets: [
          "Update checks: Zapture reads a small version file from GitHub (raw.githubusercontent.com) when update checks are on, and downloads the installer from GitHub when you choose to update. You can turn automatic update checks off in Settings → About.",
          "FFmpeg setup: when you set up recording, Zapture downloads FFmpeg from gyan.dev or its GitHub mirror, unless you choose a copy you already have.",
        ],
      },
      {
        heading: "4. Website information",
        paragraphs: [
          "Our website is hosted using Cloudflare Pages. When you visit the website, Cloudflare may process technical information needed to deliver, protect, and maintain the service.",
          "To show the latest Zapture version, the Zapture page asks GitHub's public API for the latest release directly from your browser, on Windows PCs only (other devices can't download Zapture, so nothing is asked). GitHub receives your IP address and browser details for that request. If the request fails, the page links to the GitHub releases page instead.",
          "Our fonts are served from our own website. We do not load fonts, scripts, or other resources from Google or advertising networks.",
        ],
        bullets: [
          "IP address.",
          "Browser and device information.",
          "Requested pages and resources.",
          "Date and time of requests.",
          "Security and diagnostic information.",
        ],
      },
      {
        heading: "5. Downloads and GitHub",
        paragraphs: [
          "Zapture releases are distributed through GitHub at https://github.com/sightieS/zapture-updates.",
          "When you access a GitHub release or download an installer, GitHub may process technical information under its own privacy policy and terms. The download process is handled by GitHub rather than by a Korven-operated user account system.",
        ],
      },
      {
        heading: "6. Information you send us",
        paragraphs: [
          "If you contact us by email, we receive the information you choose to provide. This may include your email address, name or username, message contents, and attachments.",
          "We use this information to respond to your enquiry, provide support, and address relevant issues. Correspondence is retained only as long as reasonably necessary.",
          "Please avoid sending passwords, authentication codes, or other sensitive information in support messages.",
        ],
      },
      {
        heading: "7. Cookies and analytics",
        paragraphs: [
          "The Korven website does not set cookies, does not store anything in your browser, and does not use analytics, advertising, or tracking scripts.",
          "Cloudflare, as our host, may set a strictly necessary security cookie when it needs to tell people from automated traffic. Under UK and EU law, strictly necessary storage of this kind does not need consent. If we ever add analytics or other non-essential technologies, we will update this policy first and ask for consent where the law requires it.",
        ],
      },
      {
        heading: "8. Sharing information",
        paragraphs: [
          "We do not sell personal information. Information may be processed by service providers that help operate our website or distribute our software, including Cloudflare and GitHub.",
          "We may also disclose information where required by law or where reasonably necessary to protect legal rights, security, or safety.",
        ],
      },
      {
        heading: "9. Data retention and security",
        paragraphs: [
          "We do not operate a central Korven account system or cloud storage service for Zapture content.",
          "Support emails may be retained for as long as reasonably necessary to handle enquiries and maintain relevant records. Website technical logs may be retained by hosting and distribution providers according to their own policies.",
          "We take reasonable steps to protect information under our control. However, no electronic storage or transmission system can be guaranteed to be completely secure.",
        ],
      },
      {
        heading: "10. Who is responsible and our lawful bases",
        paragraphs: [
          "Korven (the individual developer named in section 1) is the controller for the personal information described in this policy that Korven itself handles: support emails and any website information made available to us. Cloudflare and GitHub are responsible for the information they process under their own policies.",
          "We rely on legitimate interests to deliver, secure, and maintain the website and to answer messages you send us, and on legal obligation where we must keep or disclose information by law.",
        ],
      },
      {
        heading: "11. Your data protection rights and complaints",
        paragraphs: [
          "Depending on the circumstances, UK and EU data protection law may give you rights to access, correct, erase, restrict, or object to the processing of your personal information, and to request data portability.",
          "To exercise a right, or to complain about how we have handled your personal information, email contact.sightie@gmail.com with the subject \"Data protection\". Tell us what happened and what you would like us to do.",
          "We will acknowledge your complaint within 30 days of receiving it, look into it without undue delay, keep you informed of progress, and tell you the outcome.",
          "You also have the right to complain to the Information Commissioner's Office (ICO) at https://ico.org.uk/make-a-complaint/ or on 0303 123 1113. If you live in the European Economic Area, you can complain to your local data protection authority.",
        ],
      },
      {
        heading: "12. Children's privacy",
        paragraphs: [
          "Korven software is not specifically designed to collect personal information from children. We do not knowingly collect personal information from children through a Korven account system.",
        ],
      },
      {
        heading: "13. International processing",
        paragraphs: [
          "Cloudflare and GitHub may process technical information in countries outside the United Kingdom. Their own policies explain how they handle international data transfers. Where UK law requires safeguards, those safeguards should be provided by the relevant service provider.",
        ],
      },
      {
        heading: "14. Changes to this policy",
        paragraphs: [
          "We may update this Privacy Policy when our software, website, service providers, or data practices change. The latest version will be published on the Korven website.",
        ],
      },
      {
        heading: "15. Contact",
        paragraphs: [
          "For privacy questions or requests, email contact.sightie@gmail.com.",
          "Korven is operated by an individual developer in the United Kingdom.",
        ],
      },
    ],
  },

  terms: {
    title: "Terms of Service",
    description: "The terms governing access to and use of the Korven website and software.",
    icon: FileText,
    sections: [
      {
        heading: "1. Introduction",
        paragraphs: [
          "These Terms of Service govern your access to and use of the Korven website and software.",
          "Korven is an independent software developer and publisher operating from the United Kingdom.",
          "By accessing the website or downloading or using Korven software, you agree to these Terms. If you do not agree, do not use the relevant service or software.",
        ],
      },
      {
        heading: "2. Korven products",
        paragraphs: [
          "Korven develops and distributes software applications for Windows.",
          "Zapture is a screenshot and screen-recording application. Textura is a planned notes application.",
          "Product descriptions, features, availability, and release dates may change. A product described as in development or coming soon is not necessarily available for download.",
        ],
      },
      {
        heading: "3. Eligibility",
        paragraphs: [
          "You must be legally capable of agreeing to these Terms under the laws that apply to you. If you are under the age at which you can enter into a binding agreement, you should obtain permission from a parent or legal guardian before using Korven services.",
        ],
      },
      {
        heading: "4. Permitted use",
        paragraphs: [
          "Unless a product-specific agreement says otherwise, Korven software may be used for both personal and commercial purposes without a separate commercial-use licence fee.",
          "You agree not to:",
        ],
        bullets: [
          "Use the website or software unlawfully.",
          "Use the software to infringe another person's rights.",
          "Attempt to compromise the security of Korven services.",
          "Distribute malware or malicious content using Korven services.",
          "Interfere with the operation of the website, downloads, or update services.",
          "Redistribute, resell, or sublicense Korven software without permission.",
          "Copy or exploit Korven branding or protected materials without permission.",
        ],
      },
      {
        heading: "5. Downloads and updates",
        paragraphs: [
          "Korven software may be distributed through the Korven website and third-party services such as GitHub Releases.",
          "We may provide updates to introduce features, improve performance, fix defects, address security issues, or maintain compatibility.",
          "We do not guarantee that every update will be available indefinitely or that every release will work on every device.",
        ],
      },
      {
        heading: "6. Your content",
        paragraphs: [
          "You retain ownership of content you create using Korven software, subject to any rights belonging to other people.",
          "Zapture screenshots and recordings are stored locally on your device rather than uploaded to a Korven cloud storage service.",
          "You are responsible for having permission to capture or record relevant content, respecting copyright and privacy rights, choosing appropriate save locations, and maintaining backups.",
          "Korven does not claim ownership of your personal content simply because you created it using our software.",
        ],
      },
      {
        heading: "7. Intellectual property",
        paragraphs: [
          "Korven software, branding, logos, website design, graphics, documentation, and other materials are protected by applicable intellectual property laws.",
          "Unless otherwise stated, these materials belong to Korven or their respective licensors. Your permission to use the software is governed by the Korven End User Licence Agreement.",
        ],
      },
      {
        heading: "8. Third-party services",
        paragraphs: [
          "Our website and software may link to or rely on third-party services, including Cloudflare for website hosting and GitHub for software release distribution.",
          "These services are independently operated and may be subject to separate terms, privacy policies, and availability requirements.",
        ],
      },
      {
        heading: "9. Availability and changes",
        paragraphs: [
          "We aim to keep Korven's website and software reliable and accessible. However, we cannot guarantee uninterrupted access, error-free operation, or permanent availability.",
          "We may change, suspend, or discontinue a feature, application, or service. Where reasonably practicable, we will provide notice of significant changes.",
        ],
      },
      {
        heading: "10. Disclaimers",
        paragraphs: [
          "We do not guarantee that software will be completely free from defects, compatible with every device, or suitable for every particular purpose.",
          "Nothing in these Terms excludes statutory rights or consumer protections that cannot lawfully be excluded or limited.",
        ],
      },
      {
        heading: "11. Liability",
        paragraphs: [
          "Nothing in these Terms excludes or limits liability where doing so would be unlawful.",
          "Subject to that, Korven is not responsible for losses that are not reasonably foreseeable or that arise from circumstances outside its reasonable control.",
          "You remain responsible for maintaining backups of important files and for using recording and capture features lawfully. Consumers retain mandatory rights and remedies provided by applicable consumer law.",
        ],
      },
      {
        heading: "12. Suspension and termination",
        paragraphs: [
          "We may restrict access to our website or services where reasonably necessary to address unlawful use, security risks, or serious breaches of these Terms.",
          "You may stop using the website or software at any time.",
        ],
      },
      {
        heading: "13. Changes to these Terms",
        paragraphs: [
          "We may update these Terms when our products, services, or legal requirements change. The latest version will be published on the Korven website.",
        ],
      },
      {
        heading: "14. Governing law",
        paragraphs: [
          "These Terms are intended to be governed by the laws of England and Wales.",
          "If you are a consumer, you may also benefit from mandatory protections under the laws of the country in which you live. Nothing in this section removes rights that cannot lawfully be excluded.",
        ],
      },
      {
        heading: "15. Contact",
        paragraphs: [
          "For questions about these Terms, email contact.sightie@gmail.com.",
          "Korven is operated by an individual developer in the United Kingdom.",
        ],
      },
    ],
  },

  eula: {
    title: "End User Licence Agreement",
    description: "The licence terms for installing and using Korven software.",
    icon: Scale,
    sections: [
      {
        heading: "1. Agreement",
        paragraphs: [
          'This End User Licence Agreement ("Agreement") governs your installation and use of software developed and distributed under the Korven name ("Software").',
          "It applies to Korven applications, including Zapture, unless a product-specific licence is provided.",
          'The licensor is the individual developer operating under the Korven name in the United Kingdom ("Korven", "we", "us", or "our").',
          "By installing or using the Software, you agree to this Agreement. If you do not agree, do not install or use it.",
        ],
      },
      {
        heading: "2. Licence grant",
        paragraphs: [
          "Subject to this Agreement, Korven grants you a personal, non-exclusive, non-transferable licence to download, install, and use the Software on compatible devices.",
          "You may use the Software for personal or commercial purposes without paying a separate commercial-use licence fee, unless a product-specific agreement states otherwise.",
          "This licence does not transfer ownership of the Software to you.",
        ],
      },
      {
        heading: "3. Permitted use",
        paragraphs: ["You may:"],
        bullets: [
          "Download the Software from an authorised Korven distribution source.",
          "Install it on compatible Windows devices.",
          "Use its available features for lawful personal or commercial activities.",
          "Create and use content produced with the Software.",
          "Install updates distributed by Korven.",
        ],
      },
      {
        heading: "4. Restrictions",
        paragraphs: [
          "Unless permitted by applicable law or authorised by Korven in writing, you must not:",
        ],
        bullets: [
          "Sell, rent, lease, sublicense, or redistribute the Software.",
          "Modify, adapt, or create derivative works of the Software.",
          "Reverse engineer, decompile, or disassemble the Software.",
          "Remove copyright, branding, or proprietary notices.",
          "Circumvent technical restrictions or licence controls.",
          "Use the Software to distribute malware or conduct unlawful activities.",
          "Misrepresent the Software as your own product.",
        ],
      },
      {
        heading: "5. Product-specific functionality",
        paragraphs: [
          "Zapture is a Windows screenshot and screen-recording application. Depending on the release, it may provide screen and window capture, screenshot editing, screen recording, system audio and microphone recording, and local file export.",
          "You are responsible for ensuring that your use of capture and recording features complies with applicable law and respects the privacy and rights of others.",
          "Recording calls, meetings, or other people's voices or images can be unlawful without their consent. Some places, including several US states, require the consent of everyone taking part. Tell people before you record them, and get their consent where the law requires it.",
          "Zapture is designed to process user-created screenshots and recordings locally. It does not intentionally upload this content to Korven.",
          "Textura is a planned notes application. Its features and licence terms may be further specified when it becomes available.",
        ],
      },
      {
        heading: "6. Ownership",
        paragraphs: [
          "The Software, including its source code, design, interface, graphics, branding, and documentation, remains the property of Korven or its respective licensors.",
          "This Agreement grants you permission to use the Software. It does not sell or transfer ownership or intellectual property rights.",
          "You retain ownership of content you create using the Software, subject to third-party rights.",
        ],
      },
      {
        heading: "7. Updates",
        paragraphs: [
          "Korven may release updates, patches, improvements, or new versions. Updates may be distributed through the Korven website, GitHub Releases, or another authorised distribution channel.",
          "This Agreement applies to updates unless a separate licence is supplied with them. We do not guarantee that updates or support will be available indefinitely.",
        ],
      },
      {
        heading: "8. Third-party components",
        paragraphs: [
          "The Software includes open-source libraries used under their own licences (MIT, Apache-2.0 and similar). Settings → About → Open-source licences in the Software lists them. Where a separate licence applies, it governs the relevant component, and nothing in this Agreement limits your rights under it.",
          "FFmpeg is not part of the Software. When you set up recording, the Software downloads a separate FFmpeg build published by gyan.dev (licensed under the GNU General Public License version 3), or uses a copy you choose, and runs it as a separate program. FFmpeg is provided under its own licence, not this Agreement; its source code is available from https://ffmpeg.org.",
        ],
      },
      {
        heading: "9. Privacy and local content",
        paragraphs: [
          "Your use of the Software is also subject to the Korven Privacy Policy.",
          "The current Zapture release is intended to operate without telemetry or usage analytics. User-created screenshots and recordings are stored locally on the user's device and are not intentionally transmitted to Korven.",
          "If future versions introduce online services, telemetry, cloud storage, or other data processing, the relevant product documentation and Privacy Policy will be updated.",
        ],
      },
      {
        heading: "10. Disclaimer",
        paragraphs: [
          "To the maximum extent permitted by applicable law, Korven does not guarantee that the Software will be uninterrupted, completely error-free, compatible with every Windows system, or suitable for every user's requirements.",
          "Nothing in this Agreement excludes statutory rights or warranties that cannot lawfully be excluded.",
        ],
      },
      {
        heading: "11. Limitation of liability",
        paragraphs: [
          "Nothing in this Agreement excludes or limits liability where doing so would be unlawful.",
          "Subject to that, Korven is not liable for losses that are not reasonably foreseeable or that arise from circumstances outside its reasonable control.",
          "You should maintain backups of important screenshots, recordings, notes, and other files. Consumers retain mandatory rights and remedies provided by applicable law.",
        ],
      },
      {
        heading: "12. Termination",
        paragraphs: [
          "This licence remains in effect until terminated. You may terminate it at any time by uninstalling and ceasing to use the Software.",
          "Korven may terminate this licence if you materially breach its terms, subject to applicable law.",
          "Following termination, you must stop using the Software and delete copies where legally required.",
        ],
      },
      {
        heading: "13. Export and legal compliance",
        paragraphs: [
          "You agree to use the Software in accordance with applicable laws and regulations, including relevant export restrictions.",
        ],
      },
      {
        heading: "14. Governing law",
        paragraphs: [
          "This Agreement is intended to be governed by the laws of England and Wales.",
          "If you are a consumer, mandatory protections under the laws of the country in which you live may also apply. Nothing in this Agreement removes rights that cannot lawfully be excluded.",
        ],
      },
      {
        heading: "15. Contact",
        paragraphs: [
          "For questions about this Agreement or software licensing, email contact.sightie@gmail.com.",
          "Korven is operated by an individual developer in the United Kingdom.",
        ],
      },
    ],
  },
};

const UPDATED = "23 November 2026";

function anchor(heading: string) {
  return heading
    .toLowerCase()
    .replace(/^\d+\.\s*/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Turns web and email addresses in legal text into links. */
function linkify(text: string) {
  return text.split(/(https?:\/\/[^\s,;]+[^\s,;.)]|[\w.+-]+@[\w-]+\.[\w.]+[\w])/g).map((part, i) => {
    if (/^https?:\/\//.test(part))
      return (
        <a key={i} href={part} target="_blank" rel="noopener noreferrer">
          {part}
        </a>
      );
    if (/^[\w.+-]+@[\w-]+\.[\w.]+$/.test(part))
      return (
        <a key={i} href={`mailto:${part}`}>
          {part}
        </a>
      );
    return part;
  });
}

const tabs = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms of Service" },
  { to: "/eula", label: "EULA" },
];

export default function Legal() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, "").replace(/\/$/, "");
  const doc = documents[slug] ?? documents.privacy;
  const Icon = doc.icon;

  return (
    <>
      <SEO title={doc.title} description={doc.description} path={`/${slug}`} />

      <section className="page-hero legal-hero">
        <div className="grid-bg" />
        <div className="container">
          <Reveal className="page-hero-inner">
            <span className="eyebrow">
              <Icon size={14} />
              Legal
            </span>
            <h1 className="h1">{doc.title}</h1>
            <p className="lead">{doc.description}</p>
            <p className="small legal-dates">
              Effective {UPDATED} · Last updated {UPDATED}
            </p>
          </Reveal>
          <nav className="legal-tabs" aria-label="Legal documents">
            {tabs.map((t) => (
              <NavLink key={t.to} to={t.to} className={({ isActive }) => (isActive ? "is-active" : "")}>
                {t.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </section>

      <section className="section legal-body">
        <div className="container legal-layout">
          <aside className="legal-toc" aria-label="On this page">
            <p className="legal-toc-title">On this page</p>
            <ol>
              {doc.sections.map((s) => (
                <li key={s.heading}>
                  <a href={`#${anchor(s.heading)}`}>{s.heading.replace(/^\d+\.\s*/, "")}</a>
                </li>
              ))}
            </ol>
          </aside>

          <article className="legal-content">
            {doc.sections.map((s) => (
              <section key={s.heading} id={anchor(s.heading)} className="legal-section">
                <h2>{s.heading}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{linkify(p)}</p>
                ))}
                {s.bullets && (
                  <ul>
                    {s.bullets.map((b) => (
                      <li key={b}>{linkify(b)}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <div className="card legal-contact">
              <span className="icon-tile">
                <Mail size={19} />
              </span>
              <div>
                <h2 className="h3">Questions about this document?</h2>
                <p className="body">Contact us if anything is unclear or you have a legal or privacy enquiry.</p>
              </div>
              <a className="btn btn-secondary" href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(doc.title)}`}>
                Contact Korven
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
