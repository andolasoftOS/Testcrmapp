import { gql } from "@apollo/client";
import { client } from "../config";

const getHomeThreeData = async () => {
	const HomeThreeBannerData = await client.query({
		query: gql`
      query MyQuery {
        pageBy(uri: "${process.env.WORDPRESS_URL}/home-three/") {

          homeBannerThree {
            bannertitle
            bannercontent
            getstartedtext
            getstartedlink
            aboutbtntext
            aboutbtnlink
            bannerbgimage {
              sourceUrl
            }
            videolink
          }

          operationCenter {
            operationimage {
              sourceUrl
            }
            title
            shorttext
            operationcenterlist {
              listtitle
            }
          }

          ourApproaches {
            title
            shorttext
            approachlist {
              icon {
                sourceUrl
              }
              title
              shorttext
            }
          }

        }
      }
    `,
	});
	return HomeThreeBannerData;
};

export default getHomeThreeData;
