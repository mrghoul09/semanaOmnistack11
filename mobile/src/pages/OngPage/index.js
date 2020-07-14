import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { Image, Text, View, TouchableOpacity, FlatList, Linking } from 'react-native';
import styles from './styles';
import map from '../../assets/maps.png';
import whats from '../../assets/whats.png';
import email from '../../assets/email.png';
import * as MailComposer from 'expo-mail-composer';
import api from '../../services/api';

export default function OngPage() {
    const route = useRoute();
    const incident = route.params.incident;
    const navigation = useNavigation();
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const ong = api.get('ongs');
    
        
    function navigateToDetail(incident) {
        navigation.navigate('Detail', { incident });
    }

    function navigateBack() {
        navigation.goBack()
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}`);
    }

    async function loadIncidents(){
        if (loading) {
            return;
        }

        if (total > 0 && incidents.length === total) {
            return;
        }

        setLoading(true);

        const response = await api.get('incidents', {
            params: { page }
        });
        
        setIncidents([...incidents, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);

    }


    useEffect(() => {
        loadIncidents();
    }, []);

return(
<View >
        
    <View style={styles.header}>
            <TouchableOpacity style={styles.back} onPress={navigateBack}>
                <Feather name='arrow-left' size={20} color='#FFF' />
            </TouchableOpacity>
            <Text style={styles.ongTitle}>{incident.name}</Text>
    </View>

    <View style={styles.container}>  

        <TouchableOpacity style={styles.Touchable}> 
            <Image style={styles.map} source={map} />
            <Text style={styles.endereco}>{incident.city}/{incident.uf}</Text>
        </TouchableOpacity>
        
    </View>

    <View style={styles.containerbottom}>  

        <TouchableOpacity style={styles.Touchablewhats} onPress={sendWhatsapp}>
            <Image style={styles.whats} source={whats} />
            <Text style={styles.whatsapp}>{incident.whatsapp}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Touchableemail} onPress={sendMail} >
            <Image style={styles.email} source={email} />
            <Text style={styles.emails}>{incident.email}</Text>
        </TouchableOpacity>
        
    </View>

    <Text style={styles.casos}>Casos cadastrados:</Text>

    <FlatList
                
                style={styles.incidentlist}
                keyExtractor={ item => String(item.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.4}
                renderItem={({ item }) => (
                <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG:</Text>

                        <Text style={styles.incidentValue}>{item.name}</Text>
                        
                    <Text style={styles.incidentProperty}>CASO:</Text>
                    <Text style={styles.incidentValue}>{item.title}</Text>

                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { 
                        style: 'currency', 
                        currency: 'BRL' 
                        }).format(item.value)}
                    </Text>

                    <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDetail(item)}
                    >
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#E02041" />
                    </TouchableOpacity>
                </View>
                )}
                />

   




    

    

    

    

</View>

    

)

}