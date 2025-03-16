# Suraj 

A mobile application that uses fingerprint authentication to secure access to a gallery of car images. The app features a beautiful purple-themed UI with star-like dots in the background and a sun logo.

## Features

- Phone number and OTP authentication (use "12345" as OTP)
- Fingerprint authentication
- Secure access to image gallery
- Beautiful purple-themed UI with sun logo
- Folder navigation
- Image gallery with like functionality

## Prerequisites

- Node.js and npm
- Ionic CLI
- Android Studio (for building Android APK)
- Java Development Kit (JDK)

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Build the application:

```bash
ionic build
```

4. Sync with Capacitor:

```bash
npx cap sync
```

## Running the Application

### In the browser

```bash
ionic serve
```

### On Android

To open the project in Android Studio:

```bash
npx cap open android
```

To build an APK from the command line:

1. Make sure you have Android Studio installed and properly configured
2. Run the following commands:

```bash
ionic build
npx cap sync android
cd android
./gradlew assembleDebug
```

The APK will be generated in `android/app/build/outputs/apk/debug/app-debug.apk`

## Usage

1. Launch the app
2. Login with any phone number and OTP "12345"
3. Enable fingerprint authentication when prompted
4. For subsequent logins, you can use fingerprint authentication
5. Navigate through folders and view the car gallery

## Technologies Used

- Ionic Framework
- Angular
- Capacitor
- Native Biometric Authentication 