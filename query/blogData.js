import { gql } from "@apollo/client";
import { client } from "./config";

const getBlogBannerData = async () => {
	const BlogBannerData = await client.query({
		query: gql`
      query MyQuery {
        pageBy(uri: "${process.env.WORDPRESS_URL}/index.php/blog/") {
          blog {
            bannerTitle
            buttonQuote
          }
        }
      }
    `,
	});
	return BlogBannerData;
};

export default getBlogBannerData;
