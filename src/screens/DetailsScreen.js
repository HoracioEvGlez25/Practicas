import React from 'react';
import { View, Text, Button } from 'react-native';

function DetailsScreen({ route, navigation }) {
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Regresar a la pantalla de Inicio"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Ir a la pantalla de Configuración"
        onPress={() => navigation.navigate('Settings', {itemId: Math.floor(Math.random()*100), otherParam:'Text from details'})}
      />
    </View>
  );
}

export default DetailsScreen;
