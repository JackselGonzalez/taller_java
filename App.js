//Hola mundo

/* import React from 'react';
    import {View, Text, Button, StyleSheet} from 'react-native';

  const Hola= () => {

    return(
      <View
      style ={{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
      }}> 
      
     <Text> Hola </Text> 
     </View>
    )
  }
  export default Hola; */

/* import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create ({

  center: {
    alignItems: 'center'
  }
})
const Greeting = (props) => {
  return(
    <View style={styles.center}>
     <Text> Hello {props.name}! </Text> 
       </View>
  );
}
const LotsOfGreetings = () => {
  return(
  <View style={[styles.center, {top: 50}]}>
    <Greeting name='Juan'/>
    <Greeting name='Juana'/>
    <Greeting name='Yelsin'/>
  </View>
  );

}
export default LotsOfGreetings; */

//State

/* import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { defaultProps } from 'react-native/Libraries/Components/ActivityIndicator/ActivityIndicator';

const App = () => {
const [ count, setCount] = useState(0);

return(
  <View style={styles.container}>  
  <Text> As Clickcado: {count} Veces</Text>
  <Button
  onPress={() => setCount(count + 1)}
  title="Click Aqui"
  />
  
    </View>
  );
};
//  React NAtive Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App; */

/* import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const App = () => {
  return (
  <ScrollView>
    <Text>Imagen</Text>
    <View>
    <Text>Gatito</Text>
    <Image
    source={{
      uri: 'https://reactnative.dev/docs/assets/p_cat2.png'
    }}
    style={{width: 200, height: 200}}
/>
  </View>
  <TextInput
  style={{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }}
  defaultValue=""
  />
  </ScrollView>
  );
}
export default App; */

/////////////////////////////Componentes////////////////////////////////////

//////Navigation Header (revisar codigo)////////Funcional////////////

/* import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center' , justifyContent: 'center'}}>
    <Text>URACCAN WASLALA</Text>  
    </View>
  );
} 
function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Inicio'}}
        />
      </Stack.Navigator>
    </NavigationContainer> 

  );
}
export default App;
 */
////////styles en la cabesera/////////////Funcional/////////

/*  import * as React from 'react';

import { Button, View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';


function HomeScreen({ navigation }) {

  return (

<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>Bienvenidos</Text>

      <Button

title="Perfiles"

        onPress={() => navigation.navigate('Detalles')}

/>

    </View>

);

}


function DetailsScreen() {

  return (

<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>Pantalla de Detalles</Text>

    </View>
       );
     }

const Stack = createStackNavigator();

 function App() {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Inicio">
            <Stack.Screen name="Cabesera de detalles" component={HomeScreen} />
          <Stack.Screen name="Detalles" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
 }

 export default App; */
 

 /////////stylos en la cabesera//////////Funcional////////////

/* import * as React from 'react';
import { View, Text, styleSheet} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

function HomeScreen(){
  return(
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>URACCAN</Text>
      </View>
  );
}
const Stack = createStackNavigator();
function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Bienvenidos',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'pink',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App; */

//////Componentes Basicos///////Funcional//////////

/* import React from "react"
import {View, Text } from "react-native"

const ViewBoxesWithColorAndText = () => {
  return(
    <View
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20
      }}
    >
        <View style= {{ backgroundColor: "#331A5A", flex: 0.3}}/>
        <View style= {{ backgroundColor: "#9E1387", flex: 0.5}}/>
        <Text>Jacksel</Text>
    </View>
  );
};
export default ViewBoxesWithColorAndText;  */

///////////////////////un  componente para mostrar Text///////Funciona//////

/* import React,{ useState} from "react";
import {Text, StyleSheet } from "react-native";

const TextInANest = () => {
  const [titleText, setTitleText] = useState ("Nota");
  const bodyText = useState ("Un gusto resivirle");

  const onPressTitle = () => {
    setTitleText("Estudiantes");
  };

  return(
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
        {"\n"}
        {"\n"}
      </Text>
      <Text style={styles.bodyText} numberOfLines={5}>{bodyText}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "cochin"
  },
  titleText:{
    fontSize: 20,
    backgroundColor: "#255E5A",
    fontWeight: "bold"
  },
  bodyText: {
    fontSize:15,
    backgroundColor: '#DF0D06',
    fontWeight:"bold"
  }
});

export default TextInANest; */

//////////////INSIDE////// aun no carga la imagen con ese link//// nota con la de gatito si funciona////
/* import React from "react";
import { ImageBackground, StyleSheet, Text, View} from "react-native";

const Image= {uri: "https://rrcfgc.files.wordpress.com/2013/02/log-uraccan.png"}

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={Image} style={styles.Image}>
      <text style={ styles.text}>Inside</text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  Image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text:{
    color: "#E4BA23",
    fontSize: 42,
    fontWeight:"bold",
    textAling: "center",
    backgrounColor: "#BAB49F"
  }
});
export default App; */
 
////////TextInput///////////
/* import React from "react";
import { SafeAreaView, StyleSheet, TextInput} from "react-native";

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("Digite un texto");
  const [number, onChangeNumber] = React.useState(null);
  
  return (
    <SafeAreaView>
      <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Digite numeros"
          keyboardType="numeric"
        />
    </SafeAreaView>
  );

};
 const styles =  StyleSheet.create({
   input: {
     height: 40,
     margin:12,
     borderWidth:1,
   },
 });

 export default UselessTextInput; */

 //////////////ScrollView//////////
 
/* import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar} from 'react-native';

const App = () => {
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
        Hola mundo les saluda su amigo Jacksel URACCAN WASLALA
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: '#8904B1',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
export default App; */

///////////StyleSheet/////////
/* import React from "react";
import { StyleSheet, Text, View} from "react-native";

const App = () => (
  <View style={styles.container}>
    <Text style={styles.title}>
      Jacksel
    </Text>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#0404B4"
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#D7DF01",
    borderRadius: 6,
    backgroundColor: "#848484",
    color:"#D7DF01",
    textAlign:"center",
    fontSize: 30,
    fontWeight: "bold"
  }
});
export default App; */

///////////// flatList

/* import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';

const DATA = [
  {
    id: '1111-1111-1111-1111-1111',
    title: 'Primer elemento',
  },
  {
    id: '2222-2222-2222-2222-2222',
    title: ' Segundo elemento',
  },
  {
    id: '3333-3333-3333-3333-3333',
    title: 'Tercer elemento',
  },
];
const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title}/>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#FF0040',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
export default App; */

///////////////

/* import React, { useState } from "react-native";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity} from "react-native";

const DATA = [

  {
    id: '1111-1111-1111-1111-1111',
    title: 'Primer elemento',
  },
  {
    id: '2222-2222-2222-2222-2222',
    title: ' Segundo elemento',
  },
  {
    id: '3333-3333-3333-3333-3333',
    title: 'Tercer elemento',
  },

];
const Item = ({item, onPress, style}) => (
  <TouchableOpacity onPress = {onPress} style={[ styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);
const App = () => {
  const [selectedId, setSelectedId] = useState (null);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    
  return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={( backgroundColor )}
      />
    );
   };
   
  return (
   <SafeAreaView style={styles.container}>
    <FlatList
      data={DATA}
      renderItem={renderItem} 
      keyExtractor={(item) => item.id}
      extraData={selectedId}
    />
   </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
export default App;
 */

//////////////// 

/* import React, { component } from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar} from "react-native";

const DATA = [
  {
    title: "Main dishes ",
    data: ["Pizza", " Burger", "Rissoto"]
  },
  {
    title:" sides ",
    data: ["French Fries", "Onion Rings", "Friend Shirmp" ]
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"]
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  }
];

Item = ({ title }) => (
  <View style={styles.title}>
    <Text style={styles.title}> {title} </Text>
  </View>
);
class App extends component{
  render() {
    return(
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={DATA}
          keyStractor={(item, index) => item + index}
          renderItem={({item}) => <Item title={item}/>}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}> {title}</Text>
          )}
          />
      </SafeAreaView>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#142192",
    padding: 20,
    marginVertical: 8
  },
  header:{
    fontSize: 32,
    backgroundColor: "#6D729E"
  },
  
    title:{
      fontSize: 24
    
  }
}); */

//////////////Componentes 2////////////////////
/* 
import React,{ useStates} from 'react';
import PropTypes from 'Prop-Types';
import { View, TextInput, Text } from "rect-native";
import styles from './stilos';
import { sub } from 'react-native-reanimated';

function Input(props){
  return(
    <View style={styles.textInputContainer}>
        <Text style={styles.textInputLabel}>{props.label}</Text>
       <TextInput style={styles.textInput}{...props}/>

    </View>
  );
}


Input.prototype={
  label: PropTypes.string
};

export default function CollectionTextInput(){
  const [ChangedText, setChangeText]= useStates("");
  const [SubmittedText, setSubmittedText] = useStates("");

  return(
    <View style={styles.container}>
      <Input label="Input Basico"/>
      <Input label="Input clave" secureTextEntry />
      <Input label="Return Key" returnKeyType="search"/>
      <Input label="Placeholder Text" placeholder="search"/>
      <Input
          label="Input Evento:"
          onChangeText={e=>{
            setChangeText(e);
          }}
          onSubmittedText={e=>{
            setSubmittedText(e.nativeEvent.text);
          }}
          onFocus={()=>{
            setChangeText("");
            setSubmittedText("");
          }}
          />
          <Text>Cambiado:{ChangedText}</Text>
          <Text>Enviado:{SubmittedText}</Text>
    </View>
  );
} */


/////////////
/* 
import { useState } from "react"
import { View, Switch, StyleSheet} from "rect-native";

const App= ()=>{
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch=()=> setIsEnabled(previousStates => !previousStates)
  return(
    <View>
    <Switch style={styles.container}
    trackColor={{ false: 'balck', true: 'yellow'}}
    thumbColor={isEnabled ? 'green': 'white'}
    ios_backgroundColor="brown"
     onValueChange={toggleSwitch}
    value={isEnabled} 
    />
    </View>
  );
  

}

const styles= StyleSheet.create({
  container:{
    flex: 1,
    alignItems:"center",
    justifyContent: "center"
  }
});

export default App; */

//ventanas emergentes 
/* 
import React,{useState} from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';


const App=()=>{
  const [modalVisible, setModalVisible]= useState(false);
  return(
    <View style={styles.centerView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={()=>{
          Alert.alert("Modal ha sido cerrado");
          setModalVisible(!modalVisible);
        }}
        >
          <View style={styles.centerView}>
            <View style={styles.modalView}>

            <Text style={styles.modalText}>Hola modal</Text>
            <Pressable 
            style={[styles.button, styles.buttonClose]}
            onPress={()=> setModalVisible(!modalVisible)}>
              <Text style={styles.textStyles}>Ocultar Modal</Text>
            </Pressable>
            </View>
            
          </View>
        </Modal>
        <Pressable 
            style={[styles.button, styles.buttonOpen]}
            onPress={()=> setModalVisible(true)}>
              <Text style={styles.textStyles}>Mostrar Modal</Text>
            </Pressable>
    </View>

  );
}

const styles= StyleSheet.create({
  centerView:{
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    marginTop:22

  },
  modalView:{
    margin:20,
    backgroundColor: "white",
    borderRadius:20,
    padding: 35,
    alignItems:"center",
    shadowColor: "gray",
    shadowOffset:{
      width:0,
      height:2
    },
  },
  button:{
    borderRadius:20,
    padding: 10,
    elevation:2,
  },
  buttonOpen:{
    backgroundColor: "pink"
  },
  buttonClose:{
    backgroundColor:"blue"
  },
  textStyles:{
    color:"black",
    fontSize: "bold",
    textAlign: "center"
  },
  modalView:{
    marginBottom:15,
    textAlign: "center"
  }
});

export default App; */


/////////////////////
/* 
import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert}from 'react-native';

Mayco11, [05.04.21 19:24]
const Separador=()=>(
  <View style={styles.Separador}></View>
);

const App =()=>(
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>
      Vamos a precionar cualquier boton
    </Text>
    <Button
    title="Preciona Aqui"
    onPress={()=>Alert.alert('bonton simple')}
    />
    <Separador />
    <View >
      <Text style={styles.title}>
        Ajustamos un color a este codigo
      </Text>
      <Button
          title="Press here"
          color="black"
          onPress={()=> Alert,alert('Boton con colores')}
          />
    </View>
    <Separador />
    <View>
    <Text style={styles.title}>
        todos los botones son disible
      </Text>
      <Button
          title="Press here"
         disabled
          onPress={()=> Alert,alert('No precionar el boton')}
          />
    </View>
    <Separador />
    <View>
    <Text style={styles.title}>
        las letras estan en lps botones del izquierda
      </Text>
      <View styles={styles.fixToText}>
      <Button
          title="Left here"
          onPress={()=> Alert,alert('Letf boton pressed')}
          />
          <Button
                title="Rigt Button"
                onPress={()=> Alert.alert('RIgt boton pressed')}
                />
       </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title:{
    textAlign:' center',
    marginVertical: 8,
  },
  fixToText:{
    flexDirection: 'row',
    justifyContent:'space-around',
  },
  Separador:{
    marginVertical:8,
    borderBottomColor: 'pink',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App; */

//touchableHighlight
/* 
import React, {useState} from 'react';
import { StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const TouchableHighlight=()=>{
  const [count, setCount]= useState(0);
  const onPress = () => setCount(count +1 );
  return(
    <View style={styles.container}>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.button}>
          <Text>Toca Aquí </Text>
        </View>
      </TouchableHighlight>
       <View style={styles.countContainer}>
         <Text style={styles.countText}>
           {count ? count : null}
         </Text>
         </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button:{
    alignItems: "center",
    backgroundColor: "gray",
    padding: 10,
  },
  countContainer:{
    alignItems: "center",
    padding: 10,
  },
  countText:{
    color: "black"
  }
});

export default TouchableHighlight; */