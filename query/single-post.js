import { gql } from '@apollo/client';
import { client } from './config';

const getSinglePost = async (slug) => {
  const getPost = await client.query({
    query: gql`
      query MyQuery($slug: ID!) {
        post(id: $slug, idType: SLUG) {
          title
          id
          content
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          databaseId
          comments {
            nodes {
              content
              date
              author {
                node {
                  name
                }
              }
            }
          }
          categories {
            nodes {
              name
              slug
              parent {
                node {
                  name
                  slug
                  parent {
                    node {
                      name
                      slug
                    }
                  }
                }
              }
              posts {
                nodes {
                  id
                  title
                  slug
                }
              }
            }
          }
          tags {
            nodes {
              name
            }
          }
          seo {
            title
            metaDesc
            opengraphTitle
            opengraphDescription
            opengraphImage {
              mediaItemUrl
            }
          }
          author {
            node {
              name
            }
          }
        }
      }
    `,
    variables: {
      slug,
    },
  });
  return getPost;
};

export default getSinglePost;
