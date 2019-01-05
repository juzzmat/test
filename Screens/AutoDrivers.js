import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Body, Icon} from 'native-base';
import { View, Text, ImageBackground} from 'react-native';
import Communications from 'react-native-communications';
export default class HomeScreen extends React.Component {

  render() {
    return (
        <Container>
            <ImageBackground source={require('../assets/bg.jpg')} style={{flex: 1,width: null,height: null}}>
        <Header  style={{backgroundColor:'#a6d3a0'}}/>
        <Content>
          <Card>
            <CardItem header style={{backgroundColor:'#a6d3a0'}}>
              <Text style={{fontSize:18, fontWeight:'bold'}}>Reghu</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text onPress={() => Communications.phonecall('8281406360',true)}> <Icon name='call' /> 8281406360</Text>
              </Body>
            </CardItem>
         </Card><Card>
            <CardItem header style={{backgroundColor:'#b3ffb3'}}>
              <Text style={{fontSize:18, fontWeight:'bold'}}>Johnson</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text onPress={() => Communications.phonecall('9544399823',true)}> <Icon name='call' /> 9544399823</Text>
              </Body>
            </CardItem>
         </Card>

         <Card>
            <CardItem header style={{backgroundColor:'#d1ffd7'}}>
              <Text style={{fontSize:18, fontWeight:'bold'}}>Sunny</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text onPress={() => Communications.phonecall('9605133951',true)}> <Icon name='call' /> 9605133951</Text>
              </Body>
            </CardItem>
         </Card>

         <Card>
            <CardItem header style={{backgroundColor:'#a6d3a0'}}>
              <Text style={{fontSize:18, fontWeight:'bold'}}>Santhosh</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text  onPress={() => Communications.phonecall('9072875605',true)}> <Icon name='call' /> 9072875605</Text>
              </Body>
            </CardItem>
         </Card>

         <Card>
            <CardItem header style={{backgroundColor:'#b3ffb3'}}>
              <Text style={{fontSize:18, fontWeight:'bold'}}>Sreejith</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text onPress={() => Communications.phonecall('8113968609',true)}> <Icon name='call' /> 8113968609</Text>
              </Body>
            </CardItem>
         </Card>

          <Card>
            <CardItem header style={{backgroundColor:'#d1ffd7'}}>
              <Text style={{fontSize:18, fontWeight:'bold'}}>Siby</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text onPress={() => Communications.phonecall('9544509903',true)}> <Icon name='call' /> 9544509903</Text>
              </Body>
            </CardItem>
         </Card>

         <Card>
            <CardItem header style={{backgroundColor:'#a6d3a0'}}>
              <Text style={{fontSize:18, fontWeight:'bold'}}>Shaji</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text onPress={() => Communications.phonecall('8606103570',true)}> <Icon name='call' /> 8606103570</Text>
              </Body>
            </CardItem>
         </Card>

         <Card>
            <CardItem header style={{backgroundColor:'#b3ffb3'}}>
              <Text style={{fontSize:18, fontWeight:'bold'}}>Benoy</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text onPress={() => Communications.phonecall('9544726594',true)}> <Icon name='call' /> 9544726594</Text>
              </Body>
            </CardItem>
         </Card>
        </Content>
        </ImageBackground>
      </Container>
    );
  }
}