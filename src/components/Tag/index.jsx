import React, { useContext } from 'react'
import { FilterContext } from '../../context/FilterContext'

const Index = ({ text }) => {

	const { handleFilter, filterList } = useContext(FilterContext)
	return (
		<li key={0} className='w-fit '>
			<button 
				onClick={() => handleFilter(text)} 
				className={`rounded-sm px-2 
							pb-1 pt-2 font-medium transition-all hover:bg-desatured-dark-cyan hover:text-white
							${filterList.includes(text) ? "bg-desatured-dark-cyan text-white" : "bg-filter-tablets text-desatured-dark-cyan"}`}>
				{text}
			</button>
		</li>
	)
}

export default Index