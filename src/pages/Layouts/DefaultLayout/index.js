import Header from "./Header";
import Sidebar from "./Sidebar";


function DefaultLayout({ children }) {
  return (
    <>
      <Sidebar />
      <Header />

      <main className="container">
        <div className="content">
          {children}
        </div>
      </main>
    </>
  );
}

export default DefaultLayout;