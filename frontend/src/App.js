import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import HeroScreen from './screens/HeroScreen'
import PaymentScreen from './screens/PaymentScreen'
import PricingScreen from './screens/PricingScreen'

function App() {
	return (
		<Router>
			{/* <Nav /> */}
			<main>
				<Route
					render={({ location }) => (
						<AnimatePresence exitBeforeEnter initial={false}>
							<Switch location={location} key={location.pathname}>
								<Route path='/' exact component={HeroScreen} />
								<Route path='/pricing' exact component={PricingScreen} />
								<Route path='/payment' exact component={PaymentScreen} />
								{/* <Route path='/perks' component={PerksScreen} />
								<Route path='/speakers' component={SpeakerScreen} /> */}
								{/* <Route path='/contact' component={ContactScreen} /> */}
								{/* <Route component={NotFound} /> */}
							</Switch>
						</AnimatePresence>
					)}
				/>
			</main>
		</Router>
	)
}

export default App
