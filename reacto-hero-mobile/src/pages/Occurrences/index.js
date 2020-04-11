import React, {useEffect, useState} from 'react';
import { MaterialIcons } from '@expo/vector-icons'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import logo from '../../assets/logo.png';
import styles from './styles';



export default function Occurrences(){
    const [occurrences, setOccurrences] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    function navigateToDetail(occurrence) {
        navigation.navigate('Detail', {occurrence});
    }

    async function loadOccurrences(){
        if(loading){
            return;
        }

        if(total > 0 && occurrences.length === total){
            return;
        }

        setLoading(true);

        const response = await api.get('occurrences', {
            params: { page }
        })

        setOccurrences([... occurrences, ... response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page+1);
        setLoading(false);
    }

    useEffect(() => {
        loadOccurrences();
    }, []);

    return(
        <View style={styles.container} >
            <View style={styles.header}>
                <Image source={logo} />
                <Text style={styles.headerText}>
                    Total of <Text style={styles.headerTextBold}>{total} occurrences</Text>.
                </Text>
            </View>

            <Text styles={styles.title}>Welcome!</Text>
            <Text styles={styles.description}>Choose a case below and save the day!</Text>

            <FlatList style={styles.occurrenceList} 
                data={occurrences} 
                keyExtractor={oc => String(oc.id)} 
                showsVerticalScrollIndicator={false} 
                onEndReached={loadOccurrences}
                onEndReachedThreshold={0.2}
                renderItem={({item:occurrence}) => (
                <View style={styles.occurrence}>
                    <Text style={styles.occurrenceProperty}>NGO: </Text>
                    <Text style={styles.occurrenceValue}>{occurrence.name} </Text>

                    <Text style={styles.occurrenceProperty}>OCCURRENCE: </Text>
                    <Text style={styles.occurrenceValue}>{occurrence.title} </Text>

                    <Text style={styles.occurrenceProperty}>VALUE: </Text>
                    <Text style={styles.occurrenceValue}>{Intl.NumberFormat('pt-PT',{style: 'currency', currency: 'EUR'}).format(occurrence.value)} </Text>

                    <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDetail(occurrence)} >
                        <Text style={styles.detailsButtonText} >See more about this</Text>
                        <MaterialIcons name='arrow-forward' size={16} color="#e02041" />
                    </TouchableOpacity>
                </View>
                )} />
        </View>
    );
}
