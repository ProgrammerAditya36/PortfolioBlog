import Link from "next/link";
import { getPostsandPortfolios } from "./lib/data";

// Fetch data inside the server component
export default async function Home() {
	const data = await getPostsandPortfolios();

	return (
		<div>
			<h1>Welcome to the portfolio</h1>

			{/* Portfolios Section */}
			<div>
				<h2>Portfolios</h2>
				{data?.portfolios.map((portfolio) => (
					<div key={portfolio?.slug}>
						<Link href={`/portfolio/${portfolio?.slug}`}>
							{portfolio?.title}
						</Link>
					</div>
				))}
			</div>

			{/* Posts Section */}
			<div>
				<h2>Posts</h2>
				{data?.posts.map((post) => (
					<div key={post.slug}>
						<Link href={`/blog/${post.slug}`}>{post.title}</Link>
					</div>
				))}
			</div>
		</div>
	);
}
