import {interpolate, useCurrentFrame} from 'remotion';

export function Subtitle({ subtitleText, frontColor }) {
	const frame = useCurrentFrame()
	const opacity = interpolate(frame, [0, 30], [0, 1])
	return (
		<div
			style={{
				color: frontColor,
				fontFamily: 'Helvetica, Arial',
				fontSize: 70,
				textAlign: 'center',
				position: 'absolute',
				bottom: 140,
				width: '100%',
				opacity,
			}}
		>
			{subtitleText}
		</div>
	)
}
