# Introduction

This project made with [CreativeDesignsGuru](https://creativedesignsguru.com/demo/Nextjs-Boilerplate/).

## Requirements

- Node.js 20+ and npm

### Getting started

Install dependencies

```shell
yarn install
```

Make sure you configure `.env` file

```shell
NEXT_PUBLIC_TIGER_HALL_CONTENT_URL={REPLACE_KEY}
```

Then, you can run the project locally in development mode with live reload by executing:

```shell
yarn dev
```

Open http://localhost:3000 with your favorite browser to see your project.


### Project structure

```shell
.
├── README.md                       # README file
├── .husky                          # Husky configuration
├── .vscode                         # VSCode configuration
├── public                          # Public assets folder
├── scripts                         # Scripts folder
├── src
│   ├── app                         # Next JS App (App Router)
│   ├── components                  # React components
│   ├── libs                        # 3rd party libraries configuration (apollo, context and styles)
│   ├── locales                     # Locales folder (i18n messages)
│   ├── styles                      # Styles folder
│   ├── templates                   # Templates folder
│   ├── types                       # Type definitions
│   ├── utils                       # Utilities folder
│   └── validations                 # Validation schemas
├── tests
│   ├── e2e                         # E2E tests, also includes Monitoring as Code
│   └── integration                 # Integration tests
└── tsconfig.json                   # TypeScript configuration
```

### Customization


- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png`, `public/favicon-32x32.png`, `android-chrome-192x192` and `android-chrome-512x512` : favicon
- `src/utils/AppConfig.ts`: configuration file
- `src/templates/BaseTemplate.tsx`: default theme
- `next.config.mjs`: Next.js configuration
- `.env`: default environment variables

### Commit Message Format

The project enforces [Conventional Commits](https://www.conventionalcommits.org/) specification. This means that all your commit messages must be formatted according to the specification. To help you write commit messages, the project uses [Commitizen](https://github.com/commitizen/cz-cli), an interactive CLI that guides you through the commit process. To use it, run the following command:

```shell
yarn commit
```

It generates an optimized production build of the boilerplate. For testing the generated build, you can run:

```shell
yarn start
```

You also need to defined the environment variables `NEXT_PUBLIC_TIGER_HALL_CONTENT_URL` using your own key.

The command starts a local server with the production build. Then, you can now open http://localhost:3000 with your favorite browser to see the project.

### Error Monitoring

The project uses [Sentry](https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo) to monitor errors. For development environment, you don't need to do anything: Next.js Boilerplate is already configured to use Sentry and Spotlight (Sentry for Development). All errors will be automatically sent to your local Spotlight instance. So, you can try the Sentry experience locally.

For production environment, you need to create a Sentry account and create a new project. Then, in `next.config.mjs`, you need to update the `org` and `project` attribute in `withSentryConfig` function. You also need to add your Sentry DSN in `sentry.client.config.ts`, `sentry.edge.config.ts` and `sentry.server.config.ts`.


After creating the source, you able to see your source token and copy it. Then, in your environment variabless, you can paste the token in `LOGTAIL_SOURCE_TOKEN` variable. Now, all your logs will be automatically sent and ingested by Better Stack.

### License

Licensed under the MIT License, Copyright © 2024

See [LICENSE](LICENSE) for more information.