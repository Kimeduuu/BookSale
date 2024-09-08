"use client" // sempre use quando for usar alguma "funcao dentro de um cliente

import { Flex, Text, Button, Image } from "@chakra-ui/react";
import { InfoOutlineIcon } from '@chakra-ui/icons'

import { useColorMode } from '@chakra-ui/react'

import Link from "next/link";
import { useRouter } from "next/navigation";

// components

import ImgPedro from "../components/imgs/pedro.png"
import Dados from '../components/diversos/dados'



export default function About() {
  const { push } = useRouter();

  const { colorMode, toggleColorMode } = useColorMode();

  // the value of components
  const lucro = 900000



  return (

    <Flex
      flexDir="column"
      align="center"
      // bg="blue"
      h="100vh"
      w="100vw"
      gap='20%'
    >

      <Flex
        width='100vw'
        height='60px'
        bgColor={`${colorMode}.footer`}

        justify='center'
        align='center'
        gap='20px'

      >
        <Text></Text>

        <Link href=''
        >Canal</Link>




        <InfoOutlineIcon
          onClick={toggleColorMode}
          cursor='pointer' />

        <Link href='/home'
        >Contato</Link>


      </Flex>

      <Flex bgColor={`${colorMode}.background`}
        align='center'
        gap='10%'
      >

        <Image src={ImgPedro.src}
          w='300px'
        />


        <Text color={`${colorMode}.textPrimary`} fontSize='23px'>
          Olá, nós somos uma empresa que ama tratar funcionarios como boas pessoas

          <Text> Somos muito cuidados com nossos clientes e é isso e tals e tals...</Text>


          <Dados lucro={lucro} />
        </Text>
        



      </Flex>


      <Flex>

        {/* <Button
            border-radius='0px'
            bgColor={`${colorMode}.button`}

            // bgColor={`${colorMode}.button`}
            _hover={{ bg: `${colorMode}.hButton` }}
          
          >
            BotaoNormal
          </Button> */}
      </Flex>



    </Flex>
  );
}
