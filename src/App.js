import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Display } from "./display/display";
import { GraphsModule } from "./graphs/graphModule";

function App() {
  const LandingPage = lazy(() => import("./pages/LandingPage"));
  const LoginPage = lazy(() => import("./pages/LoginPage"));
  const HomePage = lazy(() => import("./pages/HomePage"));

  return (
    <div>
      <Suspense fallback={<div>Loading ...</div>}>
          <BrowserRouter>
            <Routes>
              <>
                <Route path="/" exact element={<Display />}></Route>
                <Route path="/Landing" exact element={<LandingPage />}></Route>
                <Route path="/login" exact element={<LoginPage />}></Route>
                <Route path="/Home" exact element={<HomePage />}></Route>
                <Route path="/Graphs" exact element={<GraphsModule />}></Route>
                <Route
                  path="*"
                  element={
                    <main style={{ padding: "1rem" }}>
                      <p>There's nothing here!</p>
                    </main>
                  }
                />
              </>
            </Routes>
          </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
