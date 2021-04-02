import React from 'react'
import GradientButton from './GradientButton'

const FinalSection = ({ onMouseOver }) => {
	return (
		<div className='final' onMouseOver={onMouseOver}>
			<div className='final-black'>
				<div>
					<h1>GET EXP|CON NOW</h1>
					<h2>Purchase and download the app.</h2>
				</div>
				<div className='btn'>
					<GradientButton />
				</div>
			</div>
		</div>
	)
}

export default FinalSection
