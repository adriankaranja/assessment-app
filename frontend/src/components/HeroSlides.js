import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import GradientButton from './GradientButton'

const HeroSlides = () => {
	const [count, setCount] = useState(0)
	const images = ['./images/img6.png', './images/img7.png', './images/img8.png']
	useEffect(() => {}, [count])

	setTimeout(() => {
		next()
	}, 10000)

	const next = () => {
		let prevCount = count
		if (prevCount === 2) prevCount = 0
		else prevCount++

		setCount(prevCount)
	}
	const previous = () => {
		let prevCount = count
		if (prevCount === 0) prevCount = 2
		else prevCount--

		setCount(prevCount)
	}
	const item = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	}
	return (
		<div className='slides'>
			<motion.button
				onClick={previous}
				variants={item}
				whileHover={{ scale: 1.3 }}
				transition={{ ease: 'easeIn', duration: 0.1 }}
				className='prev'
			>
				<i class='fas fa-angle-left'></i>
			</motion.button>

			{/* <div className='sliders'>
				
				
			</div> */}

			<img src={images[count]} alt='' />
			<div className='intro'>
				<h1>INTERACTIVE CONCERT EXPERIENCE</h1>
				<p>
					Experience your favourite artists like never before and from the
					comofrt of your own home.
				</p>
				<GradientButton />
			</div>
			<motion.button
				onClick={next}
				variants={item}
				whileHover={{ color: 'dodgerBlue' }}
				transition={{ ease: 'easeIn', duration: 0.1 }}
				className='next'
			>
				<i class='fas fa-angle-right'></i>
			</motion.button>
		</div>
	)
}

export default HeroSlides
