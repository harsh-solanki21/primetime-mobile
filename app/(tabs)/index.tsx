import bg from "@/assets/images/bg.png";
import logo from "@/assets/images/full-logo.png";
import { Image, ScrollView, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-primary">
      <Image source={bg} className="absolute" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={logo} className="w-72 h-24 mt-16 mb-2 mx-auto" />
      </ScrollView>
    </View>
  );
}
