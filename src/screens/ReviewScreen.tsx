import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

import Header from "../components/Header";
import { colors } from "../theme/colors";

export default function ReviewsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Header
        title="Avaliações"
        subtitle="Feedback dos motoristas"
      />

      {[1, 2, 3].map((item) => (
        <View key={item} style={styles.card}>
          <View style={styles.user}>
            <View style={styles.avatar} />

            <View>
              <Text style={styles.name}>
                Lucas Ferreira
              </Text>

              <Text style={styles.date}>
                18 Maio 2026
              </Text>
            </View>
          </View>

          <Text style={styles.comment}>
            Excelente estação, carregamento rápido
            e localização ótima.
          </Text>
        </View>
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

  card: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 20,
    marginBottom: 18,
  },

  user: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 12,
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 999,
    backgroundColor: "#CBD5E1",
  },

  name: {
    fontWeight: "700",
    color: colors.dark,
    fontSize: 16,
  },

  date: {
    color: "#64748B",
    marginTop: 4,
  },

  comment: {
    color: colors.text,
    lineHeight: 22,
  },
});
