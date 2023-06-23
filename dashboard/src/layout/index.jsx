import Sidebar from "../components/Sidebar";
import ContentWrapper from "../components/ContentWrapper";
function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
}

export default Layout;
