import React from 'react'
import GradientButton from './GradientButton'

const PerksSection = ({ onMouseOver, textcolor = null }) => {
	return (
		<div id='perks' className='perks' onMouseOver={onMouseOver}>
			{!textcolor && (
				<div className='btn'>
					<GradientButton />
				</div>
			)}
			<div
				className='black'
				style={{ backgroundColor: textcolor && '#d34848' }}
			>
				<div>
					<h1>PERKS</h1>
					<div className='details'>
						<div className='sm-box'>
							<span
								style={{ backgroundColor: textcolor ? textcolor : '#d34848' }}
							></span>
							<h2 style={{ color: textcolor ? textcolor : '#d34848' }}>
								SUBSCRIPTION PAYMENT MODEL
							</h2>
							<p style={{ color: textcolor && 'black' }}>
								No commitment, cancel anytime. Never worry about forgetting a
								payment again!
							</p>
						</div>
						<div className='sm-box'>
							<span
								style={{ backgroundColor: textcolor ? textcolor : '#1FE1E9' }}
							></span>
							<h2 style={{ color: textcolor ? textcolor : '#1FE1E9' }}>
								NO FEE CANCELLATION POLICY
							</h2>
							<p style={{ color: textcolor && 'black' }}>
								No commitment, cancel anytime. Never worry about forgetting a
								payment again!
							</p>
						</div>
						<div className='sm-box'>
							<span
								style={{ backgroundColor: textcolor ? textcolor : '#FFB33F' }}
							></span>
							<h2 style={{ color: textcolor ? textcolor : '#FFB33F' }}>
								SUBSCRIPTION PAYMENT MODEL
							</h2>
							<p style={{ color: textcolor && 'black' }}>
								No commitment, cancel anytime. Never worry about forgetting a
								payment again!
							</p>
						</div>
					</div>
				</div>
				<div className='sm-circle'></div>
			</div>
		</div>
	)
}

export default PerksSection
