// import Header from './components/header/header';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Approuter from "./Approuter";

// import HeaderLayout from './HeaderLayout';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Approuter />
    </QueryClientProvider>
  );
};

export default App;
