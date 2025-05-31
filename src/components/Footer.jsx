import React from 'react'
import { SiGithub, SiLinkedin } from 'react-icons/si'

function Footer() {
    return (
        <div className='mt-auto'>
            <div className='flex flex-col md:flex-row justify-between text-white pb-20'>
                <div className='px-10 flex gap-10'>
                    <a href='https://www.linkedin.com/in/hadiya-shameer' target='_blank' rel='noopener noreferrer'><SiLinkedin className='h-10 w-10' /></a>
                    <a href='https://github.com/hadiyasameer' target='_blank' rel='noopener noreferrer'><SiGithub className='h-10 w-10' /></a>
                </div>
                {/* <p className="text-l">&copy; 2025. All rights reserved.</p> */}
            </div>
        </div>
    )
}

export default Footer