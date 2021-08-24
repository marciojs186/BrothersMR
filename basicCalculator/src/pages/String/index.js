import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Container, Title, InputText, ContainerBox, Resultado, TextRes, BtnMaMi,
        Tamanho, BtnCalc, TextCalc} from './styled'; 
        
import TextoGrande, { TextoPequeno }  from './transformaTexto';

export default function String() {

  const [ altera, setAltera ] = useState('');  

  const navigation = useNavigation();

 return (
   <Container>

       <BtnCalc onPress={ () => navigation.navigate('Calculator') }>
         <TextCalc>Calc</TextCalc>
       </BtnCalc>


     <Title>String</Title>

    <InputText
          placeholder='Digite um texto'
          underlineColorAndroid='transparent'
          value={altera}
          onChangeText={(text) => setAltera(text)}
          
    />

    <ContainerBox>
      
      <TextRes>Maiúsculo / Minúsculo</TextRes>

      <Resultado> {altera} </Resultado>

    <BtnMaMi onPress={ () => setAltera(TextoGrande(altera)) } >
      <Tamanho>Maiúsculo</Tamanho>
    </BtnMaMi>


    <BtnMaMi onPress={ () => setAltera(TextoPequeno(altera)) } >
      <Tamanho>Minúsculo</Tamanho>
    </BtnMaMi>

    </ContainerBox>

   </Container>
  );
}