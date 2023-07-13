import type { NextApiRequest, NextApiResponse } from "next"

const users = [{ email: "admin@admin.com", password: "admin" }]

const LoginController = (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body

  const matchedUser = users.find(
    (user) => user.email === email && user.password === password
  )

  if (!matchedUser) {
    return res.status(401).json({ message: "Invalid credentials" })
  }

  res.status(200).json({ email: matchedUser.email })
}

export default LoginController
