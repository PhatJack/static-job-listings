import React from 'react'
import Tag from '../Tag'
const Index = ({ job, key }) => {
	return (
		<section
			key={key}
			className='bg-white w-full p-8 flex justify-between items-center 
						rounded-[0.5rem] shadow-lg shadow-desatured-dark-cyan/30 relative overflow-hidden'>
			{
				job.featured === true && (
					<span className='absolute w-[4px] h-full bg-desatured-dark-cyan left-0'></span>
				)
			}
			<div className="w-full flex gap-5 relative">
				<figure className=''>
					<img src={job.logo} alt="" className='w-full h-full object-cover' />
				</figure>
				<div className="w-full">
					<article className='flex flex-col'>
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
						<ul className='text-very-dark-grayish-cyan/60 flex gap-4'>
							<li>{job.postedAt}</li>
							<li>·</li>
							<li>{job.contract}</li>
							<li>·</li>
							<li>{job.location}</li>
						</ul>
					</article>
				</div>
			</div>
			<ul className='flex gap-3'>
				<Tag text={job.role} />
				<Tag text={job.level} />
				{
					job.languages.map((item, index) => (
						<Tag text={item} />
					))
				}
				{
					job.tools.length > 0 && job.tools.map((item, index) => (
						<Tag text={item} />
					))
				}
			</ul>
		</section>
	)
}

export default Index