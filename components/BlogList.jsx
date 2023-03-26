import urlFor from "../lib/urlFor"
import Image from "next/image"
import { ArrowUpRightIcon, CalendarDaysIcon } from "@heroicons/react/24/solid"
import ClientSideRoute from "./ClientSideRoute"

export default function BlogList({ posts }) {
    return (
        <div>
            <div className="text-brand-color container mb-4">
                <hr />
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4">

                    {
                        posts.map((post, index) => (
                            <ClientSideRoute key={index} route={`/post/${post.slug.current}`}>
                                <div className="col">
                                    <div className="position-relative w-100 shadow rounded post_card">
                                        <Image
                                            src={urlFor(post.mainImage).url()}
                                            alt={post.author.name}
                                            fill
                                            style={{
                                                objectFit: "cover",
                                                objectPosition: "center"
                                            }}
                                            className="rounded post_card__image"
                                        />
                                        <div
                                            className="position-absolute bottom-0 w-100 bg-dark bg-opacity-75 rounded-bottom p-3 d-flex flex-row justify-content-between align-items-center post_card__text"
                                            style={{ backdropFilter: 'blur(16px)' }}
                                        >
                                            <div className="d-flex flex-column align-items-start justify-content-center gap-2">
                                                <div className="fw-bolder text-white">
                                                    {post.title}
                                                </div>
                                                <div className="text-white mt-0 d-flex align-items-center justify-content-start" style={{fontSize: '0.75rem'}}>
                                                    <CalendarDaysIcon style={{width: "0.75rem", height: "0.75rem"}} className="me-1"/>
                                                    {
                                                        new Date(post._createdAt).toLocaleDateString("en-US", {
                                                            day: "numeric",
                                                            month: "long",
                                                            year: "numeric"
                                                        })
                                                    }
                                                </div>
                                                {/*                                            
                                            <div className="text-brand-color d-flex flex-row align-items-center justify-content-start link">
                                                <span>Read Post</span>
                                                <ArrowUpRightIcon style={{width: "1rem", height: "1rem"}} className="ms-1" />
                                            </div>
                                            */}
                                            </div>
                                            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-1">
                                                {
                                                    post.categories.map((category, index) => (
                                                        <div key={index} className="btn btn-brand-color btn-sm disabled rounded-pill fw-semibold">
                                                            <div className="text-dark">
                                                                {category.title}
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </ClientSideRoute>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}