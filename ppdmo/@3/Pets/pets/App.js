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