import Head from "next/head"


export default function Offline() {
    return (
        <>
        <Head>
        <title>Perfect Meow</title>
        <meta name="description" content="site built for interview demo"></meta>
        <meta name="theme-color" content="#90cdf4"></meta>
        <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/raco.png" />
      </Head>  
      <div>
        <h1>You are offline sorry</h1>
        <p>meow</p>
      </div>
      </>
    )
}