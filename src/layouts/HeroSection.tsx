import { buttonCopy, buttonVariant } from '@types';
import Button from '@components/Button';

const heroCopy = {
    copy: "Aster.motion is an open-source web component library. Copy, paste, and edit the components or the design system for your own web projects. Designed and coded by Miko.CST."
};

const HeroSection = () => {
  return (
    <div className = "flex flex-col items-start justify-start w-full gap-4 sm:gap-2">
					<div>
						<h1 className="text-3xl font-bold sm:text-4xl text-primary">Welcome to AsterMotion</h1>
						<p className = "max-w-[70ch] text-sm sm:text-base">{heroCopy.copy}</p>
					</div>
					<div className="flex flex-col w-full gap-2 sm:w-auto sm:flex-row">
						<Button
						buttonCopy= {buttonCopy.BROWSE}
						variant={buttonVariant.Primary}
						onClick={() => { window.location.href = '/docs/accordion'; }}
						/>
					</div>
            	</div>
  )
}

export default HeroSection