import Image from "next/image";
import Link from "next/link";
import urlFor from "../lib/urlFor";

export const RichTextComponents = {
    types: {
        image: ({ value }) => {
            return (
                <div className="position-relative w-100 mx-auto" style={{ height: "24rem" }}>
                    <Image
                        src={urlFor(value).url()}
                        style={{
                            objectFit: "contain",
                        }}
                        alt="Blog Post Image"
                        fill
                    />
                </div>
            )
        }
    },

    list: {
        bullet: ({ children }) => (
            <ul>{children}</ul>
        ),
        number: ({ children }) => (
            <ol>{children}</ol>
        )
    },

    block: {
        h1: ({ children }) => (
            <div className="h1">{children}</div>
        ),
        h2: ({ children }) => (
            <div className="h2">{children}</div>
        ),
        h3: ({ children }) => (
            <div className="h3">{children}</div>
        ),
        h4: ({ children }) => (
            <div className="h4">{children}</div>
        ),
        blockquote: ({ children }) => (
            <blockquote className="blockquote border-start border-3 border-brand-color p-4 lead text-dark my-2">
                {children}
            </blockquote>
        )
    },

    marks: {
        link: ({ children, value }) => {
            const rel = !value.href.startsWith("/")
                ? "noreferrer noopener" : undefined

            return (
                <Link
                    href={value.href}
                    rel={rel}
                    className="link-brand-color"
                >
                    {children}
                </Link>
            )
        }
    }
}