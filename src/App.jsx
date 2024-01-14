import { Box } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import './App.css'
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
// import Services from './pages/Services';

function App() {
  
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="service" element={<Services />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </Box>
  );
}

export default App
