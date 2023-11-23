import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  useWindowDimensions,
} from "react-native";
import axios from "axios";

const MovieScreen = ({ navigation }) => {
  // const [moviesList, setMoviesList] = useState();
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const {data} = await axios.get(
  //         `https://lereacteur-bootcamp-api.herokuapp.com/api/allocine/movies/popular`
  //       );
  //       console.log(data);
  //       setMoviesList(data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // Utilisation de la fonction 'useStyle' qui utilise le hook "useWindowDimensions"
  const styles = useStyle();

  // if (isLoading === true) {
  //   // We haven't finished checking for the token yet
  //   return null;
  // }

  // isLoading ? (
  //   <ActivityIndicator />
  // ) :
  return (
    <View>
      <Text>MovieScreen</Text>
    </View>
  );
};

export default MovieScreen;

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
