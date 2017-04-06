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
         <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"/>
         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
       </Head>
       <body>
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}