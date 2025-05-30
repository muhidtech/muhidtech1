// app/dashboard/analytics/page.tsx
import React from "react";
import AnalyticsOverview from "./components/AnalyticsOverview";
import Layout from "../dashboard/components/layout/Layout";
import ProtectedRoute from "@/app/hooks/ProtectedRoute";


export default function AnalyticsPage() {
  return (
    <ProtectedRoute>
      <Layout>
          <div className="md:ml-60 w-auto p-6 space-y-6">
          <h1 className="text-2xl font-bold text-cyan-600">Analytics Overview</h1>
          <AnalyticsOverview />
          </div>
      </Layout>
    </ProtectedRoute>
  );
}
