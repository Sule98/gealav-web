"use client";

export function BackToTop() {
  return <button type="button" className="foot-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Volver arriba <span aria-hidden="true">↑</span></button>;
}
