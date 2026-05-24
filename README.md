# React Native Notes App
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/nakulsinghsisodia/notes-app-react-native)

A simple and modern note-taking application built with React Native and Expo. This project demonstrates core mobile development concepts including state management, navigation, and styling with a utility-first approach.

## Features

-   **CRUD Operations:** Create, read, update, and delete notes.
-   **Clean UI:** A sleek, dark-themed interface styled with NativeWind (Tailwind CSS for React Native).
-   **State Management:** Centralized state management using React Context API. All notes are managed within the `NotesContext`.
-   **File-Based Routing:** Navigation is handled by Expo Router, providing a clear and organized routing structure.
-   **Tab Navigation:** A custom-styled bottom tab bar for easy navigation between the home screen and the note creation screen.

## Tech Stack

-   **Framework:** React Native
-   **Platform:** Expo
-   **Language:** TypeScript
-   **Styling:** NativeWind & Tailwind CSS
-   **Routing:** Expo Router
-   **State Management:** React Context API

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   Node.js (LTS version)
-   npm or yarn
-   Expo Go app installed on your iOS or Android device

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/nakulsinghsisodia/notes-app-react-native.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd notes-app-react-native
    ```

3.  **Install the dependencies:**
    ```sh
    npm install
    ```

### Running the Application

1.  **Start the development server:**
    ```sh
    npx expo start
    ```

2.  **Run the app:**
    -   Scan the QR code displayed in the terminal with the Expo Go app on your physical device.
    -   Alternatively, you can run it on an emulator by pressing `a` for Android or `i` for iOS in the terminal.

## Project Structure

The project follows a standard Expo Router structure:

```
/
├── app/                  # Main directory for routes and screens
│   ├── (tab)/            # Defines the tab layout and its screens
│   │   ├── _layout.tsx   # Tab navigator configuration
│   │   ├── create.tsx    # Screen for creating new notes
│   │   └── index.tsx     # Home screen, lists all notes
│   ├── notes/            # Directory for note-specific routes
│   │   ├── [id].tsx      # Dynamic route for viewing/editing a single note
│   │   └── _layout.tsx   # Layout for the notes stack
│   └── _layout.tsx       # Root layout, wraps the app with providers
├── context/              # Contains React Context for state management
│   └── NotesContext.tsx  # State logic for creating, updating, and deleting notes
├── constants/            # For static data and configurations
│   ├── data.ts           # (Example data, not used in final app)
│   └── tabs.ts           # Configuration for bottom tabs
└── ...                   # Other configuration files (babel, postcss, etc.)
```

## Core Functionality

The application's state is managed through `NotesContext.tsx`. This context provides functions (`addNote`, `updateNote`, `deleteNote`) and the `notes` array to all components wrapped within its provider.

**Note:** The current implementation uses `useState` within the context, which means the notes are stored in memory and will be cleared when the app is restarted. For persistence, `AsyncStorage` or a similar solution would need to be integrated into the context.