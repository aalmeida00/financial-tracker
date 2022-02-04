import React from 'react';
import { BsWallet } from 'react-icons/bs'
import { Flex, Center } from '@chakra-ui/react'
import { hoverColor } from '../themeColors';

const IconBase = () => {
  return (

    <Flex w='66px' h='76px' _hover={{
      background: hoverColor
    }}>
      <Center>
        <BsWallet />
      </Center>
    </Flex>

  );
};

export default IconBase;
