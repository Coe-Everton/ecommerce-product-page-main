import Header from "./components/Header"
import ProductBody from "./components/ProductBody"
import Cart from "./components/Cart"
import SideBarMenu from "./components/SideBarMenu"
import { useStore } from "./stores/Store"

export default function App() {
  const { CartOpen, SideBarVisibility } = useStore((state) => state)

  return (
    <main className="lg:mx-32 md:mx-10">
      {SideBarVisibility ? <SideBarMenu/> : null}
      <Header/>
      {CartOpen && <Cart/>}
      <ProductBody/>
    </main>
  )
}

