import { Container, Heading,Image,
  Button,Box,useColorModeValue } from '@chakra-ui/react'
//import Layout from '../components/layouts/article'
import Section from '../components/section'

import Paragraph from '../components/paragraph'

import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'




const About = () => (
  
  <Container maxW="container.lg" pt={6}>

<Box
        borderRadius="md"
        mb={6}
        p={3}
        textAlign="center"
        
      >

      </Box>


      <Heading as="h3" fontSize={20} mb={4}>
        About Us
      </Heading>

      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Forward Dynamics
          </Heading>
          <p>Mobile Apps, Websites,Softwares and Adverts</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/takuya.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        Forward Dynamics is a software development company started in 2018.
        It&apos;s aimis to innovate and provide software solutions in different sectors of the economy be it agriculture,
         ecommerce , insurance, e-learning and many more...
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
              Some of Our Works
            </Button>
          </NextLink>
        </Box>
      </Section>

     

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        Forward Dynamics is a software development company started in 2018.
        It&apos;s aimis to innovate and provide software solutions in different sectors of the economy be it agriculture,
         ecommerce , insurance, e-learning and many more...
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
              Some of Our Works
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        Forward Dynamics is a software development company started in 2018.
        It&apos;s aimis to innovate and provide software solutions in different sectors of the economy be it agriculture,
         ecommerce , insurance, e-learning and many more...
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
              Some of Our Works
            </Button>
          </NextLink>
        </Box>
      </Section>

      

    </Container>

)

export default About
