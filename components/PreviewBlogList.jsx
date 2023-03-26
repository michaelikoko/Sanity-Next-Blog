"use client"

import Link from "next/link"
import { usePreview } from "../lib/sanity.preview"
import BlogList from "./BlogList"

export default function PreviewBlogList({query}) {
    const posts = usePreview(null, query)
    return (
        <>        
            <BlogList posts={posts} />
            <Link
                className="btn btn-primary mb-2 me-2 text-white fw-bold position-fixed bottom-0 end-0"
                href="/api/exit-preview"
            >
                Exit Preview
            </Link>
        </>
    )
}