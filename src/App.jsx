import { Route, Routes } from "react-router-dom";
import { Index } from "./pages/Index";
import { GlobalComponent } from "./components/global-component/GlobalComponent";
import { Preimpresion } from "./pages/Preimpresion";
import { Gigantografia } from "./pages/Gigantografia";
import { OffsetDigital } from "./pages/Offsetdigital";

function App() {
  return (
    <>
      <Routes>
        <Route element={<GlobalComponent />}>
          <Route path="/" element={<Index />} />
          <Route path="/gigantografia" element={<Gigantografia />} />
          <Route path="/preimpresion" element={<Preimpresion />} />
          <Route path="/offsetdigital" element={<OffsetDigital />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
