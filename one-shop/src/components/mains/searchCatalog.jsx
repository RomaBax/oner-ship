import React from 'react'
import {Box,Button,Container, Heading, Input, Text} from "@chakra-ui/react"
import { BsSearch } from 'react-icons/bs'
function searchCatalog() {
  return (
    <>
    <Container maxW={'80%'}>
      <Heading my={'2%'}>Каталоги оригинальных запчастей</Heading>
    <Box gap={'15%'} px={'5%'} py={'5%'} display={'grid'} gridTemplateColumns={{base:'auto ',lg:'auto auto'}} width={'100%'} height={'auto'} my={'1%'} bg={'#fff'} boxShadow={'0px 0px 25px 5px #f2f2f2'}>
      <Box w={'100%'}>
        <Heading size={'lg'}>Поиск модели по VIN-номеру:</Heading>
        <Box my={'2%'} width={'auto'} borderRadius={'8px'} p={'1%'} height={'auto'} border={'1px solid #f2f2f2'} display={'flex'}>
          <Input width={'90%'} border={'none'} placeholder='Введите VIN' />
          <Button  color='#6B59CC'><BsSearch/></Button>
        </Box>
        <Box display={'flex'}>
          <Text color={'#7A7680'}>Например:</Text>
          <Text color={'#2E1066'}>WAUBH54B11N111054</Text>
        </Box>
      </Box>

      <Box w={'100%'}>
        <Heading size={'lg'}>Поиск модели по VIN-номеру:</Heading>
        <Box my={'2%'} width={'auto'} borderRadius={'8px'} p={'1%'} height={'auto'} border={'1px solid #f2f2f2'} display={'flex'}>
          <Input width={'90%'} border={'none'} placeholder='Введите VIN' />
          <Button  color='#6B59CC'><BsSearch/></Button>
        </Box>
        <Box display={'flex'} mb={'8%'}>
          <Text color={'#7A7680'}>Например:</Text>
          <Text color={'#2E1066'}>WAUBH54B11N111054</Text>
        </Box>
      </Box>
    </Box>
    </Container>
    </>
  )
}

export default searchCatalog