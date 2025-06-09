import { gql } from "@apollo/client";
import { client } from "../config";

const getHomeFourData = async () => {
	const HomeFourBannerData = await client.query({
		query: gql`
      query MyQuery {
        pageBy(uri: "${process.env.WORDPRESS_URL}/home-four/") {

          homeFourBanner {
            banneritem {
              title
              shortdescription
              getstartedbtntext
              getstartedbtnlink
              aboutbtntext
              aboutbtnlink
              image {
                sourceUrl
              }
            }
          }

        }
      }
    `,
	});
	return HomeFourBannerData;
};

export default getHomeFourData;
