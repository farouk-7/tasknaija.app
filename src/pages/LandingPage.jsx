import { Box } from '@chakra-ui/react'
import Hero from '../components/landingpage/Hero'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import Feature from '../components/landingpage/Feature'
import Process from '../components/landingpage/Process'
import Testimony from '../components/landingpage/Testimony'
import Explore from '../components/landingpage/Explore'
import DownloadPage from '../components/landingpage/DownloadPage'
import Result from '../components/landingpage/Result'
import Contact from '../components/landingpage/Contact'
import Faq from '../components/landingpage/Faq'
import AboutUS from '../components/landingpage/AboutUS'

const LandingPage = () => {
    useEffect(()=>{
        Aos.init({duration:300})
    }, [])
  return (
    <Box>
      <Hero />
      <Feature />
      <Process />
      <Testimony />
      <Explore />
      <DownloadPage />
      <Result />
      <AboutUS />
      <Contact />
      <Faq />
      
    </Box>
  );
}

export default LandingPage