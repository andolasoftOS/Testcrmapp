/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
	trailingSlash: true, 
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	optimizeFonts: false,
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	env: {
		WORDPRESS_GRAPHQL_ENDPOINT:
			"https://oshelpdesk-api.andolasoft.co.in/graphql",
		WORDPRESS_URL: "https://oshelpdesk-api.andolasoft.co.in",
	},
	async redirects() {
		return [
			{
				source: "/community-base/set-smtp-configuration-community-edition",
				destination: "/",
				permanent: true, 
			},
		];
	},
};

module.exports = nextConfig;
