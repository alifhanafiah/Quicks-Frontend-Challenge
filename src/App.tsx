import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FABWithMenu from "./components/FABWithMenu";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FABWithMenu />
    </QueryClientProvider>
  );
}

export default App;
