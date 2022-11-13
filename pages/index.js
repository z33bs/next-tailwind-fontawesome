import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>SugarSnap</title>
        <meta name="description" content="The landing page for everyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <h1 className="text-3xl font-bold underline">
              Testing tailwind
          </h1>
      </main>
    </div>
  )
}
