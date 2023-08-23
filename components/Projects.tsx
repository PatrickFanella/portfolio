import projects from '@/constants/projects';
type Props = {};

export default function Projects({}: Props) {
    return (
        <div>
            <h1 className='text-4xl text-[#bd93f9]'>Projects</h1>
            {projects.map((project, index) => (
                <div
                    key={index}
                    className=' bg-[#6272a4] rounded-lg m-4 flex flex-col justify-start items-center text-start p-4'
                >
                    <h2 className='font-bold text-[#50fa7b] text-4xl'>
                        {project.title}
                    </h2>

                    <div className='flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between'>
                        <p className='text-[#f8f8f2] text-xl p-2'>{project.description}</p>

                        <img
                            src={project.img}
                            alt='PICTURE'
                            className= 'w-48'
                        />
                    </div>
                    <h3 className='text-[#bd93f9]'>tech:</h3>

                    <p>{project.technologies}</p>
                </div>
            ))}
        </div>
    );
}