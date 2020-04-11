import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import logo from '../../assets/logo.png';
import styles from './styles';

export default function Detail(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} />

                <TouchableOpacity onPress={() => {}}>
                    <MaterialIcons name="arrow-back" size={28} color="#e82041" />
                </TouchableOpacity>
            </View>

            
        </View>
    );
}