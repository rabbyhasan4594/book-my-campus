import React from 'react';
import { Link } from 'react-router-dom';

const ResearchPaper = () => {
    
    
    return (
        <div  className='pt-6 shadow-violet-900'>
            <div className=' mt-5 lg:ms-20 p-2 lg:me-20 text-white'>
                <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full '>
                    <div className='pb-4 text-white mt-8 text-center'>
                        <p className='text-4xl font-bold border-b-4 border-white p-2 inline'>Research Papers</p>
                        <p className='py-6'>Click in Name for more details</p>
                    </div>
                </div>

                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    <Link to='https://www.tandfonline.com/doi/abs/10.1080/13583149908047731'><div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500'>
                    <p className='mt-4 ms-[-20px]'>Fluid Biaxial Banana </p>
                    </div></Link>
                    <Link to='https://www.sciencedirect.com/science/article/abs/pii/S0959652618321711'><div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-red-700'>
                    <p className='mt-4 ms-[-20px]'>Hybrid aerogels derived</p>
                    </div></Link>
                    <Link to='https://ieeexplore.ieee.org/document/9408574'><div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-slate-950'>
                    <p className='mt-4 ms-[-20px]'>Smart Agriculture</p>
                    </div></Link>
                    <Link to='https://link.springer.com/chapter/10.1007/978-981-13-3122-0_47'><div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-amber-400'>
                    <p className='mt-4 ms-[-20px]'>Automatic Classification</p>
                    </div></Link>
                    <Link to='https://www.sciencedirect.com/science/article/abs/pii/S0022249615000528'><div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-white'>
                    <p className='mt-4 ms-[-20px]'>Bayes factors</p>
                    </div></Link>
                    <Link to='https://www.sciencedirect.com/science/article/abs/pii/S0022249614000856'><div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-red-500'>
                    <p className='mt-4 ms-[-20px]'>Individual differences</p>
                    </div></Link>
                    
                    

                    
                    

                </div>
            </div>
        </div>

    );
};

export default ResearchPaper;