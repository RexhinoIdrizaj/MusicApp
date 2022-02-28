import "dotenv/config";

export default {
  expo: {
    name: "Music App",
    slug: "music-app",
    version: "1.0.0",
    extra: {
      baseUrl: process.env.BASE_URL,
    },
    orientation: "portrait",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      buildNumber: "1.0.0",
      bundleIdentifier: "com.musicapp",
    },
    android: {
      package: "com.musicapp",
      versionCode: 1,
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
    },
    userInterfaceStyle: "automatic",
  },
};
