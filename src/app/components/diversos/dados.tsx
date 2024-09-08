import React, { useState } from 'react'

import { Flex, Text } from "@chakra-ui/react";

interface User {
    name: string,
    login: string,
    avatar_url: string;
}


export default function Info(props:any){
    return(
        <Flex
        flexDirection='column'
        >
            <Text>Lucro por mês: {props.lucro} </Text>
            <Text></Text>
         
        </Flex>
    )
}