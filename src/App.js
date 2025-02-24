import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProductContext from '../src/components/contexts/ProductContext';
import CartContext from '../src/components/contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App () {
	const [
		products
	] = useState(data);
	const [
		cart,
		setCart
	] = useState([]);

	const addItem = (item) => {
		setCart([
			...cart,
			item
		]);
	};

	//Blakes way:
	// const removeItem = (id) => setCart(cart.filter((item) => item.id !== id));

	const removeItem = (id) => {
		let filtered = setCart(cart.filter((item) => item.id !== id));
	};

	return (
		<ProductContext.Provider value={{ products, addItem }}>
			{/* <CartContext.Provider
				value={[
					...cart
				]}
			> */}
			<CartContext.Provider value={{ cart, removeItem }}>
				{/* <CartContext.Provider value={{ cart, removeItem }}> */}
				<div className="App">
					<Navigation />
					{/* Routes */}
					{/* <Route exact path="/" render={() => <Products />} /> */}
					<Route exact path="/" component={Products} />
					<Route path="/cart" component={ShoppingCart} />
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
