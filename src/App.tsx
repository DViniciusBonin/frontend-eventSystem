import { Route, Routes } from "react-router";
import { AuthProvider } from "./contexts/auth";
import { Admin } from "./pages/Admin";
import { Home } from "./pages/Home";
import { PreviousEvents } from "./pages/PreviousEvents";
import { Registrations } from "./pages/Registrations";

function App() {
  return (
    <AuthProvider>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/eventos-anteriores" element={<PreviousEvents />}/>
      <Route path="/inscricoes/:id" element={<Registrations/>} />
      <Route path="/admin" element={
        <Admin />
      }/>
    </Routes>
    </AuthProvider>
  );
}

export default App;
