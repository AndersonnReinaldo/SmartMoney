import React, {useState} from 'react'
import { StyleSheet, Text, View , TouchableOpacity , Button} from 'react-native'


import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../styles/Colors';

const NewEntryDatePicker = ({value , onChange}) => {
    const [modalVisible, setModalVisible] = useState(false);

   const onChangeValue = date =>{
       onChange(date);
       onCancel();
   };

   const onCancel = () => {
       setModalVisible(false);
   }; 

    return (
        <View>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.button}>

 <Icon name='today' size={30} color={Colors.white}/>
        <DateTimePicker
        datePickerModeAndroid='calendar'
        titleIOS='Data de vencimento'
        cancelTextIOS='Cancelar'
        confirmTextIOS='Ok'
        mode="date"
        date={value}
        isVisible={modalVisible}
        onConfirm={onChangeValue}
        onCancel={onCancel}
      />

        </TouchableOpacity>
    

        </View>
    )
}

export default NewEntryDatePicker

const styles = StyleSheet.create({

    button:{
        backgroundColor: Colors.asphalt,
        width:59,
        height:59,
        borderRadius:150,
        alignItems: 'center',
        justifyContent:'center',
        margin: 2
    }

})
