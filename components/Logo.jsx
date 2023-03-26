
import Image from "next/image"
import logoImage from "../public/images/logo-image.png"

export default function Logo(props)
{
    const { renderDefault, tile } = props

    return (
        <div className="d-flex flex-row align-items-center justify-content-start">
            <Image 
            width={50}
            height={50}
            src={logoImage}
            alt="Logo image"
            className="rounded-circle"
            />
            <>
                {renderDefault(props)}
            </>
        </div>
    )
}