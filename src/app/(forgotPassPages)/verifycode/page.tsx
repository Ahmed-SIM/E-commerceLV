'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function VerifyCodePage() {
  const [code, setCode] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const router = useRouter()

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resetCode: code }),
      })

      const data = await res.json()
      console.log(" Verify Code Response:", data)

      if (res.ok) {
        setMessage(" Code Verified Successfully")
        setTimeout(() => router.push("/resetPasswordPage"), 1500) 
        setMessage(data.message || " Invalid code.")
      }
    } catch (err) {
      setMessage(" Network error.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleVerify}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-green-600 text-center mb-6">
          Enter your reset code
        </h1>

        <input
          type="text"
          placeholder="Reset Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition disabled:bg-gray-400"
        >
          {loading ? "Verifying..." : "Verify Code"}
        </button>

        {message && (
          <p className="mt-4 text-center text-sm text-gray-600">{message}</p>
        )}
      </form>
    </div>
  )
}
