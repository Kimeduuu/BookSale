"use client"

import { Flex, Image, Text, Link, Input, Button } from "@chakra-ui/react";

import { useState } from 'react'

import Retangulo from "../components/imgs/retangulo.png"
// import ImgKimedu from '../components/imgs/Kimedu.png'
// import Teste from '../components/diversos/stateTest'



export default function Login() { 

  const [verifyEmail, setVerifyEmail] = useState('')
  const [verifyName, setVerifyName] = useState('')

  const handleChange = (event:any) => {
    setVerifyEmail(event.target.value); // Atualiza o estado com o valor do input
  };

  const nameOfBook = verifyName

  const handleChangeBook = (event:any) => {
    
    setVerifyName(event.target.value); 

  };



  const Search = () =>{
    window.location.href = `aproject1/teste`

    const book = localStorage.setItem('search', `${nameOfBook}`)

    console.log(nameOfBook)

  }


  const [visible, setVisible] = useState(true)
 


  const changeEmail = () =>{

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(verifyEmail)){
      alert(`email foi enviado, seu email é ${verifyEmail} `)

      localStorage.setItem('login',`${verifyEmail}`)

      setVisible(false)
      

        

    } else{
      alert('email invalido xará!')
      
    }
    }

  return (

    <Flex
     
     position='absolute'
     color='black'
     flexDir='column'
     fontFamily='monospace'
    >
      <Flex>

        <Flex
          bgColor='purple.500'
          width='100%'
          flexDir='row'
          gap='20%'
        >
          <Flex>
            <Image src={Retangulo.src} />
          </Flex>


          <Flex

            align='center'
            fontSize='23px'
            gap='20%'
          >
            <Link> Cart </Link>
            <Link> Home </Link>
            <Link
             display={visible ? 'none' : 'block'}
            > Account </Link>

          </Flex>


          <Flex
            gap='5px'
            align='center'
          >
            <Input
              bgColor='purple.600'
              borderColor='purple.700'
              transition='.5s'
              _hover={{ borderColor: "purple.900" }}

              border="2px solid black"
              placeholder="type the name of book"
              _placeholder={{ color: 'black' }}

              onChange={handleChangeBook}
              value={verifyName}

              
              width='700px'
            />
            <Button
             onClick={Search}
              
              bgColor='purple.700'
              _hover={{ bgColor: "purple.800" }}
              

            > Buscar </Button>
          </Flex>

        </Flex>
      </Flex>


      <Flex
       width='99vw'
       height='90vh'
       bgColor='purple.400'
       gap='20px'
      >
        <Flex
         width='100%'
         align='center'
         justify='center'
        >

          <Flex
           gap='5px'
          >
            <Text
              fontSize='20px'
              > teste teste teste teste teste<br />  testeteste teste<br />  teste teste teste teste teste teste teste teste<br />  testeteste teste<br />  teste teste teste testeteste
               email:
              </Text>

            <Input 
              bgColor='purple.600'

              value={verifyEmail}
              onChange={handleChange}


              borderColor='purple.700'
              
              _hover={{ borderColor: "purple.900" }}
              placeholder="type your email"
              _placeholder={{ color: 'black' }}
              />

              <Button
               onClick={changeEmail}
               bgColor='purple.700'
                transition='.5s'
                _hover={{ bgColor: "purple.800" }}
              > 
                Mandar
              </Button>

          </Flex>


        </Flex>
      </Flex>

    </Flex>
  );
}
