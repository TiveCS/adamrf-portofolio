import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import localFont from 'next/font/local'

export const FontClashDisplay = localFont({
  src: './fonts/Clash_Display/ClashDisplay-Variable.ttf',
})

export const FontAuthor = localFont({
  src: './fonts/Author/Author-Variable.ttf'
})


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
