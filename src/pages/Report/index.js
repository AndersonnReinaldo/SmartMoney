import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Picker} from '@react-native-community/picker';

import ActionFooter, {
  ActionPrimaryButton,
} from '../../components/Core/ActionFooter';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import Colors from '../../styles/Colors';

const Report = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BalanceLabel />
      <View>
        <Picker>
        <Picker.Item label="Todas as categorias" />
          <Picker.Item label="Categoria 1" />
          <Picker.Item label="Categoria 2" />
          <Picker.Item label="Categoria 3" />

        </Picker>
        <Picker>
          <Picker.Item label="Últimos 7 dias" />
          <Picker.Item label="Últimos 10 dias" />
          <Picker.Item label="Últimos 21 dias" />

        </Picker>
      </View>
      <ScrollView>
      <EntrySummary />
      <EntryList />

      </ScrollView>
    

      <ActionFooter>
        <ActionPrimaryButton
          title="Fechar"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </ActionFooter>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default Report;
