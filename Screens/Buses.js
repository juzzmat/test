import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Body, Icon} from 'native-base';
import { View, Text, ImageBackground, FlatList} from 'react-native';
import * as myConstants from './constants';
export default class HomeScreen extends React.Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true,
        busdetails: null
        }
      }

    componentDidMount(){
    
        return fetch('http://test.gitzberry.com/collegeBus.php?DESTINATION='+myConstants.place)
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
        <Text style = {{fontWeight: 'bold',fontSize:20}}>Buses from {myConstants.place} </Text>
        <FlatList 
          data = {this.state.busdetails}
          renderItem = {({item}) => 
          <Card>
            <CardItem style={{backgroundColor:'#a6d3a0'}} button onPress={() => this.props.navigation.navigate('CBD',{BusID:item})}>
              <Text style={{fontSize:18, fontWeight:'bold'}}>Bus No: {item}</Text>
            </CardItem>
         </Card>}
          />
      </View>
    );
  }
}