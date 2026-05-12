import { View, StyleSheet } from "react-native";
import { MapPin } from "lucide-react-native";
import { colors } from "../theme/colors";

export default function CustomMapPin() {
  return (
    <View style={styles.container}>
      <MapPin size={22} color="#fff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    backgroundColor: colors.primary,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
});
