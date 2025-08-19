import { ToastContainer } from "react-toastify";
import AppRouter from "./router.jsx";

export default function App() {
  return (
    <>
      <AppRouter />
      <ToastContainer />
    </>
  );
}
