import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native'
import Colors from '../../../styles/Colors';


const ActionFooter =({children}) =>{

    return(
        <View style={styles.container} >
            <View style={styles.inner}>
            {children}
            </View>


        </View>
     )
} 

        
    export const ActionPrimaryButton =({title ,onPress}) => {

        return(
            <TouchableOpacity style={styles.primaryButton}onPress={onPress}>
                <Text style={styles.primaryButtonText} primaryButtonText>{title}</Text>
            </TouchableOpacity>



        )
    };

    export const ActionSecondaryButton =({title ,onPress}) => {

        return(

            <TouchableOpacity style={styles.secondaryButton} onPress={onPress}>
                <Text style={styles.secondaryButtonText}>{title}</Text>
            </TouchableOpacity>



        )
    }


      


      
    



const styles = StyleSheet.create({
        container:{
        backgroundColor:Colors.background,
        paddingVertical: 10,
        },
        inner:{
            flexDirection: 'row',
            justifyContent: 'center'
        },
        primaryButton:{
            borderColor: Colors.green,
            borderWidth: 1,
            borderRadius: 150,
            paddingVertical: 10,
            paddingHorizontal: 20,
         
        },
        secondaryButton:{
            paddingVertical: 10,
            paddingHorizontal: 20,
        },
        secondaryButtonText:{
            fontSize:18, 
            color: Colors.white
        },
        primaryButtonText:{
            fontSize:18,
            textAlign: 'center',
            color:Colors.green,
        }

})

export default ActionFooter;
