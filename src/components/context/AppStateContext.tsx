import React, { createContext, useContext } from 'react';
import { useImmerReducer } from 'use-immer';

// Define types for the state and actions
interface Task {
  id: string;
  content: string;
}

interface List {
  id: string;
  tasks: Task[];
}

interface AppState {
  lists: List[];
}

// Initial state
const appData: AppState = {
  lists: [],
};

// Reducer function
const appStateReducer = (draft: AppState, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case 'ADD_LIST':
      draft.lists.push(action.payload);
      break;
    // Add other cases as needed
    default:
      break;
  }
};

const AppStateContext = createContext<AppState | undefined>(undefined);

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);
  const { lists } = state;

  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };

  return (
    <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};
