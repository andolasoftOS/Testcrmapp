import { gql } from "@apollo/client";
import { client } from "../config";

const getPrivacyData = async () => {
	const privacyData = await client.query({
		query: gql`
      query MyQuery {
        pageBy(uri: "${process.env.WORDPRESS_URL}/index.php/privacy-policy") {
          privacyPolicySection {
            privacyPolicyContent
          }
        }
      }
    `,
	});
	return privacyData;
};

export default getPrivacyData;
