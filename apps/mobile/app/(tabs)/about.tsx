import { StyleSheet } from "react-native"
import { Image } from "expo-image"

import ParallaxScrollView from "@/components/ParallaxScrollView"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { Collapsible } from "@/components/Collapsible"
import { ExternalLink } from "@/components/ExternalLink"
import { IconSymbol } from "@/components/ui/IconSymbol"

export default function AboutScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#E8D0DC", dark: "#47293D" }}
      headerImage={<Image source={require("@/assets/images/icon.png")} style={styles.headerImage} />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">About Rosebud</ThemedText>
      </ThemedView>

      <ThemedText>
        Rosebud is a modern React Native starter template built with Expo, featuring a beautiful UI, animations, and
        best practices for mobile development.
      </ThemedText>

      <Collapsible title="Project Overview">
        <ThemedText>
          This project demonstrates a well-structured React Native application with a focus on UI/UX, performance, and
          developer experience.
        </ThemedText>
        <ThemedText>
          It includes custom components, animations, and theming support to help you build beautiful cross-platform
          mobile applications.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Key Features">
        <ThemedView style={styles.featureItem}>
          <IconSymbol name="house.fill" size={20} color="#0a7ea4" />
          <ThemedText>File-based routing with Expo Router</ThemedText>
        </ThemedView>

        <ThemedView style={styles.featureItem}>
          <IconSymbol name="paperplane.fill" size={20} color="#0a7ea4" />
          <ThemedText>Light and dark mode support</ThemedText>
        </ThemedView>

        <ThemedView style={styles.featureItem}>
          <IconSymbol name="chevron.left.forwardslash.chevron.right" size={20} color="#0a7ea4" />
          <ThemedText>Custom animations and UI components</ThemedText>
        </ThemedView>

        <ThemedView style={styles.featureItem}>
          <IconSymbol name="chevron.right" size={20} color="#0a7ea4" />
          <ThemedText>Cross-platform compatibility (iOS, Android, Web)</ThemedText>
        </ThemedView>
      </Collapsible>

      <Collapsible title="Getting Started">
        <ThemedText>To get started with your own project based on this template:</ThemedText>
        <ThemedText>1. Explore the existing tabs to understand the structure</ThemedText>
        <ThemedText>2. Customize the components and styles to match your brand</ThemedText>
        <ThemedText>
          3. Run <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> when you're ready to start fresh
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/">
          <ThemedText type="link">Learn more about Expo</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Technologies">
        <ThemedText>This project is built with:</ThemedText>
        <ThemedText>• React Native</ThemedText>
        <ThemedText>• Expo</ThemedText>
        <ThemedText>• Expo Router</ThemedText>
        <ThemedText>• React Navigation</ThemedText>
        <ThemedText>• Reanimated for animations</ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  headerImage: {
    height: 150,
    width: 150,
    bottom: 50,
    right: 30,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 16,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
  },
})
