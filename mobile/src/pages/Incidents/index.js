import React, { useState, useEffect } from 'react';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import logoIng from '../../assets/logo.png'
import styles from './styles';
import api from '../../services/api';

export default function Incidents() {
    const navigation = useNavigation();
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    


    

    function navigateToDetail(incidente) {
        navigation.navigate('Detail', { incidente });
    }

    function navigateToOngPage(incidente) {
        
        navigation.navigate('OngPage', { incidente });
        
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
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoIng} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextbold}>{total} casos</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList
                data={incidents}
                style={styles.incidentlist}
                keyExtractor={ incidente => String(incidente.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({ item: incidente }) => (
                <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG:</Text>

                    <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToOngPage(incidente)}
                    >
                        <Text style={styles.incidentOng}>{incidente.name}</Text>
                        
                    </TouchableOpacity>

                    

                    <Text style={styles.incidentProperty}>CASO:</Text>
                    <Text style={styles.incidentValue}>{incidente.title}</Text>

                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { 
                        style: 'currency', 
                        currency: 'BRL' 
                        }).format(incidente.value)}
                    </Text>

                    <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDetail(incidente)}
                    >
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#E02041" />
                    </TouchableOpacity>
                </View>
                )}
                />

        </View>
    
    );
}