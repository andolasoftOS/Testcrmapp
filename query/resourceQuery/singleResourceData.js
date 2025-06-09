import { gql } from '@apollo/client';
import { client } from '../config';

const getSingleResource = async (slug) => {
  const getResource = await client.query({
    query: gql`
      query MyQuery($slug: ID!) {
        resource(id:$slug, idType: SLUG) {
          title
          content
          featuredImage {
            node {
              sourceUrl
            }
          }
          resourceDetails {
            resourceContentItems {
              resourceContentTitle
              resourceContentSubtitle
              resourceContentDescription
            }
            technology
            category
            previewLinkText
            previewLink
          }
        }
      }
    `,
    variables: {
      slug,
    },
  });
  return getResource;
};

export default getSingleResource;
