import { Html, Head, Main, NextScript } from 'next/document'
import { FontClashDisplay } from './_app'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={FontClashDisplay.className + ' bg-adam-bg'}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
