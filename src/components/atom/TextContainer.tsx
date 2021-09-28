interface TextContainerProps {
  title: string;
  children: string;
};

export const TextContainer = ({ title, children }: TextContainerProps) => {
  return (
    <div className="container">
      <h1 className="title is-capitalized">{title}</h1>
      <h2 className="subtitle has-text-justified">{children}</h2>
    </div>
  );
}