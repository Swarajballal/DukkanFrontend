
import './App.css'
import OrderPage from './page/OrderPage'
import { ThemeProvider } from "@/components/theme-provider"


function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
       {<OrderPage/>}
      </ThemeProvider>  
    </>
  )
}

export default App
