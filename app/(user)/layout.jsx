import '../../styles/globals.css'
import '../../styles/custom.scss'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import favicon from "../favicon.png"
import Footer from '../../components/Footer'

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href={favicon.src}
				/>
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<meta name="description" content="Ikoko's Daily Blog" />
			</head>
			<body className="d-flex flex-column min-vh-100">
				<Header />
				<Banner />
				{children}
				<Footer />
			</body>
		</html>
	)
}
