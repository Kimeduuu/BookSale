"use client" // sempre use quando for usar alguma "funcao dentro de um cliente

import { Flex, Text, Button, Input, Image, Link } from "@chakra-ui/react";

import { useState } from 'react'

import { useColorMode } from '@chakra-ui/react'

import Retangulo from "./retangulo.png"

import Test from './stateTest'



export default function About() {

  const [book, setBook] = useState('')



  const test = localStorage.getItem('search');

  // const _login = localStorage.getItem('login')



  const [_book, _setBook] = useState()

  const [verifyName, setVerifyName] = useState('')

  const nameOfBook = verifyName

  const handleChangeBook = (event: any) => {
    setVerifyName(event.target.value);
  };


  const Search = () => {
    window.location.href = `./teste`
    const Tbook = localStorage.setItem('search', `${nameOfBook}`)
  }
 

  const verify = test


  const [visible, setVisible] = useState(true)

  const [seeBook, setSeeBook] = useState()

  
  

  return (
    <Flex

      fontFamily='monospace'
      width='100vw'
      height='100vh'
      align='center'
      flexDir='column'
      bgColor='purple.400'
    >


      <Flex>

        <Flex
          height='70px'
          bgColor='purple.500'
          width='100vw'
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
              display={visible ? 'block' : 'none'}
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

      >


        <Text
          fontSize='23px'
        >
          Resultados para: <strong> {test} </strong>
        </Text>

        


      </Flex>

      <Test name={verify}/>
      
    </Flex>
  )
}
