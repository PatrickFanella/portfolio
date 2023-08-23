import {
    BiChalkboard,
    BiCodeAlt,
    BiLogoGithub,
    BiLogoGmail,
    BiLogoReact,
} from 'react-icons/bi';

import { Projects } from '.';

type Props = {};

export default function Homepage({}: Props) {
    return (
        <div className='min-h-screen flex flex-col justify-evenly'>
            <div>
                <img
                    src='https://i.imgur.com/EGv05nZ.jpg'
                    alt="Patrick's Portrait"
                    className='rounded-full m-4 border-8 border-[#ff79c6] h-48 w-48 mx-auto'
                />
                <h1 className='text-[#50fa7b] text-4xl'>Patrick Fanella</h1>
                <h2 className='text-[#50fa7b] text-2xl'>
                    Full Stack Engineer | Web Developer
                </h2>
            </div>
            <div className='text-[#f8f8f2] flex flex-col justify-center items-center max-w-4xl mx-auto'>
                <h3 className='text-[#bd93f9]'> &gt; About Me</h3>
                <p>
                    A passionate Full Stack and Front End Developer with a knack
                    for crafting captivating user experiences and driving
                    innovation. With a solid foundation in HTML, CSS,
                    JavaScript, and the MERN stack, I have honed my skills in
                    developing web applications that exceed expectations. From
                    designing user-friendly interfaces to implementing robust
                    functionality, I consistently deliver high-quality code. My
                    journey includes contributing to innovative projects at
                    DeliverZero Inc, where I optimized performance, architected
                    scalable backends, and collaborated with cross-functional
                    teams. Through projects listed below, I have demonstrated my
                    expertise in creating seamless and engaging applications.
                    Together we can shape the next generation of web
                    applications and make a lasting impact
                </p>
            </div>
            <div className='text-[#f8f8f2] flex flex-col md:flex-row justify-center items-center md:justify-evenly max-w-4xl mx-auto md:items-start my-4'>
                <div className='mx-4'>
                    <h3 className='text-[#bd93f9]'> &gt; Skills</h3>

                    <p className='flex justify-center items-center'>
                        <BiCodeAlt className='m-2' />
                        Javascript, Typescript, HTML, CSS
                    </p>
                    <p className='flex justify-center items-center'>
                        <BiLogoReact className='m-2' />
                        React, Redux, Next.js 13, React Router
                    </p>
                    <p className='flex justify-center items-center'>
                        <BiChalkboard className='m-2' />
                        Linux, Git/Github
                    </p>
                </div>
                <div className='mx-4'>
                    <h3 className='text-[#bd93f9]'>&gt; Links</h3>

                    <a
                        href='https://github.com/patrickfanella'
                        target='_blank'
                        rel='noreferrer'
                        className='text-[#f8f8f2] hover:text-[#bd93f9] flex justify-center items-center'
                    >
                        <BiLogoGithub className='m-2' /> Github
                    </a>

                    <a
                        href='mailto:fanella.patrick@gmail.com'
                        target='_blank'
                        rel='noreferrer'
                        className='text-[#f8f8f2] hover:text-[#bd93f9] flex justify-center items-center'
                    >
                        <BiLogoGmail className='m-2' /> Email
                    </a>
                </div>
            </div>
            <div className='m-8 max-w-4xl mx-auto'>
                <Projects />
            </div>
        </div>
    );
}
