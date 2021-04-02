import React from 'react'
import GradientButton from './GradientButton'

const PaymentSection = ({ onMouseOver }) => {
	return (
		<div onMouseOver={onMouseOver}>
			<div className='payment'>
				<h1>PAYMENT</h1>
				<div className='select-payment'>
					<p>1. SELECT YOUR PLAN</p>
					<ul>
						<li style={{ color: '#D24848' }}>
							<input type='radio' />
							BASIC
						</li>
						<li style={{ color: '#FFB33F' }}>
							<input type='radio' />
							ADVANCED
						</li>
						<li style={{ color: '#1FE1E9' }}>
							<input type='radio' />
							PRO
						</li>
					</ul>
				</div>
				<div className='info'>
					<div className='billing'>
						<p>2. Billing Information</p>
						<form>
							<div className='row'>
								<label>FULL NAME</label>
								<input type='text' />
							</div>
							<div className='row'>
								<label>BILLING ADDRESS</label>
								<input type='text' />
							</div>

							<div className='bg-row'>
								<div className='row'>
									<label>CITY</label>
									<input type='text' className='sm-input' />
								</div>
								<div className='row'>
									<label>POSTAL CODE</label>
									<input type='text' className='sm-input' />
								</div>
							</div>
							<div className='row'>
								<label>COUNTRY</label>
								<input type='text' />
							</div>
						</form>
					</div>
					<div className='credit-card'>
						<p>3. Credit Card Information</p>
						<form>
							<div className='row'>
								<label>CARDHOLDER'S NAME</label>
								<input type='text' />
							</div>
							<div className='row'>
								<label>CARD NUMBER</label>
								<input type='text' />
							</div>
							<div className='bg-row'>
								<div className='row'>
									<label>EXPIRY MONTH</label>
									<input type='text' className='sm-input' />
								</div>
								<div className='row'>
									<label>EXPIRY YEAR</label>
									<input type='text' className='sm-input' />
								</div>
							</div>
							<div className='row'>
								<label>CVV</label>
								<input type='text' />
							</div>
						</form>
					</div>
				</div>
				<div className='terms'>
					<p>
						By continuing, I acknowledge that I’ve read and agree to the{' '}
						<span>Terms of Service</span> & <span>Privacy Policy.</span>
					</p>
					<div>
						<GradientButton text='DOWNLOAD' link='/payment' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default PaymentSection
