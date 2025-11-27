import * as React from "react"
import { Toast, ToastProvider } from "./toast.jsx"   // FIXED: removed "@/"

export function Toaster({ children }) {
  return (
    <ToastProvider>
      {children}
      <Toast />
    </ToastProvider>
  )
}

export default Toaster;
