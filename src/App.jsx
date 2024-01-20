import React, { useEffect, useState } from 'react'
import './reset.css'
import JobLine from './components/JobLine'
function App() {

	const [jobList, setJobList] = useState([])
	const getData = async () => {
		await fetch('/data.json').then(res => {
			return res.json();
		}).then(data => {
			setJobList(data);
		})
	}

	useEffect(() => {
		getData()
	}, [])

	console.log(jobList)
	return (
		<>
			<div className="w-full h-full bg-background-color">
				<div className="w-full h-full">
					<header className='w-full h-[200px] bg-header bg-cover bg-no-repeat bg-center'>
					</header>
					<main className='w-full max-w-[1440px] m-auto'>
						<div className="p-10 w-full">
							<div className="w-full flex flex-col gap-5">
								{
									jobList.map((job, index) => (
										<JobLine job={job} key={index} />
									))
								}
							</div>
						</div>
					</main>
				</div>
			</div>
		</>
	)
}

export default App
