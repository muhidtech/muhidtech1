import React from 'react'
import ProtectedRoute from "@/app/hooks/ProtectedRoute";


function page() {
  return (
    <ProtectedRoute>
      <div></div>
    </ProtectedRoute>
  )
}

export default page
