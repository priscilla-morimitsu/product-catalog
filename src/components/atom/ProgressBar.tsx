import { ProgressHTMLAttributes } from "react";
import { formatPercent } from "../../utils/formaters";

interface ProgressBarProps extends React.DetailedHTMLProps<ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>{
  value: number;
  className?: string;
};

export const ProgressBar = ({ value, className, ...rest }: ProgressBarProps) => {
  return (
    <progress className={`progress is-success ${className}`} value={value} max="100" {...rest}>{formatPercent(value)}</progress>
  );
}