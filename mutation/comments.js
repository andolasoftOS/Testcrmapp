import { gql } from '@apollo/client';


const newComment = gql`
      mutation CREATE_COMMENT($commentOn: Int!, $content: String!, $author: String!) {
        createComment( input: { commentOn: $commentOn, content: $content, author: $author }) {
          success
          comment {
            id
            content
            author {
              node {
                name
              }
            }
          }
        }
      }
    `;

export default newComment;
