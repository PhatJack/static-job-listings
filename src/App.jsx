import React, { useContext, useEffect, useState } from 'react'
import './reset.css'
import JobLine from './components/JobLine'
import { motion, AnimatePresence } from 'framer-motion'
import IconRemove from '../images/icon-remove.svg'
import { FilterContext } from './context/FilterContext'
import FilterTag from './components/FilterTag'
function App() {

	const [jobList, setJobList] = useState([])
	const [filterJobList, setFilterJobList] = useState([])
	const { filterList, setFilterList, removeFilter } = useContext(FilterContext)

	const getData = async () => {
		try {
			const response = await fetch('/data.json');
			const data = await response.json();
			setJobList(data);
			setFilterJobList(data)
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	const handleFilterJobList = () => {
		if (filterList.length === 0) {
			getData()
		} else {
			const filteredJob = jobList.filter(job => {
				return filterList.every(condition => {
					return (
						job.role === condition ||
						job.level === condition ||
						job.languages.includes(condition) ||
						job.tools.includes(condition)
					);
				});
			});
			setFilterJobList(filteredJob)
		}
	};

	useEffect(() => {
		getData()
	}, []); // Empty dependency array to run only once on mount


	useEffect(() => {
		handleFilterJobList()
	}, [filterList])

	return (
		<>
			<div className="w-full h-full min-h-screen bg-background-color">
				<div className="w-full h-full relative">
					<header className='w-full h-[200px] bg-header bg-cover bg-no-repeat bg-center'>
					</header>
					<main className='w-full max-w-[1440px] m-auto'>
						<div className="px-10 py-24 md:py-16 w-full relative">
							<AnimatePresence>
								{
									filterList.length != 0 && (
										<motion.div
											initial={{
												y: "100%",
												opacity: 0,
											}}
											animate={{
												y: 0,
												opacity: 1
											}}
											exit={{
												y: "100%",
												opacity: 0,
											}}
											transition={{
												duration: 0.2
											}}
											layout className="w-[calc(100%-80px)] md:h-[80px] bg-white rounded-md absolute -top-[52px] md:-top-10 shadow-lg shadow-desatured-dark-cyan/20">
											<div className="w-full h-full flex justify-between items-center px-8 py-5 md:py-0">
												<ul className='flex flex-wrap gap-2'>
													{
														filterList.map((item, index) => (
															<FilterTag item={item} key={index} />
														))
													}
												</ul>
												<button onClick={() => { setFilterList([]) }} className='text-desatured-dark-cyan font-semibold hover:underline transition-all'>
													Clear
												</button>
											</div>
										</motion.div>
									)
								}
							</AnimatePresence>
							<motion.div layout className="w-full flex flex-col gap-12 md:gap-5">
								<AnimatePresence>
									{
										filterJobList.map((job, index) => (
											<JobLine job={job} key={index} />
										))
									}
								</AnimatePresence>
							</motion.div>
						</div>
					</main>
				</div>
			</div>
		</>
	)
}

export default App
