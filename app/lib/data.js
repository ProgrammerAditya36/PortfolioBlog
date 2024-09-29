import { GraphQLClient, gql } from "graphql-request";
const query = gql`
	{
		portfolios {
			title
			tags
			slug
			description
			date
			coverImage {
				url
				width
				height
			}
		}
		posts {
			title
			slug
			description
			date
			tags
			auth {
				name
				image {
					url
					width
					height
				}
			}
		}
	}
`;

export const getPostsandPortfolios = async () => {
	const endpoint =
		"https://ap-south-1.cdn.hygraph.com/content/cm1lrgyxo01b107vz5d2chu7y/master";
	const graphQLClient = new GraphQLClient(endpoint);

	// Fetch the data using an async call
	let data;
	try {
		data = await graphQLClient.request(query);
		return data;
	} catch (error) {
		console.error("Error fetching data:", error);
		return <div>Error loading data</div>;
	}
};
