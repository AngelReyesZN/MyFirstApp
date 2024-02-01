import { StyleSheet, Text, View } from 'react-native';

const app = () => {
  return(
    <View style={styles.container}> 
    <Text style={styles.textHelloWorld} >Hola mundo</Text>
    <Text style={styles.textname}>Me llamo Angel</Text>
    <Text  style={styles.textname}>Y desarrolle esta app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#002329',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHelloWorld: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#FFFFFF",
    fontFamily: 'sans-serif',
  },  
  textname: {
    fontSize: 12,
    fontWeight: '300',
    color: "white",
  },
  textbody: {
    fontSize: 12,
    fontWeight: '300',
    color: "red",
  },
});

export default app;