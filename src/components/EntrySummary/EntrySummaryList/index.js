import React from 'react';
import {Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';

const EntrySummaryList = ({entriesGrouped}) => {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          style={styles.Categoria}
          scrollEnabled={false}
          data={entriesGrouped}
          renderItem={({item}) => (
            <Text style={{color:"#fdfdfd" , fontSize:18, padding:5, fontStyle:"italic"}}>
              {item.description} - ${item.amount}{' '}
            </Text>
          )}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default EntrySummaryList;
