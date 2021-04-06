import type { AppProps } from 'next/app'
import Head from 'next/head'

import MenuLink from '../components/MenuLink'

import '../css/global.css'

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=980" />
            </Head>
            <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
                <div style={{ width: '150px', padding: '3rem 2rem', background: '#F0F0FF' }}>
                    <MenuLink color="#FFCCCC" title="トップ" />
                </div>
                <div style={{ width: '5px', background: 'lightgray', borderLeft: 'solid 1px gray', borderRight: 'solid 1px black' }} />
                <div style={{ flexGrow: 1 }}>
                    <Component {...pageProps} />
                </div>
            </div>
        </>
    )
}

export default App
