import Head from 'next/head';
import GlobalStyle from '../src/theme/GlobalStyle';
function MyApp({ Component, pageProps }){
  return (
     <>
      <Head>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');
      </style> 
      
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-H6NZML6N85"></script>
      <script dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-H6NZML6N85');`
      }}
      />

      </Head>
      <GlobalStyle />
      <Component {...pageProps}/>
     </>
  )
}

export default MyApp;