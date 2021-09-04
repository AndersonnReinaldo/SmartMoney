import React from 'react'
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';


import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons'

import BalancePanelLabel from './balancePanelLabel';
import BalancePanelChart from './balancePanelChart';
import Colors from '../../styles/Colors'

const BalancePanel = ({onNewEntryPress}) => {
       const currentBalance = 2064.35;
    return (
     

<View style={styles.container}>




        <LinearGradient colors={[Colors.violet , Colors.blue]} style={styles.panel}>
<BalancePanelLabel currentBalance = {currentBalance}/>
<BalancePanelChart/>
        </LinearGradient>

        <TouchableOpacity 
        onPress={onNewEntryPress}
     style={styles.addButton}>
        
        <Icon name="add" size={30} color={Colors.white}/>
        </TouchableOpacity>
        
        </View>
    )
};

const styles = StyleSheet.create({
    container:{

    },

panel:{
//flex:1,
paddingVertical:10, 

},
addButton:{
    backgroundColor: Colors.green,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    elevation: 5,
    borderRadius: 150,
    marginTop: -25,
    marginRight: 10,
    shadowColor: "#000",

    
}

})

export default BalancePanel;
