import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,Pressable, TextInput} from 'react-native';

export default class App extends React.Component {
  
  state = {
    alcool: 0,
    gasolina: 0,
    alcoolGasolina: ''
  }

calcular = () => {
  this.setState({
    alcoolGasolina: this.retornaMelhorCombustivel(this.calculaPreco())
  })
}

calculaPreco = () => {
  return parseFloat(this.state.alcool) / parseFloat(this.state.gasolina)
}

retornaMelhorCombustivel = (preco) => {
  return preco < 0.7 ? 'Álcool' : 'Gasolina'
}


render () {
  return (
    <View style={styles.container}>
      <Text style={{color: '#17d8ff', fontSize: 40, margin: 15}}> Álcool ou Gasolina</Text>

      <Image
        style={styles.stretch}
        source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdGrD4FQcJvyal8g4zgRLjHskce3Z12MwvKA&usqp=CAU"}}
        style={{ width: 400, height: 200}}
      />

      <TextInput style={styles.inputCss} placeholder="Preço do Álcool" onChangeText={alcool => this.setState({alcool})} />
      <TextInput style={styles.inputCss} placeholder="Preço da Gasolina" onChangeText={gasolina => this.setState({gasolina})} />
      
    

      <Pressable style={styles.botao} onPress={this.calcular}>
        <Text style={styles.textoBotao}>Verificar</Text>
      </Pressable>
  
      <Text style={{color: 'black', fontSize: 30, margin: 15}}>{this.state.alcoolGasolina}</Text>
      <StatusBar style="auto" />
    </View>
  )
}
}

const styles = StyleSheet.create({
container: {
  flex: 0.7,
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',
},

inputCss: {
  borderWidth: 1,
  margin: 10,
  width: '80%',
  padding: 10,
  borderRadius: 8
},

stretch: {
  width: "50%",
  height: "20%",
  resizeMode: "stretch",
},

botao:{
  width: 300,
  height: 50,
  margin: 20,
  backgroundColor: '#17d8ff'
},
textoBotao:{
  textAlign: 'center',
  textAlignVertical: 'center',
  height: 45,
  fontSize:30,
  color: 'white'
},

});


