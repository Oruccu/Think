import { StyleSheet } from "react-native";
import Color from '../../Style/Color'

const baseStyle = StyleSheet.create({
    title:{
        fontSize:60,
        margin:20,
    }
})

export default {
    SingIn: StyleSheet.create({
        title:{
            ...baseStyle.title,
            color:Color.Secondary,
            
        }
    }),
    SingUp: StyleSheet.create({
        title:{
            ...baseStyle.title,
            color:Color.Primary,
       
        }
    })
}