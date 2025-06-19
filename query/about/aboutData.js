import { gql } from "@apollo/client";
import { client } from "../config";

const getAboutPageData = async () => {
	const AboutPageData = await client.query({
		query: gql`
      query MyQuery {
        pageBy(uri: "${process.env.WORDPRESS_URL}/index.php/about") {
          aboutTeamSection {
            teamsMember {
              teamName
              teamDescription
              teamDesignation
              teamImage {
                sourceUrl
              }
            }
          }
        }
      }
    `,
	});
	return AboutPageData;
};

export default getAboutPageData;
