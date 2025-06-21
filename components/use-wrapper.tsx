"use client"

import { useLoading } from "./loading-context"
import Loader from "./Loader"

export default function LoaderWrapper() {
  const { loading } = useLoading()
  return loading ? <Loader /> : null
}