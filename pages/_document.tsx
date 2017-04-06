import * as React from 'react'

import Document, { Head, Main, NextScript } from 'next/document'
import { getStyles } from "typestyle"

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head} = renderPage()

    const style = getStyles()
    const styles = <style id='styles-target'>{ style }</style>
    return { html, head, styles }
  }

  render () {
    return (
     <html>
       <Head>
       </Head>
       <body>
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}