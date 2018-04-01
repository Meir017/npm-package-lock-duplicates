[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
# package-lock-duplicates
find duplicated packages based on a `package-lock.json` file

## Install

```bash
npm install package-lock-duplicates -g
```

## Usage

### CLI

```bash
cd nodejs-project
find-dups
```

### Code:

```js
const { findDupsFromNodeModules } = require('package-lock-duplicates');

const result = findDupsFromNodeModules('./');
```

[npm-image]: https://img.shields.io/npm/v/package-lock-duplicates.svg
[npm-url]: https://npmjs.org/package/package-lock-duplicates
[downloads-image]: https://img.shields.io/npm/dm/package-lock-duplicates.svg
[downloads-url]: https://npmjs.org/package/package-lock-duplicates