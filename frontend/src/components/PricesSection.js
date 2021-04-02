import React from 'react'
import GradientButton from './GradientButton'

const PricesSection = ({ onMouseOver }) => {
	return (
		<div className='prices' onMouseOver={onMouseOver}>
			<div className='black'>
				<div>
					<h1>PRICING</h1>
					<p>
						Test out our app today! Choose from three subscription Based payment
						models.
					</p>
					<div className='details'>
						<div className='sm-box'>
							<h2 style={{ color: '#d34848' }}>BASIC</h2>
							<span style={{ backgroundColor: '#d34848' }}></span>
							<h2 style={{ color: '#d34848' }}>MONTHLY</h2>
							<h3 style={{ color: '#d34848' }}>$9</h3>
							<ul>
								<li>Very very good</li>
								<li>Even more </li>
								<li>Perfect job </li>
								<li>Love this more </li>
								<li>It’s so so good</li>
								<li> More Features</li>
							</ul>
							<div>
								<GradientButton text='SELECT' link='/payment' />
							</div>
						</div>

						<div className='sm-box'>
							<h2 style={{ color: '#FFB33F' }}>ADVANCED</h2>

							<span style={{ backgroundColor: '#FFB33F' }}></span>
							<h2 style={{ color: '#FFB33F' }}>YEARLY</h2>
							<h3 style={{ color: '#FFB33F' }}>$99</h3>
							<ul>
								<li>Very very good</li>
								<li>Even more </li>
								<li>Perfect job </li>
								<li>Love this more </li>
								<li>It’s so so good</li>
								<li> More Features</li>
							</ul>
							<div>
								<GradientButton text='SELECT' link='/payment' />
							</div>
						</div>
						<div className='sm-box'>
							<h2 style={{ color: '#1FE1E9' }}>PRO</h2>

							<span style={{ backgroundColor: '#1FE1E9' }}></span>
							<h2 style={{ color: '#1FE1E9' }}>YEARLY</h2>
							<h3 style={{ color: '#1FE1E9' }}>$120</h3>
							<ul>
								<li>Very very good</li>
								<li>Even more </li>
								<li>Perfect job </li>
								<li>Love this more </li>
								<li>It’s so so good</li>
								<li> More Features</li>
							</ul>
							<div>
								<GradientButton text='SELECT' link='/payment' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PricesSection
