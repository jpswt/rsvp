import { useEffect, useState } from 'react';
import Banner from './Banner';
import { BsBalloonHeartFill } from 'react-icons/bs';
import { BsBalloonHeart } from 'react-icons/bs';
import { GiOppositeHearts } from 'react-icons/gi';
import StoryCard from './StoryCard';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Story = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const breakpoint = 768;
	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div className="max-w-[1200px] m-auto">
			<Banner title="Our Story" idName="story" />
			<div className="mt-10">
				{/* <BsBalloonHeartFill
					size={60}
					className="text-secondary  text-center w-full"
				/> */}
				<VerticalTimeline lineColor="#aec6cf">
					<VerticalTimelineElement
						contentStyle={
							width < breakpoint
								? {
										color: '#fff',
										width: '300px',
										height: '500px',
										boxShadow: 'none',
										border: '2px solid #aec6cf',
										padding: '0',
								  }
								: {
										color: '#fff',
										width: '375px',
										height: '500px',
										boxShadow: 'none',
										border: '2px solid #aec6cf',
										padding: '0',
								  }
						}
						contentArrowStyle={{ borderRight: '7px solid  #aec6cf' }}
						iconStyle={{
							background: '#aec6cf',
							color: '#fff',
							border: 'none',
							zIndex: 20,
						}}
						style={{ margin: '40px 0 0 0' }}
						icon={<GiOppositeHearts className="scale-125 opacity-80" />}
					>
						<StoryCard
							url="https://plus.unsplash.com/premium_photo-1661897744682-39f3fc0f204b?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							title="Where We Met"
							date="January 1, 2000"
							text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some,"
						/>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						contentStyle={
							width < breakpoint
								? {
										color: '#fff',
										width: '300px',
										height: '500px',
										boxShadow: 'none',
										border: '2px solid #aec6cf',
										padding: '0',
								  }
								: {
										color: '#fff',
										width: '375px',
										height: '500px',
										boxShadow: 'none',
										border: '2px solid #aec6cf',
										padding: '0',
								  }
						}
						contentArrowStyle={{ borderRight: '7px solid  #aec6cf' }}
						iconStyle={{
							background: '#aec6cf',
							color: '#fff',
							border: 'none',
							zIndex: 20,
						}}
						// style={{ margin: '0' }}
						icon={<GiOppositeHearts className="scale-125 opacity-80" />}
						className="mt-10 xl:mt-0"
					>
						<StoryCard
							url="https://images.unsplash.com/photo-1509927083803-4bd519298ac4?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							title="Our First Date"
							date="January 1, 2000"
							text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some,"
						/>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						contentStyle={
							width < breakpoint
								? {
										color: '#fff',
										width: '300px',
										height: '500px',
										boxShadow: 'none',
										border: '2px solid #aec6cf',
										padding: '0',
								  }
								: {
										color: '#fff',
										width: '375px',
										height: '500px',
										boxShadow: 'none',
										border: '2px solid #aec6cf',
										padding: '0',
								  }
						}
						contentArrowStyle={{ borderRight: '7px solid  #aec6cf' }}
						iconStyle={{
							background: '#aec6cf',
							color: '#fff',
							border: 'none',
							zIndex: 20,
						}}
						// style={{ margin: '0' }}
						icon={<GiOppositeHearts className="scale-125 opacity-80" />}
						className="mt-10 xl:mt-0"
					>
						<StoryCard
							url="https://images.unsplash.com/photo-1509927083803-4bd519298ac4?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							title="Our Proposal"
							date="January 1, 2000"
							text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some,"
						/>
					</VerticalTimelineElement>
				</VerticalTimeline>
			</div>
		</div>
	);
};
export default Story;
