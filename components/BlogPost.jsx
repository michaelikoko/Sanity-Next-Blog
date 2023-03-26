import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import { RichTextComponents } from "./RichTextComponents"

export default function BlogPost({ post }) {
    return (
        <>
        <div className="text-brand-color container mb-1">
            <hr />
        </div>

        <article className="container py-5">
            <section className="border border-brand-color text-white border-opacity-75">
                <div className="position-relative d-flex flex-row justify-content-between" style={{ minHeight: '14rem' }}>
                    <div className="position-absolute top-0 w-100 p-5"
                        style={{ backdropFilter: 'blur(16px)', opacity: '10%', height: "100%" }}
                    >
                        <Image
                            src={urlFor(post.mainImage).url()}
                            alt={post.author.name}
                            fill
                            style={{
                                objectFit: "cover",
                                objectPosition: "center"
                            }}
                            className="mx-auto"
                        />
                    </div>

                    <section className="bg-brand-color w-100 p-3 d-flex flex-column justify-content-between">
                        <div className="d-flex flex-column flex-md-row justify-content-between gap-4">
                            <div>
                                <div className="fs-1 fw-bolder">{post.title}</div>
                                <div style={{ fontSize: '0.75rem' }} className="text-white mt-0 d-flex align-items-center justify-content-start">
                                    <CalendarDaysIcon style={{ width: "0.75rem", height: "0.75rem" }} className="me-1" />
                                    {
                                        new Date(post._createdAt).toLocaleDateString("en-US", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric"
                                        })
                                    }
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-start gap-2">
                                <Image
                                    className="rounded-circle"
                                    src={urlFor(post.author.image).url()}
                                    alt={post.author.name}
                                    height={40}
                                    width={40}
                                />

                                <div>
                                    <div className="fs-6">{post.author.name}</div>
                                    <div>
                                        {/*Author bio */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row justify-content-start justify-content-md-end align-items-center">
                            <div className="d-flex flex-row gap-1">
                                {
                                    post.categories.map((category, index) => (
                                        <div className="btn btn-dark text-white rounded-pill" key={index}>
                                            {category.title}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            <div className="py-5">
                <PortableText value={post.body} components={RichTextComponents} />
            </div>

        </article>
    </>
    )
}