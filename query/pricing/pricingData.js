import { gql } from "@apollo/client";
import { client } from "../config";

const getPricingData = async () => {
	const PricingData = await client.query({
		query: gql`
      query MyQuery {
        pageBy(uri: "${process.env.WORDPRESS_URL}/index.php/pricing") {
          pricingSection {
            pricingDetails {
              pricingTitle
              pricingSubtitle
              pricingPrice
              pricingComment
              pricingDuration
              pricingButton
              pricingFeatures {
                pricingSingleFeature
              }
            }
          }
        }
      }
    `,
	});
	return PricingData;
};

export default getPricingData;
