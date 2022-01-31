// Página do Next

function GlobalStyle() {
    return (
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }

        ::-webkit-scrollbar {
          width: 10px;              /* width of the entire scrollbar */
          
        }
        
        ::-webkit-scrollbar-track {
          background:black;
          border-radius: 3px;         /* color of the tracking area */
        }
        
        ::-webkit-scrollbar-thumb {
          background-color: #87CEEB;    /* color of the scroll thumb */
          border-radius: 3px;       /* roundness of the scroll thumb */
          border: 2px solid "#87CEEB";  /* creates padding around scroll thumb */
        }

        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */ 
      `}</style>
    );
  }

  export default function CustomApp({ Component, pageProps }) {
    return (
        <>    
            <GlobalStyle/>
            <Component {...pageProps} />   
        </>
    )
}