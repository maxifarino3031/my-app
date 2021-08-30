import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { HomePage } from './pages';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <HomePage />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
