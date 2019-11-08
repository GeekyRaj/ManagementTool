import React from 'react';
import { View ,StyleSheet} from 'react-native';

const CardSection = (props) => {
    const {container}=Styles
    return(
    <View style={{...container,height:props.height?props.height:'auto', width:'96%'}}>
      {props.children}
    </View>
);
}

export { CardSection } ;


const Styles=StyleSheet.create({
    container:{
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'white',
        justifyContent:'flex-start',
        borderColor:'black',
        position:'relative',
        borderRadius: 10,
        marginBottom: 5,
    }
})
