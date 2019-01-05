import React, { Component } from "react";
import { View, Text, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import * as myConstants from './constants';
export default class HomeScreen extends React.Component {

    saintgitsKottayam = () =>{
        myConstants.source = 'SAINTGITS';
        myConstants.destination = 'KOTTAYAM';
        myConstants.time = new Date().toLocaleTimeString();
        this.props.navigation.navigate('PvtBusDetails');

    }

    Kottayamsaintgits = () =>{
      myConstants.source = 'KOTTAYAM';
      myConstants.destination = 'SAINTGITS';
      myConstants.time = new Date().toLocaleTimeString();
      this.props.navigation.navigate('PvtBusDetails');

  }

  SaintgitsCGY = () => {
      myConstants.source = 'SAINTGITS';
      myConstants.destination = 'CHANGANASSERRY';
      myConstants.time = new Date().toLocaleTimeString();
      this.props.navigation.navigate('PvtBusDetails');
  }


  CGYSaintgits = () => {
    myConstants.source = 'CHANGANASSERRY';
    myConstants.destination = 'SAINTGITS';
    myConstants.time = new Date().toLocaleTimeString();
    this.props.navigation.navigate('PvtBusDetails');
}

  render() {
    return (
      <Container>
      <Content>
        <Card style={{borderTopWidth:20}}>
          <CardItem header button onPress={this.saintgitsKottayam}>
            <Text style={{fontWeight:'bold'}}>Saintgits to Kottayam</Text>
          </CardItem>
          <CardItem button onPress={this.saintgitsKottayam}>
            <Body>
              <Text>
              <Image source={require('../assets/school.png')}></Image>{"\t"}{"\t"}{"\t"}{"\t"}SAINTGITS - KOTTAYAM {"\t"}{"\t"}{"\t"}{"\t"}
              <Image source={require('../assets/cityscape.png')}></Image>
              </Text>
            </Body>
          </CardItem>
       </Card>


       <Card>
          <CardItem header button onPress={this.SaintgitsCGY}>
            <Text style={{fontWeight:'bold'}}>Saintgits to Changanasserry</Text>
          </CardItem>
          <CardItem button onPress={this.SaintgitsCGY}>
            <Body>
            <Text>
              <Image source={require('../assets/school.png')}></Image>{"\t"}{"\t"}{"\t"}{"\t"}SAINTGITS - CHANGANASSERRY {"\t"}{"\t"}{"\t"}{"\t"}
              <Image source={require('../assets/cityscape.png')}></Image>
              </Text>
            </Body>
          </CardItem>
       </Card>



        <Card>
          <CardItem header button onPress={this.Kottayamsaintgits}>
            <Text style={{fontWeight:'bold'}}>Kottayam to Saintgits</Text>
          </CardItem>
          <CardItem button onPress={this.Kottayamsaintgits}>
            <Body>
            <Text>
            <Image source={require('../assets/cityscape.png')}></Image> {"\t"}{"\t"}{"\t"}{"\t"}KOTTAYAM - SAINTGITS  {"\t"}{"\t"}{"\t"}{"\t"}
              <Image source={require('../assets/school.png')}></Image>
              </Text>
            </Body>
          </CardItem>
       </Card>


        <Card>
          <CardItem header button onPress={this.CGYSaintgits}>
            <Text style={{fontWeight:'bold'}}>Changanasserry to Saintgits</Text>
          </CardItem>
          <CardItem button onPress={this.CGYSaintgits}>
            <Body>
            <Text>
            <Image source={require('../assets/cityscape.png')}></Image> {"\t"}{"\t"}{"\t"}{"\t"}CHANGANASSERRY - SAINTGITS  {"\t"}{"\t"}{"\t"}{"\t"}
              <Image source={require('../assets/school.png')}></Image>
              </Text>
            </Body>
          </CardItem>
       </Card>
      </Content>
    </Container>
    );
  }
}