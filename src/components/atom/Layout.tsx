import { ReactNode } from "react";

interface ColumProps {
  children: ReactNode;
  className?: string;
}

export const Column = ({ children, className }: ColumProps) => {
  return (
    <div className={`column is-full-tablet ${className}`}>
      {children}
    </div>
  );
}