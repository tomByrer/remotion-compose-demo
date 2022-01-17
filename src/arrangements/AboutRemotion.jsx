import {Lift} from '../actions/Lift';
import {MovieCameraIcon} from '../parts/MovieCameraIcon';
import {ReactLogo} from '../parts/ReactLogo';
import {RemotionLogo} from '../parts/RemotionLogo';
import {LogoTwoTitle} from '../segments/LogoTwoTitle';

export function AboutRemotion() {
	return (<>
		<LogoTwoTitle
			from={0}
			logo={<Lift><ReactLogo /></Lift>}
			titleText='Use ReactJS to build animations...'
			subtitleText='Assemble with web technologies you know & love.'
			frontColor='#e9e4d7'
			backColor='#161b28'
		/>
		<LogoTwoTitle
			from={120}
			titleText='then capture them as a movie... '
			subtitleText='Export a MP4 file or use the &lt;Player&gt;.'
			frontColor='#d7d9df'
			backColor='#21304c'
			logo={<Lift><MovieCameraIcon color='#acb0bd'/></Lift>}
		/>
		<LogoTwoTitle
			from={240}
			logo={<Lift><RemotionLogo scaleOuter={3.3} /></Lift>}
			titleText='with Remotion'
			subtitleText='Create videos programmatically in React!'
			frontColor='#deefed'
			backColor='#2b4673'
		/>
	</>)
}
