import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-[#25292e]">
      <Text className="text-5xl text-blue-700 font-bold">Index Page</Text>
      <Link href="/about">
        <Text className="text-3xl text-blue-500">Go to About Page</Text>
      </Link>
    </View>
  );
}
