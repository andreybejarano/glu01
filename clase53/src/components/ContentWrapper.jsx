import ContentRowTop from "./ContentRowTop"
import Footer from "./Footer"
import TopBar from "./TopBar"
import Movie from './Movie'

function ContentWrapper() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">

			{/* <!-- Main Content --> */}
			<div id="content">

				{/* <!-- Topbar --> */}
				<TopBar />
				{/* <!-- End of Topbar --> */}

				{/* <!-- Content Row Top --> */}
				<ContentRowTop />
				{/* <!--End Content Row Top--> */}
				<Movie />
			</div>
			{/* <!-- End of MainContent --> */}

			{/* <!-- Footer --> */}
			<Footer />
			{/* <!-- End of Footer --> */}

		</div>
    )
}

export default ContentWrapper