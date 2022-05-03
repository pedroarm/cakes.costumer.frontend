import React from 'react'
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

interface Props {
  styleTags: any
}

export default class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const styleTags = sheet.getStyleElement()
    const page = ctx.renderPage(
      (App: any) => (props: any) => sheet.collectStyles(<App {...props} />)
    )

    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, ...page, styleTags }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          {this.props.styleTags}
          <meta charSet="utf-8" />

          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
