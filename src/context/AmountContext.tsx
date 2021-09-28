import {
  createContext,
  Dispatch,
  ReactNode, useCallback,
  useContext, useReducer,
  useState
} from "react";
import { IAmount } from "../server/interfaces/Project";
import { genericReducer } from "./genericReducer";

interface AmountProviderProps {
  children: ReactNode;
};

interface AmountContextData {
  totalAmountCollected: number;
  numberOfProjects: number;
  amountByProject: IAmount[];
  setAmountByProject: Dispatch<any>;
  getAmountByProject: (id: number) => IAmount;
  sumTotalCollected: (value: number) => void;
};

const AmountContext = createContext({} as AmountContextData);

export function AmountProvider({ children }: AmountProviderProps) {
  const [amountByProject, setAmountByProject] = useReducer(genericReducer, []);
  const [totalAmountCollected, setTotalAmountCollected] = useState<number>(0);
  const [numberOfProjects, setNumberOfProjects] = useState<number>(0);

  const getAmountByProject = (id: number) => {
    return amountByProject.find((project: IAmount) => {
      if (project.id === id) {
        return(project);
      }
    });
  };

  const sumTotalCollected = useCallback((newValue) => {
    if (newValue) {
      const sumValuesCollected = totalAmountCollected + newValue;
      const sumNumberOfProjects = numberOfProjects + 1;
  
      setTotalAmountCollected(sumValuesCollected);
      setNumberOfProjects(sumNumberOfProjects);
    }
  }, [totalAmountCollected, numberOfProjects]);

  return (
    <AmountContext.Provider value={{
      totalAmountCollected,
      numberOfProjects,
      amountByProject,
      setAmountByProject,
      getAmountByProject,
      sumTotalCollected,
    }}>
      {children}
    </AmountContext.Provider>
  );
};

export const useAmountCollected = () => useContext(AmountContext);