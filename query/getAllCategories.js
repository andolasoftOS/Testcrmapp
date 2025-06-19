import { gql } from '@apollo/client';
import { client } from './config';

const getAllCategories = async () => {
  let categories = [];
  let hasNextPage = true;
  let after = null;

  while (hasNextPage) {
    const result = await client.query({
      query: gql`
        query GetAllCategories($after: String) {
          categories(first: 100, after: $after) {
            edges {
              node {
                slug
                name
              }
            }
            pageInfo {
              endCursor
              hasNextPage
            }
          }
        }
      `,
      variables: { after },
    });

    categories = [...categories, ...result.data.categories.edges.map(edge => edge.node)];
    hasNextPage = result.data.categories.pageInfo.hasNextPage;
    after = result.data.categories.pageInfo.endCursor;
  }

  return categories;
};

export default getAllCategories;
