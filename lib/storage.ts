export const getUser = () => {
  localStorage.getItem("user")
}

export const setUser = (email: string) => {
  localStorage.setItem("user", email)
}
