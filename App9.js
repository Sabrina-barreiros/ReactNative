import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';


class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      feed:[
        {id: 1, nome: 'Desenvolvedor Backend', salario: 'R$ 3.200', descricao: 'Tabalhar no computador desenvolvendo no backend', email: 'desenvolvedor@gmail.com'},
        {id: 2, nome: 'Engenheiro de dados', salario: 'R$ 5.000', descricao: 'Tabalhar no computador realizando a engenharia de dados', email: 'engenheiro@gmail.com'},
        {id: 3, nome: 'Desenvolvedor Frontend', salario: 'R$ 2.200', descricao: 'Tabalhar no computador desenvolvendo no frontend',email: 'desenvolvedor@gmail.com'},
        {id: 4, nome: 'Analista de Dados', salario: 'R$ 4.200',descricao: 'Tabalhar no computador analisando dados', email: 'analistadados@gmail.com'},
        {id: 5, nome: 'Desenvolvedor JavaScript', salario: 'R$ 3.600',descricao: 'Tabalhar no computador desenvolvendo no JavaScript', email: 'desenvJava@gmail.com'},
      ]
    }
  }


  render(){
    
    return(
      
      <View style={styles.container}>
        <FlatList 
        data={this.state.feed}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => <Pessoa data={item}/>}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  areaPessoa:{
    backgroundColor: '#f8f8ff',
    height: 200,
    marginBottom: 15
  },
 
  textoPessoa:{
    color: 'black',
    fontSize: 20,
  },


textoPessoaT:{
    color: 'red',
    fontSize: 20,
    textAlign:"center",
    fontSize: 35
  },

})


export default App;


class Pessoa extends Component{
  render(){
   
    return(
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoaT}>Vagas</Text>
        <Text style={styles.textoPessoa}> Nome: {this.props.data.nome} </Text>
        <Text style={styles.textoPessoa}> Salário: {this.props.data.salario} </Text>
        <Text style={styles.textoPessoa}> Descrição: {this.props.data.descricao} </Text>
        <Text style={styles.textoPessoa}> E-mail: {this.props.data.email} </Text>
      </View>
    );
  }
}




