import React from 'react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Asegúrate de importar QueryClient y QueryClientProvider desde @tanstack/react-query
import { ConnectKitProvider } from 'connectkit'; // Asumiendo que esta es la forma correcta de importar ConnectKitProvider
import { AppLayout } from './components/ui/layouts';
import { config } from './config/wagmi';
import { Home } from './pages';

const queryClient = new QueryClient(); // Crear una instancia de QueryClient

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <ConnectKitProvider mode="light">
          <AppLayout>
            <Home />
          </AppLayout>
        </ConnectKitProvider>
      </WagmiProvider>
    </QueryClientProvider>
  );
}

export default App;
