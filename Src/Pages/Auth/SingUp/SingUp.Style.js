import { StyleSheet } from "react-native";
import Color from "../../../Style/Color";

export default StyleSheet.create({
    image:{
        flex:1
    },
    container:{
        flex:1,
        justifyContent:'center',
        margin:10,
    },
    error:{
        color:Color.Primary,
        marginLeft:20,
    }
})