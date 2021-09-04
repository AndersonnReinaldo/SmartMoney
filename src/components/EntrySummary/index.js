import React from 'react';
import {SafeAreaView} from 'react-native';

import EntrySummaryList from './EntrySummaryList';
import EntrySummaryChart from './EntrySummaryChart';
import Container from '../../components/Core/Container/index';

const entriesGrouped = [
  {key: '1', description: 'Alimentação', amount: 200},
  {key: '2', description: 'Combustivel', amount: 12},
  {key: '3', description: 'Aluguel', amount: 120},
  {key: '4', description: 'Lazer', amount: 250},
  {key: '5', description: 'Outros', amount: 2000},
];

const EntrySummary = ({onPressActionButton}) => {
  return (
    <Container
      title={'Categorias'}
      actionLabelText={'Útimos 7 dias'}
      actionButtonText={'Ver mais'}
      onPressActionButton={onPressActionButton}>
      <EntrySummaryList entriesGrouped={entriesGrouped} />

      <EntrySummaryChart />
    </Container>
  );
};

export default EntrySummary;
