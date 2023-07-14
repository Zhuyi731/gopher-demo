import { NextRequest, NextResponse } from "next/server"
const users = [{ email: "admin@admin.com", password: "admin" }]

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { email, password } = body

  const matchedUser = users.find(
    (user) => user.email === email && user.password === password
  )

  if (!matchedUser) {
    return NextResponse.json({ message: "Invalid credentials" })
  }

  return NextResponse.json({ email: matchedUser.email })
}
