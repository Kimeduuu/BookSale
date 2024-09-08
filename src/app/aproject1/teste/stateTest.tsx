import { Flex, Button, Text, Input } from "@chakra-ui/react";
import { useState } from 'react'

// let count = 0


interface Book{
    name: any;
  }

export default function Teste(props: Book){

    return(
    <Flex
     textAlign='center'
     align='center'
     flexDir='column'
     gap='20px'

     width='300px'
     height='350px'

     bgColor='purple.600'
     borderRadius='10px'

    > 
        <Text   
         textAlign='center'
         fontSize='27px'
        > 
           {props.name}
        </Text>

        <Button
         bgColor='purple.700'
         transition='.5s'
         _hover={{bgColor: 'purple.800'}}
        > Acessar </Button>
       

    </Flex>

    )
    
}
        {/* <Input 
         value={Name}
         placeholder="qual o seu nome?"
        />
        <Button
        //   onClick={() => setSeeThing(true)}
         onClick={()=> setName}
        >Mudar Estado</Button>
        <Text>{Name}</Text> */}


        
        {/* <Button onClick={add}>
            click
        </Button>
        

        
        <Text> {count} </Text> */}
