"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

// Create a context for the loading state
const LoadingContext = createContext({
  loading: true,
  setLoading: (loading: boolean) => {},
})

// Create a provider component
export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true) // Start with loading true

  return <LoadingContext.Provider value={{ loading, setLoading }}>{children}</LoadingContext.Provider>
}

// Create a custom hook to use the loading context
export const useLoading = () => useContext(LoadingContext)
