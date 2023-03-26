
export default function Banner() {
    return (
        <div className="container">
            <div className="row">
                <div className="py-2 col-lg-7 col-12">
                    <div className="fw-bolder h1" style={{fontSize: "2.8rem"}}>
                        Ikoko&apos;s Daily Blog
                    </div>
                    <div className="fs-5 fw-semibold">
                        Welcome to {" "}<span className="underline">Michael Ikoko&apos;s</span>{" "}
                        personal daily blog.
                    </div>
                </div>
                <div className="col-lg-5 col-12 text-secondary text-start fs-6 py-2">
                    The latest in technology | New product features | the weekly debugging nightmares & More!
                </div>
            </div>
        </div>
    )
}