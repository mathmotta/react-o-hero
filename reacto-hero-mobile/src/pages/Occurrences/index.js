import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logo from '../../assets/logo.png';
import styles from './styles';

export default function Occurrences(){
    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Detail');
    }

    return(
        <View style={styles.container} >
            <View style={styles.header}>
                <Image source={logo} />
                <Text style={styles.headerText}>
                    Total of <Text style={styles.headerTextBold}>0 occurrences</Text>.
                </Text>
            </View>

            <Text styles={styles.title}>Welcome!</Text>
            <Text styles={styles.description}>Choose a case below and save the day!</Text>

            <FlatList style={styles.occurrenceList} data={[1,2,3]} keyExtractor={oc => String(oc)} showsVerticalScrollIndicator={false} renderItem={() => (
                            <View style={styles.occurrence}>
                                <Text style={styles.occurrenceProperty}>NGO: </Text>
                                <Text style={styles.occurrenceValue}>SomeNGO </Text>
            
                                <Text style={styles.occurrenceProperty}>OCCURRENCE: </Text>
                                <Text style={styles.occurrenceValue}>Some occurrence </Text>
            
                                <Text style={styles.occurrenceProperty}>VALUE: </Text>
                                <Text style={styles.occurrenceValue}>250 € </Text>
            
                                <TouchableOpacity style={styles.detailsButton} onPress={navigateToDetail} >
                                    <Text style={styles.detailsButtonText} >See more about this</Text>
                                    <MaterialIcons name='arrow-forward' size={16} color="#e02041" />
                                </TouchableOpacity>
                            </View>
                )} />
        </View>
    );
}
