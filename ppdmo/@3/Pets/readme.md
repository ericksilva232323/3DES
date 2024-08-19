# Programação Mible usando Firebase

## ![alt text](image.png)

# Banco de Dados online 

## ![alt text](image-1.png)

### FIREBASECONFIG.JS

```js

    import { inicializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCHM_20VLoRldkin3cSRmyjjq-4ftsZPs8",
    authDomain: "pets-689f2.firebaseapp.com",
    projectId: "pets-689f2",
    storageBucket: "pets-689f2.appspot.com",
    messagingSenderId: "313132279920",
    appId: "1:313132279920:web:de70d899fb42554dc06cb5",
    measurementId: "G-YW0ZSBW2MT"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const db = getFirestore(app);

  const auth = getAuth(app);

  export { db, auth };

```

### APP.JS

```js

    import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, FlatList, Image } from "react-native";
import { db } from "./firebaseconfig";
import { collection, addDoc, getDocs } from "firebase/firestore";


export default function App() {
  const [namePet, SetNamePet] = useState("");
  const [tipoPet, setTipoPet] = useState("");
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);

  const adicionaPet = async () => {
    try {
      setLoading(true);
      await addDoc(collection(db, "pets"), {
        nome: namePet,
        tipo: tipoPet
      });
      alert("Pet adicionadp com sucesso!");
      SetNamePet('');
      setTipoPet('');
      fetchPets();
    } catch (e) {
      console.error("Erro ao adicionar pet", e);
    } finally {
      setLoading(false);
    }
  };

  const fetchPets = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "pets"));
      const petlist = querySnapshot.docs.map(doc => doc.data());
      setPets(petlist);
    } catch (e) {
      console.error("Erro ao buscar pets", e);
    }
  };

  return (
    < View style={styles.container}>

      <Text style={styles.title}>Pets SENAI</Text>

      <Text style={style.lable}>Nome do Pet</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o nome do pet"
        value={namePet}
        onChangeText={SetNamePet}
      />

    </View>
  )
}

```
