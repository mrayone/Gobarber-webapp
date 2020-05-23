import React, { createContext, useContext, useCallback } from 'react';
import ToastContainer from '../components/ToastContainer';

interface ToastPropsState {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = createContext<ToastPropsState>({} as ToastPropsState);

const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('addToast');
  }, []);
  const removeToast = useCallback(() => {
    console.log('removeToast');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

function useToast(): ToastPropsState {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('You can use useToast hook only within ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
