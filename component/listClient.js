import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';


export default class ListClient extends React.Component{
    state ={

        client : [
            {
                id:1,
                nom:"Eloi",
                prenom:"Rochard Eliamar"
            },
            {
                id:2,
                nom:"Pierre",
                prenom:"Daslin"
            },
            {
                id:3,
                nom:"Damisca",
                prenom:"Darlens"
            },
            {
                id:4,
                nom:"Senatus",
                prenom:"Godson"
            },
        ]
    }

    render() {

        return(
            <View>
             {
                 this.state.client.map((client)=>( 
                         <TouchableOpacity
                          key = {client.id}
                          onPress = {()=>alert(client.nom)}>
                             <Text> 
                             Nom::{client.nom},
                             Prenom::{client.prenom}
                             </Text>
                             
                         </TouchableOpacity>
                     ))
             }
            </View>
            )
    }

}