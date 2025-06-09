import { gql } from '@apollo/client';
import { client } from './config';

const getPrimaryMenu = async () => {
  const { data } = await client.query({
    query: gql`
      query GetPrimaryMenu {
        menu(id: "Headless", idType: NAME) {
          menuItems(first: 100) {
            nodes {
              id
              label
              url
              path
              parentId
              cssClasses
              childItems(first: 100) {
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
        }
      }
    `
  });

  const allItems = data?.menu?.menuItems?.nodes || [];

  // Filter only top-level items and attach their nested children
  const topLevelItems = allItems
    .filter(item => item.parentId === null)
    .map(item => ({
      ...item,
      childItems: item.childItems?.nodes || []
    }));

  return topLevelItems;
};

export default getPrimaryMenu;
