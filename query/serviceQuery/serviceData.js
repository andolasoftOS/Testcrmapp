import { gql } from "@apollo/client";
import { client } from "../config";

const getServiceData = async () => {
	const serviceData = await client.query({
		query: gql`
      query MyQuery {
        pageBy(uri: "${process.env.WORDPRESS_URL}/index.php/service") {
          servicePage {
            serviceItems {
              serviceItemTitle
              serviceItemDescription
              serviceItemIcon {
                sourceUrl
              }
            }
          }
        }
      }
    `,
	});
	return serviceData;
};

export default getServiceData;
