import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './index.css';
import App from './App.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StarredProvider } from './context/StarredContext.jsx';
import { CollectedProvider } from './context/CollectedContext.jsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/pokemon-tcg-pocket-tracker">
      <StarredProvider>
        <CollectedProvider>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </CollectedProvider>
      </StarredProvider>
    </BrowserRouter>
  </StrictMode>,
)
