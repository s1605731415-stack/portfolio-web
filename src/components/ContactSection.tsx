import { ButtonLink, SectionShell } from "./ui";

export function ContactSection() {
  return (
    <SectionShell id="contact" title="Contact" description="For product design, UX strategy, AI workflow, or frontend-ready portfolio conversations.">
      <div className="flex flex-wrap gap-3">
        <ButtonLink href="mailto:hello@sunwang.design">Email Me</ButtonLink>
        <ButtonLink href="#work" variant="secondary">Review Work</ButtonLink>
      </div>
    </SectionShell>
  );
}
