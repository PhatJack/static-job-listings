import React from 'react'
import './reset.css'
import Photosnap from '../images/photosnap.svg'
function App() {

	return (
		<>
			<div className="w-full h-full bg-background-color">
				<div className="w-full h-screen">
					<header className='w-full h-[200px] bg-header bg-cover bg-no-repeat bg-center'>
					</header>
					<main className='w-full max-w-[1440px] grid m-auto'>
						<div className="p-10">
							<div className="w-full flex flex-col">
								<section className='bg-white w-full p-10 flex justify-between items-center rounded-[0.25rem] shadow-lg shadow-desatured-dark-cyan/30'>
									<div className="w-full flex gap-5">
										<figure>
											<img src={Photosnap} alt="" className='size-20' />
										</figure>
										<div className="flex flex-col gap-2">
											<article>
												
											</article>
											<h3 className='font-bold text-desatured-dark-cyan text-[1.15rem] mr-2'>Photosnap</h3>
										</div>
									</div>
									<ul className='flex gap-3'>
										<li className='bg-filter-tablets text-desatured-dark-cyan px-2 pb-1 pt-2 font-medium'>
											123
										</li>
										<li className='bg-filter-tablets text-desatured-dark-cyan px-2 pb-1 pt-2 font-medium'>
											123
										</li>
										<li className='bg-filter-tablets text-desatured-dark-cyan px-2 pb-1 pt-2 font-medium'>
											123
										</li>
									</ul>
								</section>
							</div>
						</div>
					</main>
				</div>
			</div>
		</>
	)
}

export default App
