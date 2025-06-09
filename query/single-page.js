import { gql } from '@apollo/client';
import { client } from './config';

const getSinglePage = async (slug) => {
  //console.log("Fetching data for slug:", slug);
  
  const getPage = await client.query({
    query: gql`
      query MyQuery($slug: ID!) {
        page(id: $slug, idType: URI) {
          seo {
            title
            metaDesc
            opengraphTitle
            opengraphDescription
            opengraphImage {
              mediaItemUrl
            }
          }
          title
          content
        }
      }
    `,
    variables: {
      slug,
    },
  });

  //console.log('Fetched page data:', getPage);

  return getPage.data.page;
};


export default getSinglePage;
