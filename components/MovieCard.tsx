import Star from "@/assets/icons/star.png";
import { API_CONFIG } from "@/configs/tmdb";
import { IMovie } from "@/types/movie";
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  original_language,
  release_date,
}: IMovie) => {
  return (
    <Link href={`/movie/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: poster_path
              ? `${API_CONFIG.TMDB.IMAGE_BASE_URL}${poster_path}`
              : "https://placehold.co/600x400/1a1a1a/FFFFFF.png",
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />

        <View className="gap-y-1">
          <Text className="text-sm font-bold text-white mt-2" numberOfLines={1}>
            {title}
          </Text>

          <View className="flex-row items-center justify-between w-full ">
            <View className="flex-row items-center gap-x-1">
              <Image source={Star} className="size-3" />
              <Text className="text-xs text-white font-bold">
                {vote_average.toFixed(1)}
              </Text>
            </View>

            <Text className="text-xs text-white font-medium">
              {release_date?.split("-")[0]}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
