import Head from "next/head";
//import Image from "next/image";
import {  SimpleGrid,Box } from '@chakra-ui/react'
import ContactForm from "../components/ContactForm";
import Threedmedia from "../components/Threedmedia";
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import  "../styles/Home.module.css";
import styles from "../styles/Home.module.css";


export default function ContactUs() {
  return (
    <div className="">
      <Head>
        <title>Sendgrid Contact Form</title>
        <meta
          name="description"
          content="A working contact form with Sendgrid integration and form validations."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
      <Box
        borderRadius="md"
        mb={6}
        p={3}
        textAlign="center"
        
      >

      </Box>

      <Box
        borderRadius="md"
        mb={6}
        p={3}
        textAlign="center"
        
      >

      </Box>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem>       
            <Box
                borderRadius="md"
                mb={6}
                p={3}
                textAlign="center"
            >

       </Box>
      <ContactForm/>
      
      </GridItem>
        
      <GridItem><Threedmedia/></GridItem>
        
        </SimpleGrid>
      </Section>

     
      </main>
    </div>
  );
}