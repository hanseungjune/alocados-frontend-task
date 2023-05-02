import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Exchange from './routes/Exchange';
import ExchangeDetail from './routes/ExchangeDetail';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <Routes>
          <Route element={<Nav/>}>
            <Route path="/" element={<Exchange/>}/>
            <Route path="/detail" element={<ExchangeDetail/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
