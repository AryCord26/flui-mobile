import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Header from "../components/Header";
import { colors } from "../theme/colors";

export default function StationScreen() {
  return (
    <View style={styles.container}>
      <Header
        title="Estação Alameda"
        subtitle="Av. Paulista, 1000"
      />

      <View style={styles.card}>
        <Text style={styles.label}>Potência</Text>
        <Text style={styles.value}>22 kW</Text>

        <Text style={styles.label}>Conectores</Text>
        <Text style={styles.value}>CCS2 • Tipo 2</Text>

        <Text style={styles.label}>Disponibilidade</Text>
        <Text style={styles.available}>
          Disponível agora
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Iniciar recarga
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    padding: 24,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 28,
    padding: 24,
    marginBottom: 28,
  },

  label: {
    color: "#64748B",
    marginTop: 16,
    marginBottom: 4,
  },

  value: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.dark,
  },

  available: {
    color: colors.primaryDark,
    fontWeight: "700",
    fontSize: 16,
  },

  button: {
    backgroundColor: colors.primary,
    height: 60,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});
