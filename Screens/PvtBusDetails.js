import React, { Component } from "react";
import { View, Text, FlatList } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body,Icon } from 'native-base';
import * as myConstants from './constants';
export default class HomeScreen extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true,
    busdetails: null
    }
  }

  componentDidMount(){
    
    return fetch('http://test.gitzberry.com/privateBus.php?TIME='+myConstants.time+'&SOURCE='+ myConstants.source +'&DESTINATION='+myConstants.destination)
      .then((response) => response.json())
      .then((response) => {

        this.setState({
          isLoading: false,
          busdetails: response
        });

      })
      .catch((error) =>{
        console.error(error);
      });
    }

  render() {
    return (
        <View style={{borderTopWidth:25}}>
        <Text style = {{fontWeight: 'bold'}}>Buses from {myConstants.source} to {myConstants.destination}</Text>
        <FlatList 
          data = {this.state.busdetails}
          keyExtractor={(item)  => item.BUS_ID}
          renderItem = {({item}) => 
          <Card>
            <CardItem header style={{backgroundColor:'#a6d3a0'}}>
              <Text style={{fontSize:18, fontWeight:'bold'}}>{item.BUS_NAME}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={{fontSize:12, fontWeight:'bold'}}> <Icon name='bus' /> Bus arriving at {myConstants.source} at {item.BUS_TIME}</Text>
              </Body>
            </CardItem>
         </Card>}
          />
      </View>
    );
  }
}