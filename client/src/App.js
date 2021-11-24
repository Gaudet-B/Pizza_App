import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Background from './components/Background'
import Navigation from './components/Navigation'
import Shop from './views/Shop'
import { useEffect, useState } from 'react'
import pieImg from './components/pizza-pie-vector.png'
import sliceImg from './components/pizza-slice-vector.png'
import Checkout from './views/Checkout'
import Landing from './views/Landing'


function App() {

  // const [order, setOrder] = useState({
  //   crust: "",
  //   sauce: "",
  //   toppings: {
  //       cheese: [],
  //       meat: [],
  //       other: []
  //   }
  // })

  
  const getSessionOrDefault = (key, defaultValue) => {
    const stored = sessionStorage.getItem(key)
    if (!stored) return defaultValue
    return JSON.parse(stored)
  }
  const getLocalOrDefault = (key, defaultValue) => {
    const stored = localStorage.getItem(key)
    if (!stored) return defaultValue
    return JSON.parse(stored)
  }
  
  const defaultOrder = {
    crust: "",
    sauce: "",
    toppings: {
      cheese: [],
      meat: [],
      other: []
    }
  }
  
  // const defaultShoppingCart = [defaultOrder]
  
  // const [order, setOrder] = useState(getSessionOrDefault('order', defaultOrder))
  // const [shoppingCart, setShoppingCart] = useState(getLocalOrDefault('shoppingCart', defaultShoppingCart))
  
  const [isEmpty, setIsEmpty] = useState(false)
  const [order, setOrder] = useState({})
  const [shoppingCart, setShoppingCart] = useState([])

  const addToShoppingCart = () => {
    const currentOrder = getSessionOrDefault("order", order)
    console.log(currentOrder)
    const currentCart = getLocalOrDefault("shoppingCart", shoppingCart)
    currentCart.push(currentOrder)
    // setShoppingCart(shoppingCart => [...shoppingCart, sessionStorage.getItem("order")])
    setShoppingCart(currentCart)
    sessionStorage.removeItem("order")
    localStorage.setItem("shoppingCart", JSON.stringify(currentCart))
    // localStorage.setItem("shoppingCart", shoppingCart)
  }

  const images = []

    useEffect(() => {
        for (let i = 0; i < 6; i++) {
            images.push(sliceImg)
            images.push(pieImg)
        }
        let cart = localStorage.getItem("shoppingCart")
        if (!cart || cart.length < 1) {
          setIsEmpty(true)
        }
        // console.log(images)
    }, [])

  return (
    <div className="App" style={{ maxWidth: "100vw", minWidth: "fit-content" }}>
      <Background images={images} slice={sliceImg} pie={pieImg} />
      <div style={{ maxWidth: "360px", margin: "auto" }}>
      <BrowserRouter>
        <Navigation isEmpty={isEmpty} shoppingCart={getLocalOrDefault("shoppingCart", shoppingCart)} setShoppingCart={setShoppingCart}/>
        <Switch>
          <Route exact path="/" >
            <Landing />
          </Route>
          <Route exact path="/shop" >
            <Shop order={order} setOrder={setOrder} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} addToShoppingCart={addToShoppingCart} getSessionOrDefault={getSessionOrDefault} getLocalOrDefault={getLocalOrDefault}/>
          </Route>
          <Route exact path="/checkout" >
            <Checkout order={order} setOrder={setOrder} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} addToShoppingCart={addToShoppingCart} getSessionOrDefault={getSessionOrDefault} getLocalOrDefault={getLocalOrDefault}/>
          </Route>
        </Switch>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
