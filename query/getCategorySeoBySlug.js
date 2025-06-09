import { gql } from '@apollo/client';
import { client } from './config'; // Your Apollo client setup

const getCategorySeoBySlug = async (slug) => {
  const result = await client.query({
    query: gql`
      query GetCategorySeoBySlug($slug: ID!) {
        category(id: $slug, idType: SLUG) {
          id
          databaseId
          slug
          name
          seo {
            title
            metaDesc
            opengraphTitle
            opengraphDescription
            opengraphImage {
              mediaItemUrl
            }
            twitterTitle
            twitterDescription
            twitterImage {
              mediaItemUrl
            }
          }
        }
      }
    `,
    variables: { slug },
  });

  return result.data.category?.seo || {};
};

export default getCategorySeoBySlug;
