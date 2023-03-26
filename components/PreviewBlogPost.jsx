"use client"

import Link from "next/link"
import { usePreview } from "../lib/sanity.preview"
import BlogPost from "./BlogPost"

export default function PreviewBlogPost({ query, slug }) {

    const previewData = usePreview(null, query, { slug })
    
    return (
        <>
            <BlogPost post={previewData} />
            <Link
                className="btn btn-primary mb-2 me-2 text-white fw-bold position-fixed bottom-0 end-0"
                href="/api/exit-preview"
            >
                Exit Preview
            </Link>
        </>
    )
}