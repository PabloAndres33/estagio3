import React, {useState,useEffect} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';


export default function Cadastro({navigation}) {

    return (
        <View>
            <Text>Esse é o componente Rastreio</Text>
            <Button
                    title='Ir para Login'
                    onPress={() => navigation.navigate('Login')}
            />
        </View>
    );
}
