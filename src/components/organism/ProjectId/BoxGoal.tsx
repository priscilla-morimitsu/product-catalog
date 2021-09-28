import { useEffect, useState } from "react";
import { useAmountCollected } from "../../../context/AmountContext";
import { IAmount, IProject } from "../../../server/interfaces/Project";
import { calculatePercentage, formatMoney } from "../../../utils/formaters";
import { ProgressBar } from "../../atom/ProgressBar";

interface BoxGoalProps {
  project: IProject;
}

export const BoxGoal = ({ project }: BoxGoalProps) => {
  const { id, collected, goal } = project;
  const { getAmountByProject } = useAmountCollected();

  const [thisProject, setThisProject] = useState<IAmount>({ id, collected });

  useEffect(() => {
    const project = getAmountByProject(id);

    if (project) {
      setThisProject(project);
    };
  }, [id, getAmountByProject])

  return (
    <div className="box">
      <p>
        <span className="is-size-3 has-text-weight-bold mr-2">
          {formatMoney(thisProject.collected)}
        </span> 
        arrecadados
      </p>

      <ProgressBar 
        className="mt-3"
        value={calculatePercentage(thisProject.collected, goal)} 
      />

      <span className="is-size-5 has-text-weight-bold pt-5">
        Meta: {formatMoney(goal)}
      </span>
    </div>
  );
}