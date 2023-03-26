/*
export default function preview(req, res) {
    res.setPreviewData({})
    res.writeHead(307, { Location: "/" })
    res.end()
} */

import { groq } from "next-sanity"
import { client } from "../../lib/sanity.client"


function redirectToPreview(res, Location) {
    // Enable Preview Mode by setting the cookies
    res.setPreviewData({})
    // Redirect to a preview capable route
    res.writeHead(307, { Location })
    res.end()
}

const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
    ...,
    author->,
    categories[]->
}`

export default async function preview(req, res) {
    // If no slug is provided open preview mode on the frontpage
    if (!req.query.slug) {
        return redirectToPreview(res, '/')
    }
    console.log("Anyachan")
    console.log(req.query.slug)

    // Check if the post with the given `slug` exists
    const post = await client.fetch(postBySlugQuery, {
        slug: req.query.slug,
    })

    // If the slug doesn't exist prevent preview mode from being enabled
    if (!post) {
        return res.status(401).json({ message: 'Invalid slug' })
    }

    // Redirect to the path from the fetched post
    // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
    redirectToPreview(res, `/post/${post.slug.current}`)
}

