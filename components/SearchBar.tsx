import Search from "@/assets/icons/search.png";
import { Image, TextInput, View } from "react-native";

interface SearchBarProps {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onPress?: () => void;
}

const SearchBar = ({
  placeholder,
  value,
  onChangeText,
  onPress,
}: SearchBarProps) => {
  return (
    <View className="flex-row items-center rounded-full px-5 py-2 bg-slate-900">
      <Image
        source={Search}
        className="w-5 h-5"
        resizeMode="contain"
        tintColor="#AB8BFF"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        className="flex-1 ml-2 text-white"
        placeholderTextColor="#A8B5DB"
      />
    </View>
  );
};

export default SearchBar;
