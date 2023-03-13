import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Display } from "./display/display";
import { GraphsModule1 } from "./graphs/graphModule1";
import { GraphsModule3 } from "./graphs/graphModule3";
import { GraphsModule2 } from "./graphs/graphModule2";

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
                <Route path="/Graphs1" exact element={<GraphsModule1 />}></Route>
                <Route path="/Graphs2" exact element={<GraphsModule2 />}></Route>
                <Route path="/Graphs3" exact element={<GraphsModule3 />}></Route>
                
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
