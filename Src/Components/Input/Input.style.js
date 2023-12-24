import { StyleSheet, Dimensions } from "react-native";
import Color from "../../Style/Color";

const WIDTH = Dimensions.get('window').width

const baseStyles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 3,
        borderBottomWidth: 1,
        width: WIDTH / 1.1,
        flexDirection: 'row',

    },
    
})

export default {
    Primary: StyleSheet.create({
        container: {
            ...baseStyles.container,
            borderColor: Color.Primary,
        },
        icon: {
            margin: 3,
        }
    }),
    Secondary: StyleSheet.create({
        container: {
            ...baseStyles.container,
            borderColor: Color.Secondary,
        },
        icon: {
            margin: 3,
        }
        
    }),

}
