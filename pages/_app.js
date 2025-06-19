import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useRouter } from 'next/router'; // Import useRouter to access the query
import Layout from "../components/_App/Layout"; // Importing Layout


// Initialize Apollo Client
export const client = new ApolloClient({
  uri: `${process.env.WORDPRESS_URL}/graphql`,
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { s } = router.query; // Extract the search keyword from the URL

  // Pass SEO data and search query to Layout and Component
  const seo = pageProps.seo || {};  

  return (
    <ApolloProvider client={client}>
      <Layout seo={seo} >
        {/* Pass the search query as a prop to the Component */}
        <Component {...pageProps} searchQuery={s} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
