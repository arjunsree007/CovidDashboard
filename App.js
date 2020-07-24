import React, { useState } from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { Overlay, Text, Divider, Header } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Linking, View } from 'react-native';
import { FontAwesome5, Entypo } from '@expo/vector-icons';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>

      <Overlay
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}
      >
        <>
          <Text style={{ textAlign: 'center' }} h3>About</Text>
          <Divider />

          <View style={{ padding: 10, alignItems: 'center' }}>
            <Text style={{ fontSize: 16 }}>App version v1.0.0</Text>
            <Text style={{ fontSize: 16 }}>Made with React Native Expo(v.38)</Text>

            
            
            <Text>{"     "}</Text>

            <Text >Report an bug
            </Text>
            <Text>  or 
             </Text>
             <Text>have any suggestions to make the app better  
            </Text>

            <Text> Get in Touch &nbsp;
             <Entypo style={{ color: 'blue'}} onPress={() => Linking.openURL('mailto:arjunsreedhar007@gmail.com?subject=Covid-19 India Dashboard')} name="mail" size={20}  />
            </Text>

            <Text>{"     "}</Text>


            <Text style={{ fontSize: 18 }} >Follow me on &nbsp;
             <FontAwesome5 style={{ color: 'blue' }} onPress={() => Linking.openURL('https://github.com/arjunsree007')} name="github-square" size={20} />
            </Text>
          </View>


        </>
      </Overlay>

      <Header
        centerComponent={{ text: 'Covid-19 India Dashboard', style: { color: '#fff' } }}
        rightComponent={
          <Ionicons name="md-information-circle" size={24} color="white" size={24}
            onPress={() => setIsVisible(true)} />
        }
      // linearGradientProps={{
      //   colors: ['red', 'green'],
      //   start: { x: 0, y: 0.5 },
      //   end: { x: 1, y: 0.5 },
      // }}
      />
      <AppNavigator />
    </>
  );
}



