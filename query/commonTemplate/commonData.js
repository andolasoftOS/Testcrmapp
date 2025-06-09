import { gql } from '@apollo/client';
import { client } from '../config';

const getCommonPage = async (slug) => {
  //console.log("Fetching data for slug:", slug); 
  
  const getPage = await client.query({
    query: gql`

    query GettingStarted {
      posts(where: {categoryId: 121}) {
        edges {
          node {
            id
            title
            link
          }
        }
      }
    }

    `,
    variables: {
      slug: slug
    },
  });  
  //console.log("coojs"+getPage?.data?.posts);
  return getPage?.data?.posts;
};
export default getCommonPage;