import React, { useEffect, useState } from 'react'
import GradientButton from './GradientButton'

const RedSection = ({ onMouseOver }) => {
	let ctx = new AudioContext()
	let music, song

	const [stop, setStop] = useState(false)
	fetch('./sounds/bensound.mp3')
		.then((data) => data.arrayBuffer())
		.then((arrayBuffer) => ctx.decodeAudioData(arrayBuffer))
		.then((decodedAudio) => {
			music = decodedAudio
		})
	// console.log(songStart)
	useEffect(() => {}, [stop])

	const playback = () => {
		if (stop) {
			ctx.close().then(() => {
				setStop(false)
			})
		} else {
			song = ctx.createBufferSource()
			console.log(ctx.state)
			song.buffer = music
			song.connect(ctx.destination)
			song.start(ctx.currentTime)
		}

		setStop(!setStop)
	}

	return (
		<div className='screen speaker' onMouseOver={onMouseOver}>
			<div className='btn'>
				<GradientButton />
			</div>
			<div className='red'>
				<div className=''>
					<h1>SUPERIOR SOUND</h1>
					<p>Experience live versions of your favourite songs.</p>
					<div>
						<GradientButton text='SEE DEMO' />
					</div>
				</div>
				<img className='spkr-one' src='./images/img10.png' alt='' />
				<img className='spkr-two' src='./images/img11.png' alt='' />
			</div>
			<div>
				<button className='sound-btn' onClick={playback}>
					Click Me
				</button>
			</div>
		</div>
	)
}

export default RedSection
