import React from 'react'

const Index = ({text}) => {
	return (
		<li className='w-full'>
			<button className='bg-filter-tablets text-desatured-dark-cyan rounded-sm px-2 pb-1 pt-2 font-medium transition-all hover:bg-desatured-dark-cyan hover:text-white'>
				{text}
			</button>
		</li>
	)
}

export default Index