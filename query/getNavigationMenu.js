import { gql } from '@apollo/client';
import { client } from './config'; // Assuming you have your Apollo client set up in config.js

const getMenuById = async (menuId) => {
  const { data } = await client.query({
    query: gql`
      query GetMenuById($id: ID!) {
        menu(id: $id, idType: DATABASE_ID) {
          id
          name
          slug
          menuItems(first: 100) {
            nodes {
              id
              label
              url
              path
              parentId
              cssClasses
            }
          }
        }
      }
    `,
    variables: {
      id: menuId // Passing the dynamic menuId to the query
    }
  });

  return data?.menu?.menuItems?.nodes || [];
};

export default getMenuById;
