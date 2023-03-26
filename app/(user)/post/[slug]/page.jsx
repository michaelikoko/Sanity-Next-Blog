import { groq } from "next-sanity"
import { PreviewSuspense } from "../../../../components/PreviewSuspense"
import { previewData } from 'next/headers'
import BlogPost from "../../../../components/BlogPost"
import PreviewBlogPost from "../../../../components/PreviewBlogPost"
import { client } from "../../../../lib/sanity.client"



export const revalidate = 30

export async function generateMetadata({ params, searchParams }) {
    return { title: `Ikoko's Blog - ${params.slug}` };
}

export async function generateStaticParams() {
    const query = groq`*[_type=='post']{
        slug
    }`

    const slugs = await client.fetch(query)
    const slugRoutes = slugs.map((slug) => slug.slug.current)

    return slugRoutes.map((slug) => ({
        slug: slug
    }))
}

//export async function generateMetadata() {
//    return { title: `Ikoko's Blog - Article` };
//}

export default async function Post({ params: { slug } }) {
    const query = groq`
    *[_type == "post" && slug.current == $slug][0]
    {
        ...,
        author->,
        categories[]->
    }
    `

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
                <PreviewBlogPost query={query} slug={slug} />
            </PreviewSuspense>
        )
    }

    const post = await client.fetch(query, { slug })

    return (
        <BlogPost post={post}/>
    )
}