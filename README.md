# wait-for-target [![Build Status][travis-image]][travis-url]

> Wait for a target is ready

## Install

```sh
npm install --save wait-for-target
```

## Usage

```js
import waitForTarget from 'wait-for-target'

async function push (...args) {
  const analytics = await waitForTarget(() => window.ga)

  analytics('send', 'event', ...args)
}

push('ready')
```

## API

### waitForTarget(getTarget[, timeout])

Return a promise that resolves to target when ready.

#### getTarget

Type: `function`

Function returns a target for resolve.

#### timeout

Type: `number`  
Default: `Infinity`

Waiting timeout.

## License

MIT

[travis-url]: https://travis-ci.org/andrepolischuk/wait-for-target
[travis-image]: https://travis-ci.org/andrepolischuk/wait-for-target.svg?branch=master
