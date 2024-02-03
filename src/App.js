import Header from './components/Header/Header';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';;

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;
