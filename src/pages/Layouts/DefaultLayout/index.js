import ModalDialog from '~/components/ModalDialog';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function DefaultLayout({ children }) {
  return (
    <>
      <Sidebar />
      <Header />
      <ModalDialog />

      <main className="container main">
        <div className="wrapper content">{children}</div>
      </main>
    </>
  );
}

export default DefaultLayout;
