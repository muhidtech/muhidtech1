// app/dashboard/page.tsx
import ProtectedRoute from "@/app/hooks/ProtectedRoute";
import DashboardPage from "./components/Dashboard";

export default function page() {
  return (
    <ProtectedRoute>
        <DashboardPage />
    </ProtectedRoute>
  );
}
