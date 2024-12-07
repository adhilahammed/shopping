// import Header from './components/header/header';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Approuter from "./Approuter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import HeaderLayout from './HeaderLayout';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Approuter />
      <ToastContainer
        position="top-right"
        autoClose={3000} // Auto-close duration in ms
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" // You can also use "dark"
      />
    </QueryClientProvider>
  );
};

export default App;
