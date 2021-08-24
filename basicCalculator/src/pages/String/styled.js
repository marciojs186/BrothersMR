import styled from 'styled-components/native';

export const Container = styled.View`
 flex: 1;
 background-color: #6F7E82;
 align-items: center;
`;

export const Title = styled.Text`
align-items: center;
color: indigo;
text-align: center;
margin-top: 45;
font-size: 38;
font-weight: bold;
padding-bottom: 28;
`;

export const InputText = styled.TextInput`
   font-size: 20;
   border-width: 1;
   border-color: red;
   border-radius: 7px;
   width: 90%;
   height: 45;
   margin-right: 15;
   background-color: #fff;
   margin-bottom: 55px;
`;

export const ContainerBox = styled.View`
   flex: 2;
   background-color: #1313;
   width: 100%;
   height: 10px;
   align-items: center;
   padding-top: 30px;
`;

export const Resultado = styled.Text`
   width: 45;
   height: 45;
   color: #131313;
background-color: #fff;
width: 90%;
border-radius: 7;
border-color: red;
border-width: 1;
text-align: center;
padding-top: 8;
font-size: 25;
`;

export const TextRes = styled.Text`
   width: 90%;
   height: 35;
   color: red;
   font-size: 22;
   font-weight: bold;
   text-align: center;
`;

export const BtnMaMi = styled.TouchableOpacity`
 width: 75%;
 height: 45;
 background-color: #fff;
 align-items: center;
 border-width: 1;
 border-radius: 7;
 border-color: red;
 padding-top: 8;
 margin-bottom: -15px;
 margin-top: 45;
`;

export const Tamanho = styled.Text`
font-size: 25;
font-weight: bold;
color: indigo;
`;

export const BtnCalc = styled.TouchableOpacity`
 width: 10%;
 height: 20;
 background-color: #131313;
 border-radius: 7;
 margin-top: 15;
 margin-left: 85%;
`;

export const TextCalc = styled.Text`
font-size: 15;
text-align: center;
color: red;
`;
