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
    const navigation = useNavigation();
    const [incidents, setProfile] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const incidente = route.params.incidente;
    const incident =  route.params.incidente;

    incidente.ong_id = incidente.ong_id;
        
    function navigateToDetail_ong(incidente) {
        navigation.navigate('Detail_ong', { incidente, incident });
    }

    function navigateBack() {
        navigation.goBack()
        
    }

    function sendMail() {
        MailComposer.composeAsync({
            recipients: [incidente.email],
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${incidente.whatsapp}`);
    }

    async function loadProfile(){
        if (loading) {
            return;
        }

        if (total > 0 && incidents.length === total) {
            return;
        }

        setLoading(true);

        const response = await api.get('profile', {
            params: { page },
            headers: { authorization: incidente.ong_id },
            
        });
        
        
        setProfile([...incidents, ...response.data])
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
        
        
    }

    useEffect(() => {
        loadProfile();
    }, []);

    

return(
        
<View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity style={styles.back} onPress={navigateBack}>
                <Feather name='arrow-left' size={20} color='#FFF' />
            </TouchableOpacity>
            <Text style={styles.ongTitle}>{incidente.name}</Text>
        </View>

<View style={styles.containera}>  

    
        <Image style={styles.map} source={map} />
        <Text style={styles.endereco}>{incidente.city}/{incidente.uf}</Text>
   

</View>

<View style={styles.containerb}>

    <TouchableOpacity style={styles.Touchablewhats} onPress={sendWhatsapp}>
        <Image style={styles.whats} source={whats} />
        <Text style={styles.whatsapp}>{incidente.whatsapp}</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.Touchableemail} onPress={sendMail} >
        <Image style={styles.email} source={email} />
        <Text style={styles.emails}>{incidente.email}</Text>
    </TouchableOpacity>

</View>
            <Text style={styles.title}>Casos cadastrados:</Text>
            


    <FlatList
                data={incidents}
                showsVerticalScrollIndicator={false}
                style={styles.incidentlist}
                keyExtractor={ item => String(item.id)}
                onEndReached={loadProfile}
                onEndReachedThreshold={0.2}
                renderItem={({ item: incident }) => (
                <View style={styles.incident}>
                    
                        
                    <Text style={styles.incidentProperty}>CASO:</Text>
                    <Text style={styles.incidentValue}>{incident.title}</Text>

                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { 
                        style: 'currency', 
                        currency: 'BRL' 
                        }).format(incident.value)}
                    </Text>

                    <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDetail_ong(incident)}
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