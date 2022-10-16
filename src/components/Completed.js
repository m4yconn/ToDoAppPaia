import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function Completed(props){

    return(
        <View style={styles.container}>
            <TouchableOpacity
                onPress={props.onPress}
                style = {{
                    marginLeft: 5
                }}
            >
                <FontAwesome name="check" size={28} color="white" />
            </TouchableOpacity>
            <Text style={styles.text}>
                {props.msg}
            </Text>
            <Text>

            </Text>
    
            
        </View>
    );
}

// 

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#8b008b',
        padding: 5,
        marginBottom: 10
    },

    text:{
        color: 'white',
        fontFamily: 'courier',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20
    }
})