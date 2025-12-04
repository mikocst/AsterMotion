import { buttonCopy, buttonVariant } from '@types';
import Button from '@components/Button';

const heroCopy = {
    copy: "Aster.motion is an open-source web component library. Copy, paste, and edit the components or the design system for your own web projects. Designed and coded by Miko.CST."
};

const HeroSection = () => {
  return (
    <div className = "flex flex-col items-start justify-start w-full gap-2">
					<div>
						<h1 className="text-4xl text-primary font-bold">Welcome to AsterMotion</h1>
						<p className = "max-w-[70ch]">{heroCopy.copy}</p>
					</div>
					<div className="flex flex-row gap-2">
						<Button
						buttonCopy= {buttonCopy.BROWSE}
						variant={buttonVariant.Primary}
						/>
						<Button
							buttonCopy= {buttonCopy.ABOUT}
							variant={buttonVariant.Secondary}
						/>
					</div>
            	</div>
  )
}

export default HeroSection