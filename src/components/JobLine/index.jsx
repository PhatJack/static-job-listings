import React from 'react'
import Tag from '../Tag'
import { motion } from 'framer-motion'
const Index = ({ job }) => {
	return (
		<motion.section
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			exit={{
				opacity: 0,
				y: "-100%"
			}}
			key={job.id}
			className='bg-white w-full p-8 flex lg:flex-row flex-col justify-between items-center lg:gap-0 gap-5 rounded-[0.5rem] shadow-lg shadow-desatured-dark-cyan/30 relative md:overflow-hidden'>
			{
				job.featured === true && (
					<span className='absolute w-[4px] h-full bg-desatured-dark-cyan left-0 top-0'></span>
				)
			}
			<div className="w-full flex items-center gap-5 relative lg:border-b-0 border-b-2 lg:pb-0 pb-4">
				<figure className='size-16 md:size-[90px] md:static absolute -top-16'>
					<img loading='lazy' src={job.logo} alt="" className='w-full h-full object-contain' />
				</figure>
				<div className="w-full">
					<article className='flex flex-col md:gap-0 gap-1'>
						<div className="flex items-center">
							<h3 className='font-bold text-desatured-dark-cyan text-[1.05rem] mr-3'>{job.company}</h3>
							{
								job.new === true && (
									<h3 className='h-[22px] bg-desatured-dark-cyan uppercase text-sm text-white font-medium pt-[3px] px-2 rounded-full mr-2'>new!</h3>
								)
							}
							{
								job.featured === true && (
									<h3 className='h-[22px] bg-very-dark-grayish-cyan uppercase text-sm text-white font-medium pt-[3px] px-2 rounded-full'>featured</h3>
								)
							}
						</div>
						<h1 className='font-bold text-xl transition-all hover:text-desatured-dark-cyan cursor-pointer'>{job.position}</h1>
						<ul className='text-very-dark-grayish-cyan/60 flex gap-4 mt-1'>
							<li>{job.postedAt}</li>
							<li>·</li>
							<li>{job.contract}</li>
							<li>·</li>
							<li>{job.location}</li>
						</ul>
					</article>
				</div>
			</div>
			<ul className='w-full flex md:flex-nowrap flex-wrap gap-3 lg:place-content-end'>
				<Tag text={job.role} />
				<Tag text={job.level} />
				{
					job.languages.map((item, index) => (
						<Tag text={item} key={index} />
					))
				}
				{
					job.tools.length > 0 && job.tools.map((item, index) => (
						<Tag text={item} key={index} />
					))
				}
			</ul>
		</motion.section>
	)
}

export default Index