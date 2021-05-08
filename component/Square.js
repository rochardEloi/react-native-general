import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'


class Square extends React.Component{
   state = {
      monTitre : "Titre du film",
      width:50
   }
   render(){
      const styles = StyleSheet.create({
         styleText : {
            width:this.state.width,
            height:50     
         }
         });
      return(
        <View>
           <Text style={[{backgroundColor:this.props.color}, styles.styleText]}></Text>
           <Button title="AGRANDIR" onPress={(event)=>{
              this.setState({width:this.state.width+10})
           }}></Button>
        </View>

      )
     
   }
   
}

export default Square;