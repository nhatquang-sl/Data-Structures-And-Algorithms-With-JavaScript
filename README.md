
# Table of Content
- [Stack](/src/stack/stack.md)

# ts-node-dev
## Install
```
npm i ts-node-dev --save-dev
```

## Usage
```
tsnd --respawn server.ts
```

## Advantages and Disadvantages
`ts-node-dev` is a great option for fast TypeScript development because it is more efficient than nodemon, and is made specifically for TypeScript.

`ts-node-dev` is arguably much less customizable than nodemon. It also does not restart on changes to static assets, which can be useful when serving images on a web server.

# Testing with Jest
## Install
```
npm i -D jest ts-jest @types/jest
npx ts-jest config:init
```

## Usage
`npm t` or `npx jest`