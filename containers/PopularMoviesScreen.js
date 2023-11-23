import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  useWindowDimensions,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import axios from "axios";

const PopularMoviesScreen = ({ navigation }) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGFjMTk3MjNhNzg4NTAwMTQzODg3YTYiLCJlbWFpbCI6ImZhY2FybGllckBnbWFpbC5jb20iLCJleHBpcmF0aW9uRGF0ZSI6IjIwMjQtMDMtMDhUMDA6MDA6MDAuMDAwWiIsImlzVHJhaW5pbmciOnRydWUsImlhdCI6MTcwMDc0NzA4OH0.gLcRmwgsWOAuztEhLM8QEZrX0x-odQvZIHY9KdBq5oA";
  const [moviesList, setMoviesList] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-bootcamp-api.herokuapp.com/api/allocine/movies/popular`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response.data.results[0]);
        setMoviesList(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log("catch Home >>", error);
      }
    };

    fetchData();
  }, []);

  // Utilisation de la fonction 'useStyle' qui utilise le hook "useWindowDimensions"
  const styles = useStyle();
  // console.log(moviesList);
  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <View>
      <FlatList
        data={moviesList}
        keyExtractor={(item) => item.id}
        //  Attention  👇 destructuration de la clé 'item'
        renderItem={({ item }) => {
          console.log(item);
          return (
            <TouchableOpacity
              style={styles.article}
              onPress={() =>
                navigation.navigate("Movie", { id: item.id, title: item.title })
              }
            >
              <View style={styles.left}>
                <Image
                  source={{ uri: item.poster_path.w342 }}
                  style={styles.imgBg}
                ></Image>
              </View>
              <View style={styles.right}>
                <Text>{item.title}</Text>
                <Text numberOfLines={5}>{item.overview}</Text>
              </View>
            </TouchableOpacity>
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
  const { height, width } = useWindowDimensions();

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
      padding: 10,
      // borderBlockColor: "yellow",
      // borderWidth: 2,
      display: "flex",
      gap: 10,
      flexDirection: "row",
    },
    left: {
      width: width / 3 - 10,
      alignItems: "flex-start",
      flexDirection: "row",
    },
    right: {
      width: width - width / 3 - 20,
    },
    imgBg: {
      width: "100%",
      height: 165,
      resizeMode: "contain",
    },
  });

  // Retourne le style
  return styles;
};
