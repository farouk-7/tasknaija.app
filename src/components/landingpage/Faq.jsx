import { Box, Text } from "@chakra-ui/react";
import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react";
import faqBg from "../../assets/faqBg.png";
import { faqData } from "../../faqData";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

const Faq = () => {
  //  useEffect(() => {
  //    Aos.init({ duration: 1000 });
  //  }, []);
  return (
    <Box
      id="faqs"
      bgImage={faqBg}
      h={["fit-content","fit-content","680px"]}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      p={["30px 20px", "30px 20px", "50px 70px"]}
    >
      <Box textAlign={"center"} color={"#fff"} 
      // data-aos={"zoom-out"}
      >
        <Text fontSize={"30px"} fontWeight={700}>
          Frequently Asked Questions
        </Text>
        <Text maxW={"500px"} margin={"0px auto"} pb={["10px","10px","20px"]} fontSize={["16px","16px","18px"]}>
          Explore common queries to find quick answers and make the most of your
          experience with TASKNAIJA.
        </Text>
      </Box>
      <Box 
      // data-aos={"zoom-in"}
      >
        <Accordion allowToggle>
          {faqData.map((faq) => (
            // <Accordion key={faq?.id} allowMultiple>
            <AccordionItem
              key={faq?.id}
              bg={"#F1F9F8"}
              maxW={"700px"}
              margin={"0px auto"}
              rounded={"lg"}
              p={"5px"}
              mb={["10px","10px","20 px"]}
              border={"1.2px solid #D6D5D5"}
            >
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  color={"#1A0031"}
                  fontSize={"1rem"}
                  fontWeight={"semibold"}
                  py={"7px"}
                >
                  {faq.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} fontSize={"15px"}>
                {faq.answer}
              </AccordionPanel>
            </AccordionItem>
            // </Accordion>
          ))}
        </Accordion>
      </Box>
    </Box>
  );
};

export default Faq;
