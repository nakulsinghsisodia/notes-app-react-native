# React Native Notes App

[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/nakulsinghsisodia/notes-app-react-native)

A simple and modern note-taking application built with React Native and Expo. This project demonstrates core mobile development concepts including state management, navigation, styling, and local database integration using SQLite.

## Features

- **CRUD Operations:** Create, read, update, and delete notes.
- **SQLite Database:** Notes are stored locally using SQLite for persistent offline storage.
- **Clean UI:** A sleek, dark-themed interface styled with NativeWind (Tailwind CSS for React Native).
- **State Management:** Centralized state management using React Context API.
- **File-Based Routing:** Navigation handled with Expo Router.
- **Tab Navigation:** Custom bottom tab navigation for seamless user experience.
- **Persistent Storage:** Notes remain saved even after restarting the app.

---

## Tech Stack

- **Framework:** React Native
- **Platform:** Expo
- **Language:** TypeScript
- **Database:** SQLite
- **Styling:** NativeWind & Tailwind CSS
- **Routing:** Expo Router
- **State Management:** React Context API

---

# Getting Started

Follow these instructions to run the project locally.

## Prerequisites

- Node.js (LTS version)
- npm or yarn
- Expo Go app (Android/iOS)

---

## Installation

### 1. Clone the Repository

```sh
git clone https://github.com/nakulsinghsisodia/notes-app-react-native.git
```

### 2. Navigate to Project Folder

```sh
cd notes-app-react-native
```

### 3. Install Dependencies

```sh
npm install
```

### 4. Install SQLite Package

```sh
npx expo install expo-sqlite
```

---

# Running the Application

Start the development server:

```sh
npx expo start
```

### Run on Device

- Scan the QR code using Expo Go
- Or press:
  - `a` → Android Emulator
  - `i` → iOS Simulator

---

# Project Structure

```bash
/
├── app/                  # Main routes and screens
│   ├── (tab)/
│   │   ├── _layout.tsx   # Bottom tab navigation
│   │   ├── create.tsx    # Create note screen
│   │   └── index.tsx     # Home screen
│   ├── notes/
│   │   ├── [id].tsx      # View/Edit note screen
│   │   └── _layout.tsx
│   └── _layout.tsx
│
├── context/
│   └── NotesContext.tsx  # Notes state & database operations
│
├── database/
│   └── sqlite.ts         # SQLite database configuration
│
├── constants/
│   ├── data.ts
│   └── tabs.ts
│
└── ...
```

---

# Core Functionality

The application uses SQLite for local data persistence.

All database operations are managed inside `NotesContext.tsx`, including:

- `addNote()` → Create a new note
- `updateNote()` → Edit existing note
- `deleteNote()` → Remove note
- `fetchNotes()` → Load notes from SQLite database

The SQLite database ensures that notes remain saved even after the application is closed or restarted.

---

# SQLite Integration

The app uses `expo-sqlite` to manage local storage.

Example table structure:

```sql
CREATE TABLE IF NOT EXISTS notes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
```

---

# Future Improvements

- Search functionality
- Categories & tags
- Cloud sync
- Authentication
- Rich text editor
- Export notes functionality

---

# License

This project is open-source and available under the MIT License.
