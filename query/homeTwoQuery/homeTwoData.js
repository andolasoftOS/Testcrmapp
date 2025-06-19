import { gql } from "@apollo/client";
import { client } from "../config";

const getHomeTwoData = async () => {
	const HomeTwoBannerData = await client.query({
		query: gql`
      query MyQuery {
        pageBy(uri: "${process.env.WORDPRESS_URL}/home-two/") {

          homeTwoBanner {
            bannertitle
            bannercontent
            bannerimage {
              sourceUrl
            }
          }

        }
      }
    `,
	});
	return HomeTwoBannerData;
};

export default getHomeTwoData;
