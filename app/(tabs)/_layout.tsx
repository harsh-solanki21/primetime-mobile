import Home from "@/assets/icons/home.png";
import Saved from "@/assets/icons/save.png";
import Search from "@/assets/icons/search.png";
import Profile from "@/assets/icons/user.png";
import { Tabs } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

interface TabIconProps {
  focused: boolean;
  icon: any;
  title: string;
}

const TabIcon = ({ focused, icon, title }: TabIconProps) => {
  if (focused) {
    return (
      <View
        className={`flex flex-row w-full flex-1 min-w-28 min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden ${
          focused ? "bg-tab" : ""
        }`}
      >
        <Image source={icon} tintColor="#9F2B68" className="size-10" />
        <Text className="text-secondary text-base font-semibold">{title}</Text>
      </View>
    );
  }

  return (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <Image source={icon} tintColor="#A8B5DB" className="size-10" />
    </View>
  );
};

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#0F0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0F0D23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={Home} title="Home" />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={Search} title="Search" />
          ),
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={Saved} title="Saved" />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={Profile} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
