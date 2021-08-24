import { Alert } from "react-native";

export default function TextoGrande(altera){
    if(altera == ''){
        Alert.alert('Digite algo!')
    }else{ altera == true }
    return altera.toUpperCase() 
}

export function TextoPequeno(altera){
    if(altera == ''){
        Alert.alert('Digite algo!')
    }else{ altera == true }
    return altera.toLowerCase()
}
