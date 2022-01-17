import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {Subtitle} from '../parts/Subtitle';
import {Title} from '../parts/Title';

export function LogoTwoTitle({
		from=0,
		duration=120,
		logo,
		titleText='title text',
		subtitleText='subtitle text',
		frontColor,
		backColor,
		...props
}) {
	return (<>
		<Sequence from={from} durationInFrames={duration}>
			<div style={{flex: '100', backgroundColor: backColor}}>
				{logo}
			</div>
		</Sequence>
		<Sequence from={from+29} durationInFrames={duration-29}>
			<Title titleText={titleText} frontColor={frontColor} />
		</Sequence>
		<Sequence from={from+55} durationInFrames={duration-55}>
			<Subtitle subtitleText={subtitleText} frontColor={frontColor} />
		</Sequence>
	</>)
}
