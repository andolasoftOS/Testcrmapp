import { gql } from '@apollo/client';
import { client } from './config';

const getCategoryBySlug = async (slug) => {
  const { data } = await client.query({
    query: gql`
      query GetCategoryBySlug($slug: ID!) {
        category(id: $slug, idType: SLUG) {
          id
          name
          slug
          description
          seo {
            opengraphTitle
            opengraphDescription
            opengraphImage {
              mediaItemUrl
            }
          }
        }
      }
    `,
    variables: { slug },
  });

  return data?.category || null;
};

export default getCategoryBySlug;
