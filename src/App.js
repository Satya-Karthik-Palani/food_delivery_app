import React, { useState } from 'react'
import Home from './components/Home/Home'
import useFetch from './Hooks/useFetch';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CheckoutPage from './components/CheckoutPage/CheckoutPage'
import ViewCart from './components/ViewCart/ViewCart'
import TransactionPage from './components/TransactionPage/TransactionPage'
import Search from './components/Search/Search'
function App() {
  //data fetching
  const { isPending, data, error } = useFetch('http://localhost:2022/food_items')
  let food_item_data = []

  if (data) {
    food_item_data = data.slice(0, 10)
  }
  //cart
  const [cartItems, setcartItems] = useState([])
  const onAdd = (e, item) => {
    e.preventDefault();
    const exist = cartItems.find(x => x._id === item._id);
    if (exist) { 
      setcartItems(cartItems.map(x => x._id === item._id ? { ...exist, qty: exist.qty + 1 } : x));
    }
    else{
      setcartItems([...cartItems,{...item,qty:1}]);
    }
  }
  const onRemove = (item) => {
    const exist = cartItems.find(x => x._id === item._id);
    if(exist.qty===1){ 
      setcartItems(cartItems.filter((x)=>x._id!==item._id));
    }
    else{
      setcartItems(cartItems.map(x => x._id === item._id ? { ...exist, qty: exist.qty - 1 } : x));
    }
  }
  const [BuyDetails, setBuyDetails] = useState([])
  const onBuyCheckoutHandler = (obj) => {
    setBuyDetails(obj)
  }
  const countCartItems =cartItems.length;
  const onEmptyCart=()=>{
    setcartItems([])
  }
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/search/tiffins/' element={!isPending && <Home countCartItems={countCartItems} onAdd={onAdd} data={data.filter(x => x.category === "tiffins")} isPending={isPending} error={error} />}></Route>
          <Route exact path='/search/veg-meals/' element={!isPending && <Home countCartItems={countCartItems} onAdd={onAdd} data={data.filter(x => x.category === "veg meals")} isPending={isPending} error={error} />}></Route>
          <Route exact path='/search/non-veg-meals/' element={!isPending && <Home countCartItems={countCartItems} onAdd={onAdd}   data={data.filter(x => x.category === "non-veg meals")} isPending={isPending} error={error} />}></Route>
          <Route exact path='/' element={<Home countCartItems={countCartItems} onAdd={onAdd} data={food_item_data} isPending={isPending} error={error} />}></Route>
          <Route exact path='/viewcart' element={<ViewCart onEmptyCart={onEmptyCart} onRemove={onRemove} onAdd={onAdd} cartItems={cartItems} />}></Route>
          <Route exact path='/checkoutpage' element={<CheckoutPage onBuyCheckout={onBuyCheckoutHandler} />}></Route>
          <Route exact path='/transaction' element={<TransactionPage data={BuyDetails}/>}></Route>
          <Route exact path='/search' element={<Search countCartItems={countCartItems} onAdd={onAdd} data={data}/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App