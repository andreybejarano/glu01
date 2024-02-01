import SideBar from './components/SideBar';
import ContentWrapper from './components/ContentWrapper';

import './App.css';

function App() {
  return (
    <div id="wrapper">

      {/* <!-- Sidebar --> */}
      <SideBar />
      {/* <!-- End of Sidebar --> */}

      {/* <!-- Content Wrapper --> */}
      <ContentWrapper />
      {/* <!-- End of Content Wrapper --> */}

    </div>
  );
}

export default App;
