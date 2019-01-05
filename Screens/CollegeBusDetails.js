import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Body, Icon} from 'native-base';
import { View, Text, ImageBackground, FlatList} from 'react-native';
import Communications from 'react-native-communications';
import * as myConstants from './constants';
export default class HomeScreen extends React.Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true,
        busdetails: null,
        drivername: null,
        phone: null
        }
      }

    componentDidMount(){

        return fetch('http://test.gitzberry.com/collegeBus.php?pBUS_ID='+ this.props.navigation.state.params.BusID)
          .then((response) => response.json())
          .then((response) => {
    
            this.setState({
              isLoading: false,
              drivername: response.DRIVER_NAME,
              phone: response.PHONE_NUMBER
            });
            this.takeRoute();
    
          })
          .catch((error) =>{
            console.error(error);
          });
        }

        takeRoute = () =>{
        fetch('http://test.gitzberry.com/collegeBus.php?BUS_ID='+ this.props.navigation.state.params.BusID)
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
        <Text style = {{fontWeight: 'bold',fontSize:20}}>Driver of bus no {this.props.navigation.state.params.BusID}: {this.state.drivername}  </Text>
        <Text style = {{fontWeight: 'bold',fontSize:20}} onPress={() => Communications.phonecall(this.state.phone,true)}>Phone: <Icon name='call' /> {this.state.phone}  </Text>
        <Text style = {{fontWeight: 'bold',fontSize:20}}>Route of bus no: {this.props.navigation.state.params.BusID} </Text>
        <FlatList 
          data = {this.state.busdetails}
          renderItem = {({item}) => 
          <Card>
            <CardItem style={{backgroundColor:'#a6d3a0'}} button onPress={() => this.props.navigation.navigate('CBD',{BusID:item})}>
              <Text style={{fontSize:18, fontWeight:'bold'}}>{item}</Text>
            </CardItem>
         </Card>}
          />
      </View>
    );
  }
}