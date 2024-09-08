import { Flex, Button, Text, Input } from "@chakra-ui/react";
import { useState } from 'react'

// let count = 0


interface Messages{
    messageNum: string
    messageName: string
  }

export default function Teste(props: Messages){
   var [seeThing, setSeeThing] = useState(false)
   var [Name, setName] = useState<string>()
    

    // 
    // onClick={() => setSeeThing(() => true)}

    return(
    <Flex> 

        <Text   
         fontSize='27px'
        //  display={seeThing ? 'block' : 'none'}
        > 
            Olá {props.messageName}, você tem {props.messageNum} novas mensagens!
        </Text>
        

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