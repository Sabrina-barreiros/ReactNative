import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';


class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          <View style={styles.box1}><img src="https://www.mcdonalds.com.br/images/layout/mcdonalds-logo-bg-red.png"></img>
          <text style={styles.box5}>McDonalds</text>
          <text style={styles.corpo}>McDonalds Corporation é a maior cadeia mundial de restaurantes de fast food de hambúrguer, servindo cerca de 68 milhões de clientes por dia em 119 países através de 37 mil pontos de venda. Com sede nos Estados Unidos, a empresa começou em 1940 como uma churrascaria operada por Richard e Maurice McDonald. </text></View>
          
          <View style={styles.box2}><img src="https://gkpb.com.br/wp-content/uploads/2016/08/novo-logo-subway-blog-gkpb-696x364.jpg"></img>
          <text style={styles.box5}>Subway</text>
          <text style={styles.corpo}>Subway é uma rede norte-americana de restaurantes fast food, com especialidade em vendas de sanduíches e saladas. Foi fundada em 1965 por Fred De Luca e Peter Buck. É considerada a rede de franquias que cresceu mais depressa no mundo, com mais de 44 mil restaurantes espalhados por 98 países.</text></View>
          
          <View style={styles.box3}><img src="https://lattinegroup.com/wp-content/uploads/2022/03/logo-giraffas.png"></img>
          <text style={styles.box5}>Giraffas</text>
          <text style={styles.corpo}>Giraffas é uma rede de fast-food brasileira, fundada no Lago Sul, no Distrito Federal em agosto de 1981 por dois amigos, os empresários Mauro Lacerda e Muniz Neto, com seu primeiro restaurante no comércio local da QI 09.</text></View>
          
          <View style={styles.box4}><img src="https://www.burgerking.com.br/images/bklogos/BK-novo-logo.svg"></img>
          <text style={styles.box5}>BurgerKing</text>
          <text style={styles.corpo}>Burger King, muitas vezes abreviado como BK, é uma rede de restaurantes especializada em fast-food, fundada nos Estados Unidos por James McLamore e David Edgerton, que abriram a primeira unidade em Miami, Flórida.</text></View>
          
        </ScrollView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1
    
  },
  box1:{
    
    height: 350,
    width: 200,
  },
  box2:{
    
    height: 350,
    width: 400,

  },
  box3:{
    
    height: 350,
    width: 300,
  },
  box4:{
    
    height: 350,
    width: 200,
  },

  box5:{
    fontSize: 25,
    textAlign: "center",
    fontFamily: "Helvetica",
    margin: 10

  },

  corpo:{
    fontFamily: "Helvetica",
    fontSize: 17,
    textAlign: 'justify',
    padding: 10
  }
})


export default App;
