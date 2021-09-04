import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Colors from '../../../styles/Colors';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Container = ({
  title,
  actionLabelText,
  actionButtonText,
  children,
  onPressActionButton,
}) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}> {title}</Text>}

      {children}

      {(actionButtonText || actionLabelText) && (
        <View style={styles.actionContainer}>
          {actionLabelText && (
            <Text style={styles.actionLabel}>{actionLabelText}</Text>
          )}

          {actionButtonText && (
            <TouchableOpacity
              style={styles.actionButton}
              onPress={onPressActionButton}>
              <Icon
                name="insert-chart"
                size={20}
                style={styles.actionButtonIcon}
              />
              <Text style={styles.actionButtonText}>{actionButtonText}</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.asphalt,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255 , 0.2)',
    margin: 5,
    padding: 8,
    flex: 1,
  },
  actionContainer: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 12,
    color: Colors.white,
    marginBottom: 5,
  },
  actionLabel: {
    flex: 1,
    fontSize: 12,
    color: Colors.white,
  },
  actionButton: {
    flexDirection: 'row',
  },
  actionButtonIcon: {
    color: Colors.white,
    marginTop: 1,
    marginRight: 2,
  },
  actionButtonText: {
    fontSize: 12,
    color: Colors.white,
    marginTop: 2,
  },
});

export default Container;
