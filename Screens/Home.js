import React, { Component } from 'react';
import { Container, Header, Button, Content,Card, CardItem, Body, Footer } from 'native-base';
import {Image,ImageBackground,Text} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
const launchscreenBg = require('../assets/back.jpg');
export default class LayoutExample extends Component {
  render() {
    return (
      <Container>
      <ImageBackground source={launchscreenBg} style={{flex: 1,width: null,height: null}}>
      
      
          <Grid style={{borderTopWidth:25}}>
            <Row >


            <Col style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', height: '100%'}}>
            <Card style={{backgroundColor:'rgba(255, 255, 255, 0.4)'}} >
            <CardItem header bordered style={{backgroundColor:'rgba(255, 255, 255, 0.5)'}} button onPress = {() => this.props.navigation.navigate('PvtBus')}>
              <Text style={{ fontWeight:'700' }}>Private Bus Details</Text>
            </CardItem>
            <CardItem style={{backgroundColor:'rgba(255, 255, 255, 0.4)'}} button onPress = {() => this.props.navigation.navigate('PvtBus')}>
              <Body>
                <Image source={require('../assets/pvtbus.png')}></Image>
              </Body>
            </CardItem>
            <CardItem footer style={{backgroundColor:'rgba(255, 255, 255, 0.4)'}} button onPress = {() => this.props.navigation.navigate('PvtBus')}>
              <Text style={{ fontWeight:'bold' }}>Click here to know public bus timings</Text>
            </CardItem>
          </Card>
            </Col>



            <Col style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', height: '100%' }}>
            <Card style={{backgroundColor:'rgba(255, 255, 255, 0.4)'}} >
            <CardItem header bordered style={{backgroundColor:'rgba(255, 255, 255, 0.5)'}} button onPress = {() => this.props.navigation.navigate('College')}>
              <Text style={{ fontWeight:'700' }}>College Bus Details</Text>
            </CardItem>
            <CardItem style={{backgroundColor:'rgba(255, 255, 255, 0.4)'}} button onPress = {() => this.props.navigation.navigate('College')}>
              <Body>
                <Image source={require('../assets/school-bus.png')}></Image>
              </Body>
            </CardItem>
            <CardItem footer  style={{backgroundColor:'rgba(255, 255, 255, 0.4)'}} button onPress = {() => this.props.navigation.navigate('College')}>
              <Text style={{ fontWeight:'bold' }}>Click here to know college bus details</Text>
            </CardItem>
          </Card>
            </Col>

            </Row>





            <Row><Col style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', height: '100%' }}>
            <Card style={{backgroundColor:'rgba(255, 255, 255, 0.4)'}} >
            <CardItem header bordered style={{backgroundColor:'rgba(255, 255, 255, 0.5)'}} button onPress = {() => this.props.navigation.navigate('Train')}>
              <Text style={{ fontWeight:'700' }}>Train Details</Text>
            </CardItem>
            <CardItem style={{backgroundColor:'rgba(255, 255, 255, 0.4)'}} button onPress = {() => this.props.navigation.navigate('Train')}>
              <Body>
                <Image source={require('../assets/underground.png')}></Image>
              </Body>
            </CardItem>
            <CardItem footer style={{backgroundColor:'rgba(255, 255, 255, 0.4)'}} button onPress = {() => this.props.navigation.navigate('Train')}>
              <Text style={{ fontWeight:'bold' }}>Click here to know train timings</Text>
            </CardItem>
          </Card>
            </Col>


            <Col style={{ backgroundColor:'rgba(0, 0, 0, 0.4)', height: '100%' }}>
            <Card style={{backgroundColor:'rgba(255, 255, 255, 0.4)'}} >
            <CardItem header bordered style={{backgroundColor:'rgba(255, 255, 255, 0.5)'}} button onPress = {() => this.props.navigation.navigate('AutoDrivers')}>
              <Text style={{ fontWeight:'700' }}>Auto Driver Details</Text>
            </CardItem>
            <CardItem style={{backgroundColor:'rgba(255, 255, 255, 0.4)'}} button onPress = {() => this.props.navigation.navigate('AutoDrivers')}>
              <Body>
                <Image source={require('../assets/rickshaw.png')}></Image>
              </Body>
            </CardItem>
            <CardItem footer style={{backgroundColor:'rgba(255, 255, 255, 0.4)'}} button onPress = {() => this.props.navigation.navigate('AutoDrivers')}>
              <Text style={{ fontWeight:'bold' }}>Click here to call nearby auto drivers</Text>
            </CardItem>
          </Card>
            </Col>



            </Row>
          </Grid> 
      <Footer style={{backgroundColor:'rgba(255, 255, 255, 0.4)', height:35}}><Text style={{fontWeight:'bold'}}>App Powered by Gitzberry Technologies. {"\n"}App idea by Christow T Joseph and Team</Text></Footer>
      </ImageBackground>
      </Container>
    );
  }
}