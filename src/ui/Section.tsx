import { ReactNode } from "react";

export default function Section({
  id, title, children, className = "",
}: { id?: string; title?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      {title && <h2 className="mb-8 text-center text-4xl font-extrabold">{title}</h2>}
      <div className="mx-auto max-w-6xl px-4">{children}</div>
    </section>
  );
}