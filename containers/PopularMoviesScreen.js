import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";
import axios from "axios";

const PopularMoviesScreen = ({ navigation }) => {
  const [moviesList, setMoviesList] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          `https://lereacteur-bootcamp-api.herokuapp.com/api/allocine/movies/popular`
        );
        // console.log(data);
        setMoviesList(data);
        setIsLoading(false);
      } catch (error) {
        console.log("catch Home >>", error);
      }
    };

    fetchData();
  }, []);

  // Utilisation de la fonction 'useStyle' qui utilise le hook "useWindowDimensions"
  const styles = useStyle();

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <View>
      {/* Afficher les éléments d'un tableau */}
      <FlatList
        data={moviesList}
        keyExtractor={(item) => item._id}
        //  Attention  👇 destructuration de la clé 'item'
        renderItem={({ item }) => {
          console.log(item);
          return (
            <View style={styles.article}>
              <Text>yo</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default PopularMoviesScreen;

const useStyle = () => {
  // Création du style
  // utilisation du hook "useWindowDimensions"
  // const { height, width } = useWindowDimensions();

  const styles = StyleSheet.create({
    // input: {
    //   borderWidth: 1,
    //   height: 30,
    //   marginVertical: 30,
    //   padding: 10,
    //   width: width - 40,
    // },
    article: {
      width: "100%",
      display: "flex",
      borderBlockColor: "yellow",
      borderWidth: 2,
    },
    images: {
      width: 150,
      height: 120,
      resizeMode: "cover",
      borderBlockColor: "red",
      borderWidth: 2,
    },
  });

  // Retourne le style
  return styles;
};
