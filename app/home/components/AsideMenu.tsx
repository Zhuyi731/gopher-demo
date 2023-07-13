const liCls =
  "w-full h-10 leading-10 border border-b-1 text-center cursor-pointer hover:bg-blue-100"

interface AsideMenuProps {
  onChange: (menu: string) => void
}

const menuList = [
  {
    name: "Agent",
    key: "agent",
  },
  {
    name: "Setting",
    key: "setting",
  },
]

const AsideMenu = ({ onChange, ...restProps }: AsideMenuProps) => {
  return (
    <div {...restProps} className=" bg-white aside-menu w-48  h-full max-h-96 rounded-md overflow-hidden">
      <h2 className="h-10 text-center leading-10 mb-4 font-bold">Gopher AI</h2>
      <ul className="flex flex-col items-center justify-center">
        {menuList.map((el) => {
          return (
            <li key={el.key} className={liCls} onClick={() => onChange(el.key)}>
              {el.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AsideMenu
