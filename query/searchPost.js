import { gql } from '@apollo/client';
import { client } from './config';

const getPostsBySearch = async (search) => {
  const getSearchPost = await client.query({
    query: gql`
      query MyQuery($search: String!) {
        posts(where: { search: $search }) {
          nodes {
            content
            title
            date
            excerpt
            slug
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    `,
    variables: {
      search,
    },
  });
  return getSearchPost;
};

export default getPostsBySearch;
