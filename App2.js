import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Pressable} from 'react-native';
 
export default class App extends React.Component {
  state = {
    value: 0,
    total_taps: 0
  }

  increment = () => {
    this.setState({
      value: this.state.value + 1,
    })
  }

  decrement = () => {
    this.setState({
      value: this.state.value - 1,
    })
  }
 
  render(){
    return(
      <View style={styles.container}>
      <Text style={{color: 'black', fontSize: 25, margin: 20, textAlign: 'center' }}>Contador de Pessoas</Text>
      
      <Text style={{color: 'black', fontSize: 100, margin: 20, textAlign: 'center' }}>{this.state.value}</Text>
      

      <Pressable color='green' style={styles.botao} onPress={this.increment}>
        <Text style={styles.textoBotao}>+</Text>
      </Pressable>

      <Pressable  style={styles.botaoremove} onPress={this.decrement}>
        <Text style={styles.textoBotao}>-</Text>
      </Pressable>
    
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 80,
    alignItems: 'center',
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
  },
  botao:{
    width: 150,
    height: 50,
    margin: 20,
    backgroundColor: 'green',
  },

  botaoremove:{
    width: 150,
    height: 50,
    margin: 20,
    backgroundColor: 'red',
  },

  textoBotao:{
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 45,
    fontSize: 30,
  }
})
 
