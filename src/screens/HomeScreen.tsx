import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

import Header from "../components/Header";
import StationCard from "../components/StationCard";
import { stations } from "../data/mock";
import { colors } from "../theme/colors";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Header
        title="Olá 👋"
        subtitle="Encontre pontos de recarga próximos"
      />

      <View style={styles.map}>
        <Text style={styles.mapText}>Mapa interativo</Text>
      </View>

      <Text style={styles.sectionTitle}>
        Estações próximas
      </Text>

      {stations.map((station) => (
        <StationCard
          key={station.id}
          station={station}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    padding: 24,
  },

  map: {
    height: 220,
    backgroundColor: "#D1FAE5",
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 28,
  },

  mapText: {
    color: colors.primaryDark,
    fontWeight: "700",
    fontSize: 18,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.dark,
    marginBottom: 18,
  },
});
