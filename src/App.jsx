import {AppLayout} from "./components/ui/layouts"
import {Home} from "./pages"
import { ConnectKitProvider, ConnectKitButton, getDefaultConfig } from "connectkit";

function App() {
 
  return (
 

      <ConnectKitProvider>
         <AppLayout />
          <Home />
         </AppLayout>
        <ConnectKitButton />
      </ConnectKitProvider>

  );



}

export default App
