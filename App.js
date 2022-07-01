import React, {useState, useEffect} from "react";
import { View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import dioLogoBranca from './assets/icons/logo-dio-white.png';
import dioLogoNormal from './assets/icons/logo-dio.png';
import Torch from "react-native-torch";
import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, settoggle] = useState(false);


  const handleChangeToggle = () => {settoggle(((oldToggle) => !oldToggle))};


  useEffect(() => { 
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {

    const subscription = RNShake.addListener(() => settoggle(((oldToggle) => !oldToggle)));


    return () => subscription.remove();

  }, [])
  // modelando os dois jeitos de importar imagens
  return  <View style={toggle ? style.containerLight : style.container}> 
            <TouchableOpacity onPress={handleChangeToggle}>
              <Image 
                style = {toggle ? style.litghtingOn : style.litghtingOff }
                source= {toggle ? require('./assets/icons/eco-light.png') : require('./assets/icons/eco-light-off.png')}
              />
              <Image 
                style = { style.dioLogo }
                source= {toggle ? dioLogoNormal : dioLogoBranca}
              />                   
            </TouchableOpacity>
          </View>;
}

export default App;

const style = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lanternaAcesa: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150
  },
  lanternaDesligada: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
    tintColor: 'white'
  },
  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  }  
});
