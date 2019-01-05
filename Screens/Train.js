import React, { Component } from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';
export default class MyWebComponent extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://erail.in/station-live'}}
        style={{ marginTop: 20 }}
      />
    );
  }
}