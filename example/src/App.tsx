import { View, StyleSheet } from 'react-native';
import { TransactionsList, Header } from '@arturocastro/react-native-rnc-library-ntt';
// import { useState } from 'react';

// const info = getDeviceInfo();

export default function App() {

  // const [showModal, setshowModal] = useState<boolean>(false)

  return (
    <View style={styles.container}>
      <Header title='Transacciones'/>
      {/* <ConfigItem onPress={()=>{}}/> */}
      {/* <Card/> */}
      {/* <InputWithDelete/> */}
      {/* <Email/> */}
      {/* <Selector/> */}
      {/* <Button/> */}
      {/* <Password/> */}
      {/* <Button type="secondary" title="MODAL" onPress={()=>{setshowModal(!showModal)}}/> */}
      {/* <Modal visible={showModal} onClose={()=>setshowModal(false)}/> */}
      {/* <Text>Info: {JSON.stringify(info)}</Text> */}
      <TransactionsList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
});
