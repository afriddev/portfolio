/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, createContext, useContext, useReducer } from "react";

export type dispatchDataType = {
  type: string;
  payload: any;
};

export type projectType = {
  projectTitle: string | undefined;
  strategy: string[] | undefined;
  client: string | undefined;
  technology: string | undefined;
  projectDesc: string;
  images: string[];
  openProject: boolean;
  openProjectLink: string;
  viewCode: boolean;
  viewCodeLink: string;
  category: string;
  mobileView?: boolean;
};

export type contextType = {
  dispatch: React.Dispatch<dispatchDataType>;
  selectedProject: projectType | undefined;
  scrollView: string | undefined;
};

const initState: contextType = {
  dispatch: () => {},
  selectedProject: undefined,
  scrollView: undefined,
};

const contextProvider = createContext(initState);

function reducer(state: contextType, action: dispatchDataType) {
  switch (action?.type) {
    case "setProjectDetail":
      return {
        ...state,
        selectedProject: action?.payload,
        scrollView:action?.payload?"WORK":undefined
      };
      
    case "setScrollView":
      return {
        ...state,
        scrollView: action?.payload,
      };


    default:
      throw new Error("Action unkonwn");
  }
}
export default function AppContext({ children }: { children: ReactNode }) {
  const [{ selectedProject, scrollView }, dispatch] = useReducer(
    reducer,
    initState
  );

  return (
    <contextProvider.Provider
      value={{
        dispatch,
        selectedProject,
        scrollView,
      }}
    >
      {children}
    </contextProvider.Provider>
  );
}

export function useAppContext() {
  const context = useContext(contextProvider);
  if (!context) throw new Error("Unable to use!");
  return context;
}
