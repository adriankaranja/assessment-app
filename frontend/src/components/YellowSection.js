import React from 'react'
import GradientButton from './GradientButton'

const YellowSection = ({ onMouseOver }) => {
	return (
		<div className='ysection' onMouseOver={onMouseOver}>
			<img src='./images/img9.png' alt='' />
			<div className='btn'>
				<GradientButton />
			</div>
			<div className='yellow'>
				<div className=''>
					<h1>FRONT ROW SEATS</h1>
					<p>Experience concerts up close and personal.</p>
					<div>
						<GradientButton text='SEE DEMO' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default YellowSection
