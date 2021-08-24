import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Calculator from './src/pages/Calculator/index';
import String from './src/pages/String/index';
import ChecandoCpf from './src/pages/ChecandoCpf';

console.disableYellowBox=true;

const Stack = createStackNavigator();

export default function App(){
    
  return(
   
    <NavigationContainer>
      
        <Stack.Navigator>

             <Stack.Screen
              name= 'Calculator'
              component={Calculator}
              options={{headerShown: false}}
             />

            <Stack.Screen
              name= 'String'
              component={String}
              options={{headerShown: false}}
             />

            <Stack.Screen
              name= 'ChecandoCpf'
              component={ChecandoCpf}
              options={{headerShown: false}}
             />

        </Stack.Navigator>

    </NavigationContainer>

  );

}