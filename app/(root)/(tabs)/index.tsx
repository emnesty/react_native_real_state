import { Link } from "expo-router";
import { Button, Text, View } from "react-native";
import SignIn from "@/app/sign-in";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome to ReState</Text>
      <Button title="Sign-In" onPress={() => SignIn()} />
      <Link href="/sign-in">Sign-In</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/1">Property</Link>
    </View>
  );
  ``;
}
