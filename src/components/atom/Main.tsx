import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children, ...rest }: MainProps) => {
  return (
    <section className="section" {...rest}>
      <div className="container">
        <div className="columns is-multiline">
          {children}
        </div>
      </div>
    </section>
  );
};