import React, { useState, useEffect } from 'react'
import HeroSlides from '../components/HeroSlides'
import YellowSection from '../components/YellowSection'
import RedSection from '../components/RedSection'
import PerksSection from '../components/PerksSection'
import BlueSection from '../components/BlueSection'
import BlackSection from '../components/BlackSection'
import BurgerNav from '../components/BurgerNav'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const HeroScreen = () => {
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
			<BurgerNav textcolor={navColor} background={navBackground} />
			<HeroSlides
				onMouseOver={() => {
					setNavColor()
					setNavBackground('black')
				}}
			/>
			<RedSection
				onMouseOver={() => {
					setNavColor('#D34848')
					setNavBackground('black')
				}}
			/>
			<YellowSection
				onMouseOver={() => {
					setNavColor('#FFB33F')
					setNavBackground('black')
				}}
			/>
			<PerksSection
				onMouseOver={() => {
					setNavColor('white')
					setNavBackground('#1FE1E9')
				}}
			/>
			<BlueSection
				onMouseOver={() => {
					setNavColor('#1FE1E9')
					setNavBackground('black')
				}}
			/>
			<BlackSection
				onMouseOver={() => {
					setNavColor('white')
					setNavBackground('#1FE1E9')
				}}
			/>
			<Footer />
		</motion.div>
	)
}

export default HeroScreen
