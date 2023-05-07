import { BrowserRouter, Routes, Route } from "react-router-dom";
import publicroutes from "~/pages/routes";
import { DefaultLayout } from "~/pages/Layouts";
import "~/components/GlobalStyles/GlobalStyles.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Routes>
          {publicroutes.map(({ id, path, component }) => {
            const Page = component;
            return (
              <Route
                key={id}
                path={path}
                element={<DefaultLayout>
                  <Page />
                </DefaultLayout>}
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
