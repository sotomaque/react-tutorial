import React, { createContext, useReducer, useContext } from 'react';

const CountContext = createContext();

const countReducer = (state, action) => {
  switch (action.type) {
    case 'increment': {
      return { count: state.count + 1 };
    }
    case 'decrement': {
      return { count: state.count - 1 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const CountProvider = ({ children }) => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  const value = { state, dispatch };

  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
};

export const useCount = () => {
  const context = useContext(CountContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
};

export default CountProvider;
