import React from 'react';
import { View, Text, Button } from 'react-native';

function SettingsScreen({ route, navigation }) {
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Regresar a la pantalla de Inicio"
        onPress={() => navigation.navigate('Home')}
      /> 
      <Button
        title="Ir a la pantalla de Detalles"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default SettingsScreen;
