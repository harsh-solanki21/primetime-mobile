# <img src="assets/images/full-logo.png" alt="logo" width="300"/>

PrimeTime Mobile is a cross-platform movie discovery app built with [Expo](https://expo.dev), [React Native](https://reactnative.dev/), [Nativewind](https://www.nativewind.dev/), and [TypeScript](https://www.typescriptlang.org/). It allows users to browse trending and latest movies, search for titles, view detailed information, and track popular searches using Appwrite as a backend.

## 🎥 Video Demo

[![PrimeTime Mobile Video Demo](https://img.youtube.com/vi/_5rsu3xib8s/hqdefault.jpg)](https://youtu.be/_5rsu3xib8s)

> 📺 **Click the image above to watch a quick demo of PrimeTime Mobile in action!**

<br />

## 📲 [Click here install PrimeTime 🎬 on your device](https://expo.dev/accounts/harsh-native/projects/primetime/builds/4ab85f3a-8ea0-4254-a3c4-da6de7c32154)

<br />

## 🌐 Web Version

The web version of PrimeTime is also available. Check it out! [GitHub repository](https://github.com/harsh-solanki21/primetime).

<br />

## 🌟 Features

- **Trending Movies:** Displays movies trending based on user search activity.
- **Latest Movies:** Browse the newest releases from TMDB.
- **Search:** Find movies by title and update trending stats.
- **Movie Details:** View comprehensive information, including genres, ratings, production companies, and more.
- **Saved & Profile Tabs:** Placeholder screens for future enhancements.
- **Modern UI:** Styled with Tailwind CSS via NativeWind for a sleek, responsive interface.
- **File-based Routing:** Powered by Expo Router for scalable navigation.
- **Appwrite Integration:** Stores and retrieves trending search data.

## 🛠️ Technologies Used

- **Expo & React Native:** Cross-platform mobile development.
- **TypeScript:** Type-safe codebase.
- **NativeWind:** Utility-first styling.
- **Appwrite:** Cloud backend for trending data.
- **TMDB API:** Movie data provider.

<br />

## 🚀 Getting Started

### Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npx expo start
   ```

3. **Open the app:**
   - On a device with [Expo Go](https://expo.dev/go)
   - In an Android/iOS simulator
   - In your browser (web support)

<br />

### ⚙️ Environment Variables

Configure your API keys and endpoints in the `.env` file:

```
TMDB_ACCESS_TOKEN=...
APPWRITE_PROJECT_ID=...
APPWRITE_DB_ID=...
APPWRITE_COLLECTION_ID=...
APPWRITE_ENDPOINT=...
```

<br />

## 📂 Project Structure

- `app/` — Main app screens and routing
- `components/` — Reusable UI components
- `api/` — API integrations (TMDB, Appwrite)
- `configs/` — Configuration files
- `hooks/` — Custom React hooks
- `types/` — TypeScript type definitions
- `assets/` — Images, icons, fonts

<br />

## 📚 Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Nativewind Documentation](https://www.nativewind.dev/docs/getting-started/installation)
- [Appwrite Documentation](https://appwrite.io/docs)
- [TMDB API Docs](https://developer.themoviedb.org/reference/intro/getting-started)

---

<br />

**Developed by [harsh-native](https://expo.dev/@harsh-native).**
