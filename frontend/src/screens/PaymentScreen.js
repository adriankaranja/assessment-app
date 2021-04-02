import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import PaymentSection from '../components/PaymentSection'
import Footer from '../components/Footer'
import BurgerNav from '../components/BurgerNav'

const PaymentScreen = () => {
	const [navColor, setNavColor] = useState('')
	const [navBackground, setNavBackground] = useState('black')
	useEffect(() => {}, [navColor, navBackground])
	return (
		<motion.div
			initial={{ opacity: 0, x: 0, scale: 0.8 }}
			animate={{ opacity: 1, x: 0, scale: 1 }}
			exit={{ opacity: 0, x: '-100vw', scale: 1.2 }}
			transition={{ type: 'tween', ease: 'anticipate', duration: 1 }}
			className='screen'
		>
			<BurgerNav
				textcolor={navColor}
				background={navBackground}
				screen='payment'
			/>
			<PaymentSection
				onMouseOver={() => {
					setNavColor('#D34848')
					setNavBackground('black')
				}}
			/>
			<Footer />
		</motion.div>
	)
}

export default PaymentScreen
