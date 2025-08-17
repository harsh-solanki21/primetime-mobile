import { getTrendingMovies } from "@/api/appwrite";
import { fetchMovies } from "@/api/tmdb";
import bg from "@/assets/images/bg.png";
import logo from "@/assets/images/full-logo.png";
import MovieCard from "@/components/MovieCard";
import TrendingCard from "@/components/TrendingCard";
import useFetch from "@/hooks/useFetch";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";

const Home = () => {
  const {
    data: trendingMovies,
    loading: trendingLoading,
    error: trendingError,
  } = useFetch(getTrendingMovies);

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  const isLoading = moviesLoading || trendingLoading;
  const hasError = moviesError || trendingError;

  return (
    <View className="flex-1 bg-primary">
      {/* Background */}
      <Image source={bg} className="absolute" />

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 20 }}
      >
        {/* Logo */}
        <Image source={logo} className="w-72 h-24 mt-16 mb-2 mx-auto" />

        {/* Loading Indicator */}
        {isLoading && (
          <ActivityIndicator
            size="large"
            color="#ffffff"
            className="mt-10 self-center"
          />
        )}

        {/* Error Message */}
        {hasError && (
          <Text className="text-red-500 mb-5">
            Error fetching movies:{" "}
            {moviesError?.message || trendingError?.message}
          </Text>
        )}

        {/* No Movies Found */}
        {!isLoading && !hasError && movies?.length === 0 && (
          <Text className="text-white text-center mt-5">No movies found.</Text>
        )}

        {/* Trending Movies */}
        {!trendingLoading && trendingMovies && trendingMovies.length > 0 && (
          <View className="mt-2">
            <Text className="text-lg text-white font-bold mb-3">
              Trending Movies
            </Text>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={trendingMovies}
              keyExtractor={(item) => item.movie_id.toString()}
              renderItem={({ item, index }) => (
                <TrendingCard movie={item} index={index} />
              )}
              contentContainerStyle={{ gap: 26 }}
              ItemSeparatorComponent={() => <View className="w-4" />}
              className="mb-5"
            />
          </View>
        )}

        {/* Latest Movies Grid */}
        {!moviesLoading && !moviesError && movies && movies.length > 0 && (
          <>
            <Text className="text-lg text-white font-bold mt-5 mb-3">
              Latest Movies
            </Text>

            <FlatList
              data={movies}
              renderItem={({ item }) => <MovieCard {...item} />}
              keyExtractor={(item) => item.id.toString()}
              numColumns={3}
              columnWrapperStyle={{
                justifyContent: "flex-start",
                gap: 20,
                paddingRight: 5,
                marginBottom: 25,
              }}
              className="mt-2 pb-32"
              scrollEnabled={false}
            />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
