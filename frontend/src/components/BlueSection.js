import React from 'react'
import GradientButton from './GradientButton'

const BlueSection = ({ onMouseOver }) => {
	return (
		<div onMouseOver={onMouseOver}>
			<div className='btn'>
				<GradientButton />
			</div>
			<div className='blue'>
				<div className='spkrs'>
					<img src='./images/img13.png' alt='' />
					<img src='./images/img12.png' alt='' />
				</div>
				<div className='reviews'>
					<h1>REVIEWS</h1>
					<div className='details'>
						<div className='sm-box'>
							<div>
								<i class='fas fa-star'></i>
								<i class='fas fa-star'></i>
								<i class='fas fa-star'></i>
								<i class='fas fa-star'></i>
								<i class='fas fa-star'></i>
							</div>
							<h2>ARTIST</h2>
							<p>“Love it, it’s the Best.I can’t live without it!”</p>
						</div>
						<div className='sm-box'>
							<div>
								<i class='fas fa-star'></i>
								<i class='fas fa-star'></i>
								<i class='fas fa-star'></i>
								<i class='fas fa-star'></i>
								<i class='fas fa-star'></i>
							</div>
							<h2>PRODUCER</h2>
							<p>“Love it, it’s the Best.I can’t live without it!”</p>
						</div>
						<div className='sm-box'>
							<div>
								<i class='fas fa-star'></i>
								<i class='fas fa-star'></i>
								<i class='fas fa-star'></i>
								<i class='fas fa-star'></i>
								<i class='fas fa-star'></i>
							</div>
							<h2>MUSIC FAN</h2>
							<p>“Love it, it’s the Best.I can’t live without it!”</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BlueSection
