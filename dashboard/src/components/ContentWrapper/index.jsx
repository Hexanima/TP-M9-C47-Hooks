import Footer from "../Footer";
import TopBar from "../TopBar";

function ContentWrapper({ children }) {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      {/* <!-- Main Content --> */}
      <div id="content">
        {/* <!-- Topbar --> */}
        <TopBar />
        {/* <!-- End of Topbar --> */}

        {/* <!-- Content Row Top --> */}
        <div className="container-fluid">{children}</div>
        {/* <!--End Content Row Top--> */}
      </div>
      {/* <!-- End of MainContent --> */}

      {/* <!-- Footer --> */}
      <Footer />
      {/* <!-- End of Footer --> */}
    </div>
  );
}

export default ContentWrapper;
