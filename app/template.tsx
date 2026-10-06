// La plantilla se vuelve a montar en cada navegación y repite la entrada de página definida en globals.css.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
