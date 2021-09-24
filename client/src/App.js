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

  const [order, setOrder] = useState({
    crust: "",
    sauce: "",
    toppings: {
        cheese: [],
        meat: [],
        other: []
    }
  })

  const images = []

    useEffect(() => {
        for (let i = 0; i < 6; i++) {
            images.push(sliceImg)
            images.push(pieImg)
        }
        console.log(images)
    })

  return (
    <div className="App" style={{ maxWidth: "100vw" }}>
      <Background images={images} slice={sliceImg} pie={pieImg} />
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" >
            <Landing />
          </Route>
          <Route exact path="/shop" >
            <Shop order={order} setOrder={setOrder}/>
          </Route>
          <Route exact path="/checkout" >
            <Checkout order={order} setOrder={setOrder}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
