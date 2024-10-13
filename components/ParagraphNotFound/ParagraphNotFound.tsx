type ParagraphNotFoundProps = {
  type: string;
};

export const ParagraphNotFound = ({ type }: ParagraphNotFoundProps) => {
  return (
    <div className="py-20 text-center my-5 border-indigo-800 border-4 text-4xl font-bold">
      Tipo de párrafo no soportado{" "}
      <span className="font-mono text-gray-500">{type}</span>
    </div>
  );
};
