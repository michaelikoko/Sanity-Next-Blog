"use client"
import Link from "next/link"

export default function ClientSideRoute({ children, route })
{
    return (
        <Link href={route}>{children}</Link>
    )
}