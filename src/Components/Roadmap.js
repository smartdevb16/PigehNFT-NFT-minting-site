import React from 'react'
import constants from '../Constant/Constants'

export default function Roadmap() {

    return (
        <div className='relative w-full h-fit'>
            <img src='./images/BackgroundPath.png' alt='path_img' />
            <div className='absolute top-0 w-full h-full z-10'>
                <div className='flex w-full h-full tracking-wide'>
                    <div className='w-2/5 pt-60 pl-40 space-y-32 text-center'>
                        <p className='font-bold text-xl w-20rem'>
                            { constants.roadmap[1] }
                        </p>
                        <p className='font-bold text-xl w-20rem'>
                            { constants.roadmap[3] }
                        </p>
                    </div>
                    <div className='relative w-3/5 text-center'>
                        <p className='roadmap-item-0 font-bold text-xl w-72'>
                            { constants.roadmap[0] }
                        </p>
                        <p className='roadmap-item-2 font-bold text-xl w-20rem'>
                            { constants.roadmap[2] }
                        </p>
                        <p className='roadmap-item-4 font-bold text-xl w-20rem'>
                            { constants.roadmap[4] }
                        </p>
                    </div>
                </div>
                <div className='absolute w-full bottom-0 uppercase py-32 flex justify-between pl-44 pr-20'>
                    <div className='font-bold text-2xl w-fit flex flex-col place-items-center'>
                        <h1>corey</h1>
                        <h1>lead marketing</h1>
                        <h1>+</h1>
                        <h1>developer</h1>
                        <h1>
                            <span className='text-blue-600 text-4xl cursor-pointer'>
                                <i className='fab fa-twitter'></i>
                            </span>
                            @elgater
                        </h1>
                    </div>
                    <div className='font-bold text-2xl w-fit flex flex-col place-items-center'>
                        <h1>mack</h1>
                        <h1>artist</h1>
                        <h1>+</h1>
                        <h1>lead oinker</h1>
                        <h1>
                            <span className='text-blue-600 text-4xl cursor-pointer'>
                                <i className='fab fa-twitter'></i>
                            </span>
                            @cheezeymack
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}