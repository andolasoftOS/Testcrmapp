import { gql } from "@apollo/client";
import { client } from "../config";

const getServiceDetailsData = async () => {
	const serviceDetailsData = await client.query({
		query: gql`
      query MyQuery {
        pageBy(
          uri: "${process.env.WORDPRESS_URL}/index.php/service-details/"
        ) {
          serviceDetailsPage {
            serviceContentTitle
            serviceContentDescription
            serviceContentImage {
              sourceUrl
            }
          }
          faqSection {
            faqItems {
              faqItemTitle
              faqItemDescription
            }
          }
        }
      }
    `,
	});
	return serviceDetailsData;
};

export default getServiceDetailsData;
