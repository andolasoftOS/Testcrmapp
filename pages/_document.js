import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/png" href="/img/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900&display=swap"
            rel="stylesheet"
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Orangescrum Helpdesk",
                "description": "Orangescrum helpdesk page will guide you through all related questions to get started. For any additional assistance contact our support team",
                "url": "https://www.andolasoft.com/",
                "logo": "https://www.andolasoft.com/images/header-footer/logo-w-new.svg?v=4.32",
                "@id": "https://www.andolasoft.com/#andolasoft",
                "telephone": "+1-408-625-7188",
                "priceRange": "$",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "2059 Camden Ave. #118",
                  "addressLocality": "San Jose",
                  "addressRegion": "CA",
                  "postalCode": "95124",
                  "addressCountry": "US"
                },
                "sameAs": [
                  "https://www.facebook.com/AndolaSoft.INC/",
                  "https://twitter.com/Andolasoft",
                  "https://www.linkedin.com/company/andolasoft",
                  "https://www.instagram.com/andolasoftinc/"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1-408-625-7188",
                  "contactType": "Customer Service",
                  "areaServed": "US",
                  "availableLanguage": "English"
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.andolasoft.com/?s={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              }),
            }}
          ></script>
          {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N4MFMN8');`,
          }}
        />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
