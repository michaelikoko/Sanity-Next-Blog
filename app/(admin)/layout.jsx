import '../../styles/globals.css'
import '../../styles/custom.scss'
import { NextStudioHead } from 'next-sanity/studio/head'


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <NextStudioHead favicons={false} />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="https://www.sanity.io/static/images/favicons/favicon-32x32.png"
                />
            </head>
            <body>{children}</body>
        </html>
    )
}
