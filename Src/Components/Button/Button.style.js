import { StyleSheet, Dimensions } from "react-native";
import Color from "../../Style/Color";

const WIDTH = Dimensions.get('window').width

const baseStyle = StyleSheet.create({
    container:{
        width:WIDTH/1.1,
        margin:10,
        padding:10,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',

    },
    title:{
        fontSize:20,
        fontWeight:'bold'
    }
})

export default {
    Primary: StyleSheet.create({
        
        container:{
            ...baseStyle.container,
            backgroundColor:Color.Secondary,
        },
        title:{
           ...baseStyle.title,
           color:Color.White
        }

    }),
    Secondary: StyleSheet.create({
        container:{
            ...baseStyle.container,
            backgroundColor:Color.Primary,
        },
        title:{
            ...baseStyle.title,
            color:Color.White
        }
    })
}