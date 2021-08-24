import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import {valida_cpf} from './verifica';


export default function ChecandoCpf(){

    const [ testando, setTestando ] = useState('');
    const [ statuscpf, setStatus] = useState('');


    function respostaCPF(valor) {
        if(valor){
            alert('CPF válido!')
        }else{
            'CPF inválido!'
        }
    }


    return(

    <View style={ styles.Container } >

      <Text style={ styles.Title } >STATUS  CPF </Text>

      <TextInput style= { styles.Input }
       placeholder= 'Digite seu CPF'
       underlineColorAndroid='transparent'
       value={statuscpf}
       onChangeText={(text) => setStatus(text)}
       //keyboardType="numeric"
      />
     

     <TouchableOpacity style={ styles.Btn } onPress={ () => respostaCPF(valida_cpf(statuscpf))}>

      <Text style={ styles.Checkout } >CHECKOUT CPF</Text>

     </TouchableOpacity>



     <TouchableOpacity style={ styles.Btn } onPress={ () => alert(valida_cpf(statuscpf)?'CPF válido!':'CPF inválido!')} >

      <Text style={ styles.Checkout } >Verifica</Text>

     </TouchableOpacity>


    </View>

    );
}

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#1313'
    },
    Title:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
        paddingBottom: 20
    },
    Input:{
        height: 45,
        width: '90%',
        borderWidth: 1,
        borderColor: '#1313',
        borderRadius: 7,
        fontSize: 20,
        margin: 10,
        paddingLeft: 10,
        marginBottom: 30,
        backgroundColor: '#fff'
    },
    Btn:{
       width: '40%',
       height: 45,
       borderWidth: 1,
       backgroundColor: '#1AD8D6',
       borderColor: '#1313',
       borderRadius: 8,
       marginTop: 15,
       justifyContent: 'center'
    },
    Checkout:{
        fontSize: 17,
        textAlign: 'center',
        fontWeight: 'bold',
    }

})

// width: 75%;
// height: 45;
// background-color: #fff;
// align-items: center;
// border-width: 1;
// border-radius: 7;
// border-color: red;
// padding-top: 8;
// margin-bottom: -15px;
// margin-top: 45;