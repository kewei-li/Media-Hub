'use client'

import { useState, useEffect } from 'react'

const CORRECT_PASSWORD = '20160831'
const STORAGE_KEY = 'media-hub-auth'

interface PasswordProtectProps {
  children: React.ReactNode
}

export function PasswordProtect({ children }: PasswordProtectProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'true') {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === CORRECT_PASSWORD) {
      localStorage.setItem(STORAGE_KEY, 'true')
      setIsAuthenticated(true)
      setError(false)
    } else {
      setError(true)
      setPassword('')
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">Password Required</h1>
            <p className="text-neutral-400 text-sm">Enter password to view this site</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError(false)
                }}
                placeholder="Enter password"
                autoFocus
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all ${
                  error ? 'border-red-500' : 'border-white/10'
                }`}
              />
              {error && (
                <p className="text-red-400 text-sm mt-2">Incorrect password</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition-colors"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
