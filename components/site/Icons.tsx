import type { SVGProps } from "react";

export function Arrow({ diagonal = false, ...props }: SVGProps<SVGSVGElement> & { diagonal?: boolean }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>{diagonal ? <path d="M6 18 18 6M6 6h12v12" /> : <path d="M4 12h15m-6-6 6 6-6 6" />}</svg>;
}
export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4.5 4.5" /></svg>;
}
export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}><path d="m6 6 12 12M6 18 18 6" /></svg>;
}
export function LeafIcon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true" {...props}><path d="M25 6C13 4 5 11 8 21c9 6 20-2 17-15Z" /><path d="M5 28 21 12M12 21v-7m0 7h7" /></svg>;
}
export function EggIcon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true" {...props}><path d="M26 20c0 7-4.5 10-10 10S6 27 6 20 11 2 16 2s10 11 10 18Z" /><path d="M11 21c0 3 2 5 4 5" /></svg>;
}
export function SunIcon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true" {...props}><circle cx="16" cy="16" r="6" /><path d="M16 1v5m0 20v5M1 16h5m20 0h5M5 5l4 4m14 14 4 4M5 27l4-4M23 9l4-4" /></svg>;
}
