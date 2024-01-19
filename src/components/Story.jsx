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
		<div className="m-auto max-w-[1200px]">
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
										width: '280px',
										height: '500px',
										boxShadow: 'none',
										border: '2px solid #aec6cf',
										padding: '0',
										fontSize: '2rem',
								  }
								: {
										color: '#fff',
										width: '375px',
										height: '500px',
										boxShadow: 'none',
										border: '2px solid #aec6cf',
										padding: '0',
										fontSize: '2rem',
								  }
						}
						contentArrowStyle={{ borderRight: '7px solid  #aec6cf' }}
						iconStyle={{
							background: '#aec6cf',
							color: '#fff',
							border: 'none',
						}}
						style={{ margin: '40px 0 0 0' }}
						icon={<GiOppositeHearts className="scale-125 opacity-80" />}
					>
						<StoryCard
							url="https://images.unsplash.com/photo-1556800467-7b7ba9da0bf8?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							title="Where We Met"
							date="May 26, 2021"
							text="Sometimes online dating works! At the time we started talking, we were in two different states. Joel was
							in Louisiana for the summer, and Amanda was preparing for a mission trip to Puerto Rico."
						/>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						contentStyle={
							width < breakpoint
								? {
										color: '#fff',
										width: '275px',
										height: '500px',
										boxShadow: 'none',
										border: '2px solid #aec6cf',
										padding: '0',
								  }
								: {
										color: '#fff',
										width: '375px',
										height: '525px',
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
						}}
						// style={{ margin: '0' }}
						icon={<GiOppositeHearts className="scale-125 opacity-80" />}
						className="mt-10 xl:mt-0"
					>
						<StoryCard
							url="https://plus.unsplash.com/premium_photo-1661897744682-39f3fc0f204b?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							title="Our First Date"
							date="June 19, 2021"
							text="After a month of phone conversations, texting, and waiting for each other to be in the same place, we
							finally got to meet in person. Our first date began at an arcade, followed by yummy barbeque and
							braving the Texas heat playing mini golf."
						/>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						contentStyle={
							width < breakpoint
								? {
										color: '#fff',
										width: '275px',
										height: '500px',
										boxShadow: 'none',
										border: '2px solid #aec6cf',
										padding: '0',
								  }
								: {
										color: '#fff',
										width: '375px',
										height: '550px',
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
						}}
						// style={{ margin: '0' }}
						icon={<GiOppositeHearts className="scale-125 opacity-80" />}
						className="mt-10 xl:mt-0"
					>
						<StoryCard
							url="https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_80,w_1200/v1/crm/neworleans/Jackson_Square_New_Orleans0-d5bedffa5056b36_d5bee3f8-5056-b365-ab1ff9665d41e638.jpg"
							title="Our Proposal"
							date="July 30, 2023"
							text="While visiting family in New Orleans, we went to the French Quarter. After walking around the quarter,
							we decided to take a break. While sitting on a park bench beneath a beautiful weeping willow, Joel
							popped the question. It was a perfect day involving beignets and a marriage proposal!"
						/>
					</VerticalTimelineElement>
				</VerticalTimeline>
			</div>
		</div>
	);
};
export default Story;
