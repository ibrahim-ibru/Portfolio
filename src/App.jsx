import { Navigate, Route, Routes } from "react-router-dom";
import Portfolio from "@/pages/Portfolio";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
