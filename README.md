# Common cheatsheet

## Create Package.json

1. Setup basic credits:
```
npm set init-author-email "example-user@example.com"
npm set init-author-name "example_user"
npm set init-license "MIT"
```
2. Create Package.json with default data: `npm init --yes`
3. Update some data with `npm init` command
4. optional: `npm install react` will add some *devDependencies* (add **node_modules** to `.gitignore`)
5. optional: try `npm run runTest` after you add:
```
  "scripts": {
    ...
    "runTest": "node VanillaJS/test.js"
  }
```