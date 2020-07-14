import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        minHeight: 64,
        flex: 1,
        backgroundColor: '#f2f2f2',
        flexDirection: 'row',
        
    
    },

    containerbottom: {
        minHeight: 60,
        flex: 1,
        backgroundColor: '#f2f2f2',
        flexDirection: 'row',
        
    
    },

    casos: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign:'center',
    },

    header: {
        minHeight: 80,
        backgroundColor: '#E02041',
        flexDirection: 'row',
        justifyContent:'center',
        alignContent: 'center',
    },

    map: {
        maxWidth: 30,
        maxHeight: 35,
        marginTop: '5%',
        marginLeft: '32.5%',
        
    },

    whats: {
        maxWidth: 26,
        maxHeight: 34,
        marginLeft: '14%',
    },

    email: {
        maxWidth: 30,
        maxHeight: 20,
    },

    endereco: {
        marginTop: '8%',
        flex: 1,
        marginLeft: 5,
        fontSize: 14,
    },

    whatsapp: {
        fontSize: 11,
    },

    emails: {
        marginLeft: 5,
        fontSize: 11,
    },

    back: {
        
        marginLeft: 13,
        marginTop: Constants.statusBarHeight + 18,
        maxWidth: 17,
    },


    ongTitle: {
        fontWeight: 'bold',
        marginTop: Constants.statusBarHeight + 13,
        fontSize: 20,
        color: '#FFF',
        flex: 1,
        textAlign: 'center',
        marginRight: 30,
    },

    Touchableemail: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        marginLeft: '5%',
    },

    Touchable: {
        flexDirection: 'row',
        flex: 1,
       
    },

    Touchablewhats: {
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'row',
        maxWidth: 150,
        marginLeft: '8%',
    },

    
    incidentList: {
        marginTop: 0,
    },

    incident: {
        padding: 25,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginVertical: 8,
        marginHorizontal: 17,
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
         alignItems: 'center',
         
     },

     detailsButtonText: {
         color: '#E02041',
         fontSize: 15,
         fontWeight: 'bold',
     },

});