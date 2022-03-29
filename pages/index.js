import NextLink from 'next/link'
import {
 
  Heading,
  Box,
 
  SimpleGrid,
  Button,


  VStack,
  
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
//import Paragraph from '../components/paragraph'
import  '../components/layouts/LayoutStyles'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'


import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import CarouselComponent from '../components/Carousel'
import { Container } from '../components/layouts/LayoutStyles'




const Home = () => (
  
<Container>

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
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            FWD
          </Heading>
          <p>Websites, Chatbots, Apps, Animation</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
     

          
        </Box>
      </Box>
      
      <Section delay={0.2}>
      <Box display={{ md: 'flex' }} >
        <Box flexGrow={1} boxSize="md">
        <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
          <CarouselComponent/>

          </VStack>
          </Box>

      
        </Box>

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

        </Section>

      

      <Section delay={0.3}>
        

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/Media">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Fun Stuff
            </Button>
          </NextLink>
        </Box>
      </Section>
      </Container>
 
)

export default Home
