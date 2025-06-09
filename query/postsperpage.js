import { gql } from '@apollo/client';
import { client } from './config';

export async function getPostsPerPage() {
  try {
    const { data } = await client.query({
      query: gql`
        query PostPerPage {
          allSettings {
            readingSettingsPostsPerPage
          }
        }
      `,
    });

    return Number(data.allSettings.readingSettingsPostsPerPage);
  } catch (e) {
    console.log(`Failed to query post per page data: ${e.message}`);
    throw e;
  }
}