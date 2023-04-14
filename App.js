import React from 'react';
import { Button, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const App=()=> {
const nuevaCitaHandler=()=>{
console.log('Presionaste el boton...')
}

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titulo}>Administrador de citas {''}
        <Text style={styles.tituloBold}>Veterinaria</Text>
        </Text>
        <Pressable style={styles.btnNuevaCita}
        onPress={nuevaCitaHandler}>
          <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#F3F4F6',
    flex:1
  },
  titulo: {
    textAlign:'center',
    fontSize:30,
    color:'#374151',
    fontWeight:'bold'
  },
  tituloBold:{
    fontWeight:900,
    color:'#6D28D9',
  },
  btnNuevaCita:{
    backgroundColor:'#6D28D9',
    padding:15,
    marginTop:20,
    marginHorizontal:20,
    borderRadius:10
  },
  btnTextoNuevaCita:{
    textAlign:'center',
    color:'#FFF',
    fontSize:20,
    fontWeight:'900',
    textTransform:'uppercase'
  }
});
export default App;