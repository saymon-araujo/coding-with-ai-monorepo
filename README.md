# Coding With AI

A brief description of your project.

This monorepo contains the following applications:

## What's Inside?

This Turborepo includes the following apps:

-   `apps/web`: A [Next.js](https://nextjs.org/) web application using Turbopack.
-   `apps/mobile`: An [Expo](https://expo.dev/) (React Native) mobile application.
-   `@repo/typescript-config`: Shared `tsconfig.json` configurations.

All apps are built using [TypeScript](https://www.typescriptlang.org/).

## Setup

Install dependencies using pnpm:

```sh
pnpm install
```

## Development

This monorepo uses [Turborepo](https://turbo.build/) to manage tasks.

### Running Both Apps

To start the development servers for both the web and mobile apps simultaneously:

```sh
pnpm dev
```

This command might open the Expo Go app selector in your terminal for the mobile app. Follow the prompts to open the app on a simulator/emulator or physical device. The web app should be available at `http://localhost:3000` (or the next available port).

### Running Web App Only

To run only the Next.js web application:

```sh
pnpm dev --filter=web
```

### Running Mobile App Only

To run only the Expo mobile application:

```sh
pnpm dev --filter=mobile
```

This will start the Expo development server. You can then:
- Press `a` to open on an Android emulator/device.
- Press `i` to open on an iOS simulator/device.
- Press `w` to open in a web browser (Expo for web).

Alternatively, use the specific platform commands:

```sh
# Start mobile app and open on Android
pnpm android --filter=mobile

# Start mobile app and open on iOS
pnpm ios --filter=mobile

# Start mobile app and open in web browser
pnpm web --filter=mobile
```

## Build

To build all apps and packages for production:

```sh
pnpm build
```

To build a specific app (e.g., `web`):

```sh
pnpm build --filter=web
```

## Linting

To lint all apps and packages:

```sh
pnpm lint
```

To lint a specific app (e.g., `mobile`):

```sh
pnpm lint --filter=mobile
```

## Utilities

This Turborepo includes:

-   [TypeScript](https://www.typescriptlang.org/) for static type checking.
-   [ESLint](https://eslint.org/) for code linting.
-   [Prettier](https://prettier.io) for code formatting (usually integrated with ESLint).
-   [Tailwind CSS](https://tailwindcss.com/) for styling.

## Turborepo: Useful Links

Learn more about Turborepo:

-   [Tasks](https://turbo.build/docs/core-concepts/monorepos/running-tasks)
-   [Caching](https://turbo.build/docs/core-concepts/caching)
-   [Remote Caching](https://turbo.build/docs/core-concepts/remote-caching)
-   [Filtering](https://turbo.build/docs/core-concepts/monorepos/filtering)
-   [Configuration Options](https://turbo.build/docs/reference/configuration)
-   [CLI Usage](https://turbo.build/docs/reference/command-line-reference)
