import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import IconRemove from '../../../images/icon-remove.svg'
import { FilterContext } from '../../context/FilterContext'

const Index = ({ item }) => {

	const { removeFilter } = useContext(FilterContext)

	return (
		<motion.li
			initial={{
				x: "50%",
				opacity: 0
			}}
			animate={{
				x: 0,
				opacity: 1,
			}}
			exit={{
				y: "100%",
				opacity: 0
			}}
			transition={{
				duration: 0.2
			}}
			className='h-[30px] text-desatured-dark-cyan font-semibold bg-desatured-dark-cyan/20 rounded-[0.25rem] flex overflow-hidden'>
			<span className='inline-block py-[6px] px-3'>{item}</span>
			<button onClick={() => { removeFilter(item) }} className='bg-desatured-dark-cyan p-2 transition-all hover:bg-black'>
				<img src={IconRemove} alt="" className='w-full h-full' />
			</button>
		</motion.li>
	)
}

export default Index