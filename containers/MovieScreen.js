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

const MovieScreen = ({ route, navigation }) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGFjMTk3MjNhNzg4NTAwMTQzODg3YTYiLCJlbWFpbCI6ImZhY2FybGllckBnbWFpbC5jb20iLCJleHBpcmF0aW9uRGF0ZSI6IjIwMjQtMDMtMDhUMDA6MDA6MDAuMDAwWiIsImlzVHJhaW5pbmciOnRydWUsImlhdCI6MTcwMDc0NzA4OH0.gLcRmwgsWOAuztEhLM8QEZrX0x-odQvZIHY9KdBq5oA";

  const { id, tiltle } = route.params;
  const [movie, setMovie] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-bootcamp-api.herokuapp.com/api/allocine/movie/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response.data);
        setMovie(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("catch Movie >>", error);
      }
    };

    fetchData();
  }, []);

  // Utilisation de la fonction 'useStyle' qui utilise le hook "useWindowDimensions"
  const styles = useStyle();

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <View style={styles.article}>
      <Image
        source={{ uri: movie.poster_path.w500 }}
        style={styles.imgBg}
      ></Image>
    </View>
  );
};

export default MovieScreen;

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

    imgBg: {
      width: "100%",
      height: height / 3,
      resizeMode: "contain",
    },
  });

  // Retourne le style
  return styles;
};
