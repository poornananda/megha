import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const LandingPage = lazy(() => import("./pages/LandingPage"));
  const LoginPage = lazy(() => import("./pages/LoginPage"));
  const HomePage = lazy(() => import("./pages/HomePage"));

  const isUserLogin = localStorage.getItem("userLogin");

  return (
    <div>
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Routes>
            {!isUserLogin ? (
              <>
                <Route path="/" exact element={<LandingPage />}></Route>
                <Route path="/login" exact element={<LoginPage />}></Route>
              </>
            ) : (
              <>
                <Route path="/" exact element={<HomePage />}></Route>
              </>
            )}
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
