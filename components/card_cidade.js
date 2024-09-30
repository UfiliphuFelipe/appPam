import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const card_cidade = (nome, uf)=>{
    return(
        <View style={styles.card}>
            <Text style={styles.cidade}>{nome}</Text> - <Text style={styles.uf}>{uf}</Text>
        </View>
    );
}

export default card_cidade

const style = StyleSheet.create({
    card: {
        width: '1000',
        padding:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#444'
    },
    cidade:{
        fontSize: 18,
        color: '#fff',
        fontWeight: '600'
    },
    uf:{
        fontSize: 18,
        color: '#0206ff',
        fontWeight: '900'
    }
});