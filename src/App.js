import "./App.css";
import Upload from "./components/Upload";
import Navbar from "./components/Navbar";
import {createTheme, ThemeProvider,responsiveFontSizes } from '@mui/material';



function App() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Upload />
      </div>
    </ThemeProvider>
  );
}

export default App;
