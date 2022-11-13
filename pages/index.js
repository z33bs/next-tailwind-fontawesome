import Head from 'next/head'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSmile} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SugarSnap</title>
        <meta name="description" content="The landing page for everyone" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>
          <h1 className="text-3xl font-bold underline">
              Testing tailwind
          </h1>
          <FontAwesomeIcon icon={faSmile} className="h-14"/>
          <FontAwesomeIcon icon={faGithub} className="h-14"/>
      </main>
    </div>
  )
}
