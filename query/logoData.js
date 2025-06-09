import { gql } from "@apollo/client";
import { client } from "./config";

const getLogoData = async () => {
  try {
    if (!process.env.WORDPRESS_URL) {
      throw new Error("WORDPRESS_URL environment variable is not set");
    }
    
    //console.log(`Fetching data from ${process.env.WORDPRESS_URL}`); // Debug log
    const LogoData = await client.query({
      query: gql`
        query MyQuery {
          pageBy(uri: "${process.env.WORDPRESS_URL}/index.php/home/") {
            homeLogo {
              logo {
                sourceUrl
              }
              whitelogo {
                sourceUrl
              }
            }
          }
        }
      `,
    });

    //console.log("Fetched logo data:", LogoData); // Log the data for debugging
    return LogoData;
  } catch (error) {
    //console.error("Error fetching logo data:", error);
    return null; // Return null on error
  }
};


export default getLogoData;
