import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)

  return (
    <DataContext.Provider value={{data, setData, loading, setLoading}}>
      {children}
    </DataContext.Provider>
  );
};
