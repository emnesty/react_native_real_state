import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import images from "@/constants/images"
import icons from "@/constants/icons"
import { login } from "@/lib/appwrite"

const SignIn = () => {
  const handleLogin = async () => {
    const result = await login()
    if (result) {
      console.log("Login Sucessfully")
    } else {
      Alert.alert("Error", "Login Failed")
    }
  }

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView contentContainerClassName="h-full" scrollEnabled={false}>
        <Image source={images.onboarding} className="w-full h-4/6" resizeMode="contain" />

        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-100">
            Welcome to ReState
          </Text>
          <Text className="mt-2 text-3xl text-center font-rubik-bold text-black-300">
            Let's get you closer to{"\n"}
            <Text className="text-primary-300">Your ideal home</Text>
          </Text>
          <Text className="mt-12 text-lg text-center font-rubik text-black-200">
            Login to ReState with Google
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className="w-full py-4 mt-5 bg-white rounded-full shadow-md shadow-zinc-300">
            <View className="flex flex-row items-center justify-center">
              <Image source={icons.google} className="w-5 h-5" resizeMode="contain" />
              <Text className="ml-2 text-lg font-rubik-medium text-black-300">Continue with Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
