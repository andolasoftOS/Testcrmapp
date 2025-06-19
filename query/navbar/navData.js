import { gql } from '@apollo/client';
import { client } from '../config';

const getNavbarData = async () => {
  const navData = await client.query({
    query: gql`
      query MyQuery {
        menuItems{
          edges {
            node {
              key: id
              parentId
              title: label
              url
            }
          }
        }
      }
    `,
  });
  return navData;
};

export default getNavbarData;
