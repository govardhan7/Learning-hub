import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage'
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <HomePage />
      </ThemeProvider>
    </div>
  );
}

export default App;
