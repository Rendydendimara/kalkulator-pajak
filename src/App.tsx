import { Box } from '@chakra-ui/react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import IndexPage from './pages';
import KalkulatorPage from './pages/kalkulator';

function App() {
  return (
    <Box p="30px">
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/kalkulator" element={<KalkulatorPage />} />
        </Routes>
      </Router>
    </Box>


  );

}

export default App
