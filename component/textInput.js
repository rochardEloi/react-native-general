import React from 'react';
import {Button, View, TextInput, Text, StyleSheet} from 'react-native'


export default class TextInput_ extends React.Component{
    state = {
        textValue:""
    }
    render() {
        
        return(
            <View>
                <TextInput 
                placeholder="Entrer votre nom"
                value={this.state.textValue}
                onChangeText={(value)=>this.setState({textValue:value})}
                />

                <Button
                  title = {this.state.textValue}
                onPress={()=>{
                  this.setState({textValue:""})
                }}
                />
            </View>
        )
    }
}