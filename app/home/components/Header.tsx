import { Button } from "@/components/ui/button"
import UserIcon from "@/components/icons/UserIcon"
import { useAuth } from "@/components/AuthProvider"
const Header = () => {
  const auth = useAuth()

  return (
    <div className="flex w-full h-full items-center justify-end p-4">
      <div className="flex items-center">
        <UserIcon className="mr-2 h-4 w-4" />
        <span className="text-sm mr-2">{auth.user?.email}</span>
        <Button
          onClick={() => {
            auth.setUser(null)
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  )
}

export default Header
