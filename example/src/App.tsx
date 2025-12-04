import { View, StyleSheet, Text } from 'react-native';
import { Button, Modal, Password, TransactionItem, getDeviceInfo } from 'react-native-rnc-library-ntt';
import { useState } from 'react';

const info = getDeviceInfo();

export default function App() {

  const [showModal, setshowModal] = useState<boolean>(false)

  return (
    <View style={styles.container}>
      <TransactionItem/>
      <Button/>
      <Password/>
      <Button type="secondary" title="MODAL" onPress={()=>{setshowModal(!showModal)}}/>
      <Modal visible={showModal} onClose={()=>setshowModal(false)}/>
      <Text>Info: {JSON.stringify(info)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
    gap: 16
  },
});
