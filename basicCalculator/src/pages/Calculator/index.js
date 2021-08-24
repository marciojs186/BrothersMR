import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Somando, { Subtrair, Multiplicar, Dividir } from './operacoes';

export default function Calculator() {

  const navigation = useNavigation();

  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState('');

  return (
    <View style={styles.Container}>

      <View style={styles.ViewString} >

        <TouchableOpacity onPress={() => navigation.navigate('String')}
          style={styles.BtnString}>
          <Text style={styles.stringText} >String</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => navigation.navigate('ChecandoCpf') }
          style={styles.BtnCpf}>
          <Text style={styles.stringText} >CPF</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.Box1}>

        <Text style={styles.Title} >Basic  Calculator</Text>

        <TextInput style={styles.TextInput}
          placeholder="VALOR 1"
          underlineColorAndroid='transparent'
          value={valor1}
          onChangeText={(text) => setValor1(text)}
          keyboardType="numeric"
        />

        <TextInput style={styles.TextInput}
          placeholder="VALOR 2"
          underlineColorAndroid='transparent'
          value={valor2}
          onChangeText={(text) => setValor2(text)}
          keyboardType="numeric"
        />

      </View>

      <View style={styles.Box2} >

        <Text style={styles.TextRes} >Resultado</Text>

        <View style={styles.Box3}>

           <Text style={styles.ResFinal} > Resultado: {resultado}  </Text>

        </View>

        <View style={styles.ViewBtn}>

          <TouchableOpacity onPress={() => setResultado(Somando(valor1, valor2))}
                            style={styles.btn}>
            <Text style={styles.btnText} >Somar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setResultado(Subtrair(valor1, valor2))}
                            style={styles.btn} >
            <Text style={styles.btnText} >Subtrair</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.ViewBtn}>


          <TouchableOpacity onPress={ () => setResultado(Dividir(valor1, valor2)) }       
                  style={styles.btn}>

            <Text style={styles.btnText} >Dividir</Text>
          
          </TouchableOpacity>


          <TouchableOpacity style={styles.btn} onPress={()=> Multiplicar(valor1, valor2, setResultado)} >
            <Text style={styles.btnText} >Multiplicar</Text>
          </TouchableOpacity>

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#55E8F5',
    alignItems: 'center',
  },
  Title: {
    fontSize: 27,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#fff',
    paddingTop: 30
  },
  TextInput: {
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fff',
    margin: 10,
    width: 290,
    paddingLeft: 10,
    backgroundColor: '#fff'
  },
  Box1: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#55E8F5'
  },
  Box2: {
    flex: 1.2,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#43B4FA',
    paddingTop: 15
  },
  TextRes: {
    fontSize: 28,
    paddingBottom: 8,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#fff'
  },
  Box3: {
    width: 290,
    height: 53,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ResFinal: {
    fontSize: 17,

  },
  ViewBtn: {
    width: '80%',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',

  },
  btn: {
    height: 65,
    width: 120,
    backgroundColor: '#4979E3',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  ViewString: {
    paddingLeft: 300,
    paddingTop: 10
  },
  stringText: {
    backgroundColor: '#4979E3',
    color: 'yellow',
    textAlign: 'center',
    justifyContent: 'center'
  },
  BtnString: {
    width: 40,
    height: 20,
    borderRadius: 77,
  },
  BtnCpf:{
    width: 40,
    height: 20,
    marginTop: 5,
  }
})
