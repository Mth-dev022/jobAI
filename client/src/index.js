import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRoutes from './routes/Routes';

import { DataProvider } from './context/dataContext';
import { AuthProvider } from './context/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>
      <AuthProvider>
        <AppRoutes>
          <App />
        </AppRoutes>
      </AuthProvider>
    </DataProvider>

  </React.StrictMode>
);

reportWebVitals();
