"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import SpinnerIcon from "@/components/icons/SpinnerIcon"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/AuthProvider"

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoginForm({ className, ...props }: LoginFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const router = useRouter()
  const auth = useAuth()

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)
    const result = await fetch("/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: "admin@admin.com", password: "admin" }),
    })

    setIsLoading(false)

    if (result.status === 200) {
      const user = await result.json()
      auth.setUser(user)
      router.push("/home")
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1 my-2">
            <Label className="sr-only" htmlFor="email">
              Password
            </Label>
            <Input
              id="email"
              placeholder="your password"
              type="password"
              autoCapitalize="none"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && <SpinnerIcon className="mr-2 h-4 w-4 animate-spin" />}
            Sign In with Email
          </Button>
        </div>
      </form>
    </div>
  )
}
