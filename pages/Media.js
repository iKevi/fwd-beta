import { Container, Heading, SimpleGrid,Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import Threedmedia from '../components/Threedmedia'


import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpg'
import thumb50xFaster from '../public/images/contents/youtube-50x-faster.jpg'

const Media = () => (
  <Layout title="Media">
     <Container maxW="container.lg" pt={6}>

     <Box
        borderRadius="md"
        mb={6}
        p={3}
        textAlign="center"
        
      >

      </Box>

      <Heading as="h3" fontSize={20} mb={4}>
        Media
      </Heading>


      <Section delay={0.5}>
       <Threedmedia/>
      </Section>
    
      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How to Price Yourself as a Freelance Developer"
            thumbnail={thumbHowToPriceYourself}
            href="https://blog.inkdrop.app/how-to-price-yourself-as-a-freelance-developer-3453dfd59d91"
          />
          <GridItem
            title="I made my React Native app 50x faster"
            thumbnail={thumb50xFaster}
            href="https://www.youtube.com/watch?v=vj723NlrIQc"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Media
