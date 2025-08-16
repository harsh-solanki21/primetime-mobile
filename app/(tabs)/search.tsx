import bg from "@/assets/images/bg.png";
import { Image, ScrollView, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-primary">
      <Image source={bg} className="absolute" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      ></ScrollView>
    </View>
  );
}
