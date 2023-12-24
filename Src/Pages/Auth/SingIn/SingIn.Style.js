import { StyleSheet, Dimensions } from "react-native";
import Color from "../../../Style/Color";

const Width = Dimensions.get('window').width
export default StyleSheet.create({
    image:{
        flex:1
    },
    container:{
        flex:1,
        justifyContent:'center',
        margin:10,
        
    },
    text:{
        justifyContent:'center',
        alignItems:'flex-start',
    },
    error:{
        color:Color.Secondary,
        marginLeft:20,
    }
})