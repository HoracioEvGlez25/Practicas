import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Ir a la pantalla de Detalles"
        onPress={() => navigation.navigate('Details', {itemId: 1, otherParam:'Text from home'})}
      />
      <Button
        title="Ir a la pantalla de Configuración"
        onPress={() => navigation.navigate('Settings', {itemId: 1, otherParam:'Text from home'})}
      />
    </View>
  );
}

export default HomeScreen;
