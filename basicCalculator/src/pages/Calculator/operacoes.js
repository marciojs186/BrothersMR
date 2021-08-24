import { Alert } from "react-native"

export default function Somando(v1, v2) {
    if (v1 == '' || v2 == '') {
        Alert.alert('Campos em Branco!')
    }
    return parseFloat(v1) + parseFloat(v2)
}

export function Subtrair(v1, v2) {
    if (v1 == '' || v2 == '') {
        Alert.alert('Campos em Branco!')
    }
    return parseFloat(v1) - parseFloat(v2)
}

export function Multiplicar(v1, v2, setValor) {
    if (v1 == '' || v2 == '') {
        Alert.alert('Campos em Branco!')
    }
    setValor(parseFloat(v1) * parseFloat(v2))
}

export function Dividir(v1, v2){
    if(v1 == '' || v2 == '') {
        Alert.alert('Campos em Branco')
    }
    return parseFloat(v1) / parseFloat(v2)
}
