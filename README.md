[![Storybook](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=white)](https://ipkit.vercel.app/) [![Version](https://img.shields.io/npm/v/@story-protocol/ipkit)](https://www.npmjs.com/package/@story-protocol/ipkit)

# IpKit

IpKit provides a number of convenient [tanstack-query](https://tanstack.com/query/latest) hooks using to quickly access Story's on-chain data, including assets, collections, transactions and more, via the [Protocol V4 API](https://docs.story.foundation/api-reference/protocol/introduction).

## Using IpKit

View the IpKit package docs [here](/packages/ipkit/), or in StoryBook [here](https://ipkit.vercel.app/)

## Run locally

### Storybook

To run locally you will need to define your API keys for Storybook in `.env.local`

```bash
STORYBOOK_STORY_PROTOCOL_X_TESTNET_API_KEY="YOUR STAGING API KEY"
STORYBOOK_STORY_PROTOCOL_X_API_KEY="YOUR PRODUCTION API KEY"
```

Storybook defaults to the staging API, but you can switch the environment in the Storybook toolbar.

Make sure to use the correct npm version with:

```bash
nvm use
```

Run Storybook locally for component development and documentation:

```bash
pnpm dev
```

Find the Storybook at [http://localhost:6006](http://localhost:6006)

### Example app

Run the example app.

```bash
pnpm build
pnpm example --filter @example/simple-setup
```

The dev server will be running at [http://localhost:3000](http://localhost:3000)

### Building

- Build: `pnpm build`
- Lint: `pnpm lint`
- Format: `pnpm format`

## Contributing

For guidelines on contributing to IpKit, see the [CONTRIBUTING.md](./CONTRIBUTING.md) file.
