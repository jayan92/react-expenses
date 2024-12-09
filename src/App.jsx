import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<h1 className="text-xl">Loading...</h1>}>
          <Outlet /> {/* Renders the matched child route */}
        </Suspense>
      </main>
    </>
  );
}

export default App;
