import { useState } from 'react'

import {
 
    Stack,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    useColorModeValue,
    Button,Flex,Alert,AlertIcon,AlertDescription,AlertTitle
  
    
  } from '@chakra-ui/react'
    
function ContactForm() {    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [status, setStatus] = useState('')
    
    async function handleOnSubmit(e) {
        e.preventDefault();
        const formData = {
            name,
            email,
            message
        }
        
        setSubmitted(true)
        
        fetch('/api/mail', {
            method: 'post',
            body: JSON.stringify(formData)
        }).then((res) => {
            if (res.status === 200) {
                setSubmitted(false)
                setName('')
                setEmail('')
                setMessage('')
                setStatus('success')
            }
            else {
                setStatus('error')
            }
        }) 
    }
    
    return (
     //./Components/Contact.js
<form action='submit' method='POST' onSubmit={handleOnSubmit}>
    <Stack>
        <FormControl id="name" isRequired>
            <FormLabel>Name:</FormLabel>
            <Input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
        </FormControl>
        <FormControl id="email" isRequired>
            <FormLabel>Email address:</FormLabel>
            <Input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        </FormControl>
        <FormControl id="text" isRequired>
            <FormLabel>Message:</FormLabel>
            <Textarea
                placeholder="You can type your message here..."
                value={message}
                onChange={(e) => { setMessage(e.target.value) }}
            />
        </FormControl>
        <Button type="submit"
            backgroundColor={useColorModeValue('#1F85DE', '#DE781F')}
            isLoading={submitted}
            loadingText="Submitting"
        >
            SUBMIT
        </Button>

        <Flex>
    {status === "success" ?
        <Alert status="success">
            <AlertIcon />
            <AlertTitle mr={2}>Success!</AlertTitle>
            <AlertDescription>Your email has been sent.</AlertDescription>
        </Alert>
        : status === "error" ?
            <Alert status="error">
                <AlertIcon />
                <AlertTitle mr={2}>Error!</AlertTitle>
                <AlertDescription>Your email was unable to be sent.</AlertDescription>
            </Alert>
            : null
    }
</Flex>
    </Stack>
</form>





    )
}
    
export default ContactForm