import { useCallback, useEffect, useState } from "react";
import { useAmountCollected } from "../../../context/AmountContext";
import { IProject } from "../../../server/interfaces/Project";
import { Button } from "../../atom/Button";
import { RadioButton } from "../../molecule/form/RadioButton";

interface BoxFormProps {
  project: IProject;
};

export const BoxForm = ({ project }: BoxFormProps) => {
  
  const { id, collected } = project;
  const { amountByProject, setAmountByProject, sumTotalCollected } = useAmountCollected();
  
  const [valueCollected, setValueCollected] = useState<number>(0);

  // Salva no contexto o valor inicial coletado
  useEffect(() => {
    setAmountByProject({
      type: 'ADD', 
      payload: { id: id, collected: collected }
    });
  }, [id, collected, setAmountByProject]);

  
  const handleSubmit = useCallback((value: number) => {
    sumTotalCollected(value);

    // Busca o projeto no contexto e soma o valor coletado ao valor inicial
    const project = amountByProject.find((project) => project.id === id);

    if (project) {
      const newTotalCollected = project.collected + value;

      setAmountByProject({
        type: 'UPDATE', 
        payload: { id: id, collected: newTotalCollected }
      });
    };

  }, [id, amountByProject, setAmountByProject, sumTotalCollected]);

  return (
    <div className="box">
      <div className="control">
        <RadioButton name="valueCollected" label="R$ 10" onChange={() => setValueCollected(10)} />
        <RadioButton name="valueCollected" label="R$ 25" onChange={() => setValueCollected(25)} />
        <RadioButton name="valueCollected" label="R$ 50" onChange={() => setValueCollected(50)} />
        <RadioButton name="valueCollected" label="R$ 100" onChange={() => setValueCollected(100)} />

        <Button type="button" onClick={() => handleSubmit(valueCollected)}>
          Apoiar
        </Button>
      </div>
    </div>  
  );
}