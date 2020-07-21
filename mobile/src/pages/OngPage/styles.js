import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,  
    },

    header: {
        minHeight: 80,
        backgroundColor: '#E02041',
        flexDirection: 'row',
        flex: 1,
    },

    Touchableemail: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flex: 1,
        maxWidth: '50%',
        backgroundColor: '#FFF',
        marginRight: '7%',
        minHeight: '80%',
        borderRadius: 8,
        maxHeight: '84%',
        
    },


    Touchablewhats: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginLeft: '7%',
        marginRight: '4%',
        minWidth: '39%',
        maxHeight: '84%',
        backgroundColor: '#FFF',
        borderRadius: 8,
    },

    containera: {
        minHeight: 80,
        flex: 1,
        backgroundColor: '#f2f2f2', 
        justifyContent: 'center',
    
    },

    containerb: {
        minHeight: 75,
        flex: 1,
        backgroundColor: '#f2f2f2',
        flexDirection: 'row', 
        
        
    
    },

    map: {
        maxWidth: 30,
        maxHeight: 35,
        marginTop: '2%',
        alignSelf: 'center',
        
    },

    whats: {
        maxWidth: 26,
        maxHeight: 34,
        marginTop: '-4%',
        
    },

    email: {
        
        maxWidth: 30,
        maxHeight: 20,
        marginTop: '-4%',
    },

    endereco: {
        alignSelf: 'center',
        marginTop: '1%',
        marginBottom: '1%',
    },

    whatsapp: {
        marginBottom: 0,
        fontSize: 11,
    },

    emails: {
        marginTop: '5%',
        marginLeft: 0,
        fontSize: 11,
        textAlign: 'center',
        
    },

    ongTitle: {
        fontWeight: 'bold',
        marginTop: Constants.statusBarHeight + 13,
        fontSize: 20,
        color: '#FFF',
        flex: 1,
        textAlign: 'center',
        marginRight: '7.5%',
        
    },

    
    back: {
        
        marginLeft: '3%',
        marginTop: Constants.statusBarHeight + 18,
        maxWidth: 17,
    },

    title: {
        fontSize: 24,
        marginBottom: 16,
        color: '#13131a',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    incidentList: {
        marginTop: 32,
        
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        marginHorizontal: 24,
     },

     incidentProperty: {
         fontSize: 14,
         color: '#41414D',
         fontWeight: 'bold',
     },

     incidentValue: {
         marginTop: 8,
         fontSize: 15,
         marginBottom: 24,
         color: '#737380'
     },

     detailsButton: {
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center'
     },

     detailsButtonText: {
         color: '#E02041',
         fontSize: 15,
         fontWeight: 'bold',
     },

});