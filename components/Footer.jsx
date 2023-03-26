import { SocialIcon } from "react-social-icons"


export default function Footer() {
    return (
        <footer className="mt-auto p-5 w-100 bg-transparent">
            <div className="container border-top border-brand-color">
                <div className="row gap-4 gap-sm-0">
                    <div className="col-12 col-sm-6 d-flex flex-column align-items-start justify-content-start">
                        <div className="text-white fw-bold fs-5">Copyright</div>
                        <div className="text-secondary mt-3">Copyright &copy; 2023, Michael Ikoko</div>
                        <div className="text-secondary mt-3">All Rights Reserved</div>
                    </div>
                    <div className="col-12 col-sm-6 d-flex flex-column align-items-start align-items-sm-end justify-content-start">
                        <div className="d-flex flex-column align-items-start justify-content-start">
                            <div className="text-white fw-bold fs-5">Follow Me</div>
                            <div className="mt-3 d-flex flex-row justify-content-start align-items-center">
                                <SocialIcon url="mailto:michaelikoko.o@gmail.com" bgColor="#F7AB0A" className="me-3" style={{ width: "1.5rem", height: "1.5rem" }} />
                                <SocialIcon url="https://twitter.com/michael_ikoko" bgColor="#F7AB0A" className="me-3" style={{ width: "1.5rem", height: "1.5rem" }} />
                                <SocialIcon url="https://www.linkedin.com/in/michaelikoko/" bgColor="#F7AB0A" className="me-3" style={{ width: "1.5rem", height: "1.5rem" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}