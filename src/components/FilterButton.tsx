import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

interface FilterButtonProps {
  label: string;
}

export default function FilterButton({
  label,
}: FilterButtonProps) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 14,
    marginRight: 10,
  },

  text: {
    color: colors.text,
    fontWeight: "600",
  },
});
