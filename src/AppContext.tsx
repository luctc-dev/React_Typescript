import React, { useState, useContext, useCallback } from 'react';

interface AppContextProps {
  appContext: AppContextDataProps,
  setAppContext(x: any): any
}

interface AppContextDataProps {
  appText: String
}

const initAppState = {
  appText: 'Click me'
}

export const AppContext = React.createContext<any>({...initAppState});

interface AppContextProviderProps {
  children: React.ReactChild;
}

export const AppContextProvider = (props: AppContextProviderProps) => {
  const { children } = props;
  const [appContext, setAppContext] = useState({...initAppState});

  return (
    <AppContext.Provider
      value={{
        appContext,
        setAppContext
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

type SetContext = (
  nextData: ((partialAppData: Partial<AppContextDataProps>) => AppContextDataProps) | Partial<AppContextDataProps>,
) => void;

export type UseAppContext = [AppContextDataProps, SetContext];

export const useAppContext = (): UseAppContext => {
  const { setAppContext, appContext } = useContext<AppContextProps>(AppContext);

  const setContext = useCallback(
    (nextData: ((partialAppData: Partial<AppContextDataProps>) => AppContextDataProps) | Partial<AppContextDataProps>) => {
      if (typeof nextData === 'function') {
        setAppContext((prev: AppContextDataProps) => nextData(prev));
      } else {
        setAppContext((prev: AppContextDataProps) => ({
          ...prev,
          ...nextData,
        }));
      }
    },
    [setAppContext],
  );

  return [appContext, setContext];
};
