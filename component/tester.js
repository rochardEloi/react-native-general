import React from 'react';
import {Text, View, Button} from 'react-native'



export default class Tester extends React.Component{
    state = {
        value:0
    }

    render() {

        return(

            <View>
                <Text>
                  Vous avez cliquer {this.state.value} fois
                </Text>
 
                <Button title="ADD" onPress={()=>{this.setState({value:this.state.value+1})}}></Button>
            </View>
        )
    }

}