import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const GradientButton = ({ text = null, link = null }) => {
	return (
		<div>
			<div className='grd-btn'>
				<Link to={link ? link : '/pricing'}>{text ? text : 'TRY IT NOW'}</Link>
			</div>
		</div>
	)
}

export default GradientButton
