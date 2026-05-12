import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export default function Header({
  title,
  subtitle,
}: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      {subtitle && (
        <Text style={styles.subtitle}>{subtitle}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.dark,
  },

  subtitle: {
    marginTop: 4,
    color: "#64748B",
    fontSize: 15,
  },
});
