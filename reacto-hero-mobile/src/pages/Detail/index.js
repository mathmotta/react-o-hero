import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity , Linking} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer'



import logo from '../../assets/logo.png';
import styles from './styles';

export default function Detail(){
    const navigation = useNavigation();
    const route = useRoute();

    const occurrence = route.params.occurrence;
    const messageBody = `Hi ${occurrence.name}, I\'d like to get in touch to help the occurrence ${occurrence.title} with the value of ${Intl.NumberFormat('pt-PT',{style: 'currency', currency: 'EUR'}).format(occurrence.value)}`;

    function navigateBack(){
        navigation.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: `Hero of ${occurrence.title} occurrence`,
            recipients: [occurrence.email],
            body: messageBody,
        })
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${occurrence.whatsapp}&text=${messageBody}`);
    } 

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} />

                <TouchableOpacity onPress={navigateBack}>
                    <MaterialIcons name="arrow-back" size={28} color="#e82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.occurrence}>
                <Text style={[styles.occurrenceProperty, {marginTop: 0}]}> NGO: </Text>
                <Text style={styles.occurrenceValue}>{occurrence.name} from {occurrence.city}, {occurrence.country} </Text>

                <Text style={styles.occurrenceProperty}>OCCURRENCE: </Text>
                <Text style={styles.occurrenceValue}>{occurrence.title} </Text>

                <Text style={styles.occurrenceProperty}>VALUE: </Text>
                <Text style={styles.occurrenceValue}>{Intl.NumberFormat('pt-PT',{style: 'currency', currency: 'EUR'}).format(occurrence.value)} </Text>

                <TouchableOpacity style={styles.detailsButton} onPress={() => {}} >
                    <Text style={styles.detailsButtonText} >See more about this</Text>
                    <MaterialIcons name='arrow-forward' size={16} color="#e02041" />
                </TouchableOpacity>
            </View>

            <View style={styles.contact}>
                <Text style={styles.heroTitle}>Save the day!</Text>
                <Text style={styles.heroTitle}>Be this occurrence's hero.</Text>
                <Text style={styles.heroDescription}>Get in touch:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-Mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}