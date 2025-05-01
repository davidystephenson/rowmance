import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { extendTheme, ThemeConfig, ColorModeScript } from '@chakra-ui/react'
const root = document.getElementById('root')

if (!root) {
  throw new Error('Root element not found')
}

const config: ThemeConfig = {
  initialColorMode: 'system'
}
const theme = extendTheme({ config })

createRoot(root).render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </>
)
