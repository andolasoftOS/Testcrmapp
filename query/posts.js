import { gql } from '@apollo/client';
import { client } from './config';

const getAllPosts = async () => {
  const allPosts = await client.query({
    query: gql`
      query MyQuery {
        posts(first: 1000) {
          edges {
            node {
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
      }
    `,
  });
  return allPosts;
};

export default getAllPosts;
