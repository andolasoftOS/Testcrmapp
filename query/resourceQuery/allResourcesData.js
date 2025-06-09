import { gql } from '@apollo/client';
import { client } from '../config';

const getAllResources = async () => {
  const allResources = await client.query({
    query: gql`
      query MyQuery {
        resources(first: 1000) {
          edges {
            node {
              title
              content
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
  return allResources;
};

export default getAllResources;
