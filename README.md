# up-ui

A Vue 3 UI component library.

## Installation

```bash
npm install up-ui
# or
pnpm add up-ui
# or
yarn add up-ui
```

## Usage

### Full Import

```js
import { createApp } from 'vue'
import UpUI from 'up-ui'
import 'up-ui/dist/up-ui.css'
import App from './App.vue'

const app = createApp(App)
app.use(UpUI)
app.mount('#app')
```

### On-demand Import

```js
import { UButton } from 'up-ui'
import 'up-ui/dist/up-ui.css'
```

## Components

- Button

## License

ISC
