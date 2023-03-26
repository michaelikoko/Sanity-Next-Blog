
import Link from "next/link"
import Image from 'next/image'
import logoImage from "../public/images/logo-image.png"

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="d-flex flex-row align-items-center justify-content-between py-2">
                    <div className="d-flex flex-row align-items-center justify-content-center">
                        <Link href="/">
                            <Image
                                src={logoImage}
                                width={50}
                                height={50}
                                alt="logo"
                                className="rounded-circle"
                            />
                        </Link>
                        <span className="fs-4 fw-bolder text-uppercase text-brand-color ms-2 text-center">Ikoko&apos;s Blog</span>
                    </div>

                    <div>
                        <Link href={`${process.env.NEXT_PUBLIC_PORTFOLIO_URL}`} target="_blank">
                            <div className="btn btn-dark rounded-pill text-brand-color">
                                Visit Portfolio
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}