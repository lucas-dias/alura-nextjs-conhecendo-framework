import Link from 'next/link'
import Head from 'next/head'

export async function getStaticProps() {
  const API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
  const faq = await fetch(API_URL)
    .then((resServer) => {
      return resServer.json();
    })
    .then((res) => {
      return res;
    })
  return {
    props: {
      faq
    },
  }
}


export default function FAQ({faq}){
  return(
    <div>
      <Head>
        <title>FAQ - Alura Cases</title>
      </Head>
      <h1>FAQ - Alura Cases</h1>
      <Link href="/">
      Ir para Home
      </Link>
      <ul>
        {faq.map(({answer, question}) => (
          <div>
              <li key={question}>
                <article>
                  <h2>{question}</h2>
                  <p>{answer}</p>
                 </article>
              </li>
          </div>
        ))}
      </ul>
    </div>
  )
}