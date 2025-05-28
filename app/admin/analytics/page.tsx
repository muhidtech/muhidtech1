// app/dashboard/analytics/page.tsx
import React from "react";
import AnalyticsOverview from "./components/AnalyticsOverview";
import Layout from "../dashboard/components/layout/Layout";

export default function AnalyticsPage() {
  return (
    <Layout>
        <div className="ml-60 p-6 space-y-6">
        <h1 className="text-2xl font-bold text-cyan-600">Analytics Overview</h1>
        <AnalyticsOverview />
        </div>
    </Layout>
  );
}
