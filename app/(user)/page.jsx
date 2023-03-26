import styles from '../page.module.scss'
import { previewData } from 'next/headers'
import { groq } from 'next-sanity'
import { client } from "../../lib/sanity.client"
import { PreviewSuspense } from '../../components/PreviewSuspense'
import PreviewBlogList from "../../components/PreviewBlogList"
import BlogList from '../../components/BlogList'

const query = groq`
	*[_type=="post"]{
		...,
		author->,
		categories[]->
	} | order(_createdAt desc)
`

export const revalidate = 18000


export const metadata = {
	title: "Ikoko's Blog - Home",
};


export default async function Home() {

	if (previewData()) {

		return (
			<PreviewSuspense fallback={
				<div role="status">
					<div className="d-flex flex-row align-items-center justify-content-center mt-5">
						<div className="spinner-grow text-brand-color" role="status">
						</div>
						<div className="text-center text-brand-color fs-5 ms-3">
							Loading Preview Data...
						</div>
					</div>
				</div>
			}>
				<PreviewBlogList query={query} />
			</PreviewSuspense>
		)
	}

	const posts = await client.fetch(query)
	return (
		<main className={styles.main}>
			<BlogList posts={posts} />
		</main>
	)
}
