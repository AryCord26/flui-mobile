import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Zap, Star } from "lucide-react-native";
import { colors } from "../theme/colors";

interface StationCardProps {
  station: {
    name: string;
    address: string;
    power: string;
    available: boolean;
    rating: number;
  };
}

export default function StationCard({
  station,
}: StationCardProps) {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>{station.name}</Text>

          <Text style={styles.address}>
            {station.address}
          </Text>
        </View>

        <View
          style={[
            styles.status,
            {
              backgroundColor: station.available
                ? "#DCFCE7"
                : "#FEE2E2",
            },
          ]}
        >
          <Text
            style={{
              color: station.available
                ? "#15803D"
                : "#DC2626",
              fontWeight: "600",
            }}
          >
            {station.available
              ? "Disponível"
              : "Indisponível"}
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.info}>
          <Zap size={16} color={colors.primary} />

          <Text style={styles.infoText}>
            {station.power}
          </Text>
        </View>

        <View style={styles.info}>
          <Star size={16} color="#FACC15" />

          <Text style={styles.infoText}>
            {station.rating}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 24,
    marginBottom: 18,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.dark,
  },

  address: {
    marginTop: 4,
    color: "#64748B",
  },

  status: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    height: 38,
  },

  footer: {
    flexDirection: "row",
    marginTop: 18,
    gap: 18,
  },

  info: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  infoText: {
    color: colors.text,
    fontWeight: "600",
  },
});
