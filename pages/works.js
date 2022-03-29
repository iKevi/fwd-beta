import { Container, Heading, SimpleGrid, Divider,Box } from '@chakra-ui/react'
//import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'

import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'



const Works = () => (
  
  <Container maxW="container.lg" pt={6}>

<Box
        borderRadius="md"
        mb={6}
        p={3}
        textAlign="center"
        
      >

      </Box>

      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <Box
        borderRadius="md"
        mb={6}
        p={3}
        textAlign="center"
        
      >

      </Box>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Venda" thumbnail={thumbInkdrop}>
          E-commerce/Insuretech with a difference
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="skill++"
            thumbnail={thumbWalknote}
          >
            Skill++ is an e-learning platform leveraging Artificial Intelligence for the best learning experience.It is gamified to enhance the learning process while engaging the user and many coursesare provided for various topics and levels ...
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="Zimfoods apps"
            thumbnail={thumbFourPainters}
          >
            A video work generated with deep learning, imitating famous four
            painters like Van Gogh
          </WorkGridItem>
        </Section>
 
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="AgricitizensNet app"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
   
      </SimpleGrid>

    </Container>

)

export default Works
