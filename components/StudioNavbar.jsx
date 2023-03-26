
import Link from "next/link"
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"

export default function StudioNavbar(props)
{
    return (
        <div>
            
                <div className="p-3">
                    <Link href="/" className="text-brand-color d-flex flex-row align-items-center justify-content-start text-decoration-none">
                        <ArrowUturnLeftIcon className="text-brand-color me-3" style={{height: "1.5rem", width: "1.5rem"}}/>
                        <span>
                            Go to Website
                        </span>
                    </Link>
                </div>
                {props.renderDefault(props)}
            
        </div>
    )
}