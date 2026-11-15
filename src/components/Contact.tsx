import { userData } from "../data/userData";

const details = [
  { label: "Email", value: userData.email, href: "mailto:" + userData.email, mark: "@" },
  { label: "LinkedIn", value: "indrajeet-1103", href: userData.linkedin, mark: "in" },
  { label: "GitHub", value: "officio-indrajeet", href: userData.github, mark: "GH" },
  { label: "LeetCode", value: "indra47", href: "https://leetcode.com/indra47/", mark: "</>" },
];

export default function Contact() {
  return (
    <section id="contact" className="section section-contact">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-message"><span className="section-kicker section-kicker-light">07 / Get in touch</span><h2>Let’s build<br/><em>something meaningful.</em></h2><p>Interested in backend engineering, distributed systems, cloud platforms or simply exchanging ideas? I’d be glad to hear from you.</p><a className="button button-light" href={"mailto:" + userData.email}>Start a conversation <span>↗</span></a></div>
          <div className="contact-details"><span className="micro-label micro-label-light">FIND ME ONLINE</span>{details.map((item) => <a className="contact-row" key={item.label} href={item.href} target={item.label === "Email" ? undefined : "_blank"} rel={item.label === "Email" ? undefined : "noopener noreferrer"}><span className="contact-mark">{item.mark}</span><span><small>{item.label}</small><strong>{item.value}</strong></span><i>↗</i></a>)}</div>
        </div>
      </div>
    </section>
  );
}
