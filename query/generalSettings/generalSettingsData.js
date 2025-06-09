import { gql } from '@apollo/client';
import { client } from '../config';

const generalSettingsData = async () => {
  const generalData = await client.query({
    query: gql`
      query MyQuery {
        generalSettings {
            title
            description
            url
          }
      }
    `,
  });
  return generalData;
};

export default generalSettingsData;
