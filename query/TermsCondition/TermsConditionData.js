import { gql } from "@apollo/client";
import { client } from "../config";

const getTermsConditionData = async () => {
	const termsConditionData = await client.query({
		query: gql`
      query MyQuery {
        pageBy(uri: "${process.env.WORDPRESS_URL}/index.php/terms-condition") {
          termsConditionSection {
            termsConditionContent
          }
        }
      }
    `,
	});
	return termsConditionData;
};

export default getTermsConditionData;
