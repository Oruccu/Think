import { StyleSheet } from "react-native";
import Color from '../../Style/Color'


export default StyleSheet.create({
    
    container: {
        margin: 10,
        padding: 10,
        backgroundColor: Color.Secondary,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        flex:1,
    },
    innerContainer:{
        flexDirection:'row',
        marginTop:10
       
    },
    dateContainer: {
        flex:1,
        justifyContent:'flex-end',
        alignItems:'flex-end',
    },
    textContainer: {
        flex: 1,
        marginTop:10,
        marginRight:5,
    },
    text: {
        fontSize: 18,
        color:Color.White
    },
    user: {
        fontStyle: 'italic',
        color:Color.White
    },
    date: {
        fontStyle: 'italic',
        color:Color.White
    },
    containerLike:{
        marginRight:8,
        marginLeft:10,
        justifyContent:'center',
        alignItems:'center',
        
    },
    dislike:{
        color:Color.White,
        fontSize:17,
        fontWeight:'bold',
    }
  
})