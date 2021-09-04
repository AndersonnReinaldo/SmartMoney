import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Animated} from 'react-native';
import {FAB, Portal, Provider} from 'react-native-paper';

const FormCard = () => {
  const [state, setState] = React.useState({open: false});

  const onStateChange = ({open}) => setState({open});

  const {open} = state;

  return (
    <Animated.View style={styles.container}>
      <Text>
        <Text style={{fontSize: 40, fontStyle: 'italic', fontWeight: 'bold'}}>
          Ola Mundo!
        </Text>
      </Text>
    </Animated.View>
  );
};

export default FormCard;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    backgroundColor: '#FDFDFD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
