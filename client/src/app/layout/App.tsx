import { Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import { useState } from "react";
import {  Route, Switch } from "react-router-dom";
import AboutPage from "../../features/about/About";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/home/HomePage";
import Header from "./Header";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const palletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: palletteType,
      background: {
        default: palletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
};

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/products/:id' component={ProductDetails}/>
          <Route exact path='/products' component={Catalog}/>
          <Route path='/about' component={AboutPage}/>
          <Route path='/contact' component={ContactPage}/>
        </Switch>
      </Container>
    </ThemeProvider>
  );
}

export default App;
