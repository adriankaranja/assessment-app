import React, { useEffect, useState } from 'react'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'

const BurgerNav = (props) => {
	const [toggleOpen, setToggleOpen] = useState(false)
	// let [links, setLinks] = useState([])

	useEffect(() => {}, [toggleOpen, props.textcolor, props.background])

	return (
		<nav className={toggleOpen && 'circle'}>
			<div>
				<i
					onClick={() => {
						setToggleOpen(!toggleOpen)
					}}
					style={{
						color: toggleOpen ? props.textcolor : props.screen ? 'black' : '',
					}}
					className='fas fa-bars'
				></i>
				<p
					style={{
						color: toggleOpen ? props.textcolor : props.screen ? 'black' : '',
					}}
				>
					EXP|CON
				</p>
			</div>
			<div
				className={toggleOpen ? 'visible content' : 'hidden content'}
				style={{ backgroundColor: toggleOpen && props.background }}
			>
				<Fade delay={900} duration={2000} left spy={toggleOpen}>
					<ul>
						<Fade delay={400} duration={500} left spy={toggleOpen}>
							<li>
								<Link to='/' style={{ color: props.textcolor }}>
									WHAT IS IT
								</Link>
							</li>
						</Fade>
						<Fade delay={800} duration={500} left spy={toggleOpen}>
							<li>
								<Link to='#perks'>PERKS</Link>
							</li>
						</Fade>
						<Fade delay={1200} duration={500} left spy={toggleOpen}>
							<li>
								<Link to='/pricing'>PRICING</Link>
							</li>
						</Fade>
					</ul>
				</Fade>
			</div>
		</nav>
	)
}

export default BurgerNav
