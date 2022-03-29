import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'


const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('white200', 'gray200')
  const linkcolor = useColorModeValue('#1F85DE','#DE781F')
  const coloractive  = useColorModeValue('white200','white200');
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? linkcolor : undefined}
        color={active ? coloractive : inactiveColor}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(5px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.lg"
        wrap="wrap"
        align="right"
        justify="space-between"
      >
        <Flex align="left" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          spacing={6}
          width={{ base: 'full', md: 'auto' }}
          justify={'flex-end'}
          alignItems="right"
          align="right"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >

<Flex align="right" alignItems="right"  mr={5}>

       <LinkItem alignItems="right"
          align="right" href="/" path={path}justify={'flex-end'}>
            Home
          </LinkItem>

         <LinkItem alignItems="right"
          align="right" href="/works" path={path}justify={'flex-end'}>
            Works
          </LinkItem>
          <LinkItem alignItems="right"
          align="right" href="/Media" path={path} justify={'flex-end'}>
            Media
          </LinkItem>

          <LinkItem alignItems="right"
          align="right" href="/about" path={path} justify={'flex-end'}>
            About Us
          </LinkItem>
          <LinkItem alignItems="right"
          align="right" href="/contactus" path={path} justify={'flex-end'}>
            Contact Us
          </LinkItem>
          
        </Flex>
        </Stack>

      

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>

              <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
               
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/Media" passHref>
                  <MenuItem as={Link}>Media</MenuItem>
                </NextLink>

                <NextLink href="/about" passHref>
                  <MenuItem as={Link}>About Us</MenuItem>
                </NextLink>

                <NextLink href="/contactus" passHref>
                  <MenuItem as={Link}>Contact Us</MenuItem>
                </NextLink>
             
              </MenuList>
            </Menu>
          </Box>

          
        </Box>
      
      </Container>
    </Box>
  )
}

export default Navbar

