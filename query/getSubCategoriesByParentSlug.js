import { gql } from '@apollo/client';
import { client } from './config';

const getSubCategoriesByParentSlug = async (parentSlug) => {
  // Step 1: Fetch the category by slug to get its ID
  const parentResult = await client.query({
    query: gql`
      query GetParentCategoryId($slug: ID!) {
        category(id: $slug, idType: SLUG) {
          id
          databaseId
        }
      }
    `,
    variables: { slug: parentSlug },
  });

  const parentId = parseInt(parentResult?.data?.category?.databaseId);

  if (!parentId) {
    console.warn(`No category found for slug "${parentSlug}"`);
    return [];
  }

  // Step 2: Fetch subcategories using the parent ID
  const result = await client.query({
    query: gql`
      query GetSubCategoriesByParentId($parentId: Int!) {
        categories(where: { parent: $parentId }, first: 100) {
          edges {
            node {
              id
              databaseId
              name
              slug
              description
              seo {
                title
                metaDesc
                opengraphTitle
                opengraphDescription
                opengraphImage {
                  mediaItemUrl
                }
              }
              posts(first: 100) {
                nodes {
                  id
                  title
                  slug
                }
              }  
            }
          }
        }
      }
    `,
    variables: { parentId },
  });

  return result.data.categories.edges.map(edge => edge.node);
};

export default getSubCategoriesByParentSlug;
