import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";

import Header from "../components/Header";
import FilterButton from "../components/FilterButton";
import StationCard from "../components/StationCard";

import { Search } from "lucide-react-native";

import { stations } from "../data/mock";
import { colors } from "../theme/colors";

export default function SearchScreen() {
  return (
    <ScrollView style={styles.container}>
      <Header
        title="Buscar"
        subtitle="Encontre estações rapidamente"
      />

      <View style={styles.searchBox}>
        <Search size={20} color="#64748B" />

        <TextInput
          placeholder="Buscar estação..."
          style={styles.input}
        />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filters}
      >
        <FilterButton label="Disponível" />
        <FilterButton label="22 kW" />
        <FilterButton label="50 kW" />
        <FilterButton label="CCS2" />
      </ScrollView>

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

  searchBox: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    borderRadius: 18,
    height: 60,
    marginBottom: 20,
  },

  input: {
    flex: 1,
    marginLeft: 10,
  },

  filters: {
    marginBottom: 24,
  },
});
