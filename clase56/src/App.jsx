import SideBar from './components/SideBar'
import { Outlet } from 'react-router-dom'

import './App.css'
import TopBar from './components/TopBar'
import Footer from './components/Footer'

function App() {
  return (
    <div id="wrapper">

      {/* <!-- Sidebar --> */}
      <SideBar />
      {/* <!-- End of Sidebar --> */}

      {/* <!-- Content Wrapper --> */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">

          {/* <!-- Topbar --> */}
          <TopBar />
          {/* <!-- End of Topbar --> */}
          <Outlet />
        </div>
        {/* <!-- End of Content Wrapper --> */}
        {/* <!-- Footer --> */}
        <Footer />
        {/* <!-- End of Footer --> */}
      </div>
      {/* <!-- End of MainContent --> */}


    </div>
  )
}

export default App
