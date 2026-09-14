# Expo React Native App

A React Native customer management app built with Expo and TypeScript. The app provides customer lists and forms, with filtering by region and status.

## Features

- Welcome screen with bottom-tab navigation
- Customer list with customer details
- Create and update customer records
- Filter customers by region and status
- Persisted local data through AsyncStorage
- Redux Toolkit state management with Redux Saga
- Local notification setup
- Android, iOS, and web targets through Expo

## Requirements

- Node.js (LTS recommended)
- npm
- Expo CLI through the local Expo tooling
- Expo Go for running on a physical device, or an Android/iOS emulator

## Getting Started

Install dependencies:

```bash
npm install
```

Start the Expo development server:

```bash
npm start
```

Then use the Expo CLI to open the app on a device, emulator, or web browser.

## Platform Commands

```bash
npm run android
npm run ios
npm run web
```

The iOS command requires macOS with Xcode. Web support can be started directly with `npm run web`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the Expo development server |
| `npm run android` | Start Expo and open Android |
| `npm run ios` | Start Expo and open iOS |
| `npm run web` | Start Expo for the web |
| `npm run lint` | Run Expo linting |

## Project Structure

```text
.
├── App.tsx                 # Application providers and startup effects
├── index.ts                # Expo entry point
├── assets/                 # Static assets
└── src/
    ├── components/         # Shared UI components
    ├── features/           # Feature state, components, models, and sagas
    ├── navigation/         # Typed navigation and route configuration
    ├── screens/            # Screen-level containers
    ├── store/              # Redux store, reducers, and root saga
    ├── types/              # Shared types
    └── utilities/          # Storage and notification helpers
```

## Initial Data

The store is initialized with these regions:

- `NE`
- `NO`
- `SE`
- `SO`

The available customer statuses are:

- `PENDING`
- `REQUESTING`
- `SUCCESS`
- `ERROR`

## Development Notes

State is provided through Redux and Redux Saga. Customer-related asynchronous workflows live in `src/features/customers/sagas`, while reusable customer, region, and status state logic lives beside each feature.
