import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
import kyle from '../public/kyle-headshot.png';
import synesthesia from '../public/synesthesia.png';
import mouseMingle from '../public/mouse-mingle.png';

export default function Home() {
  return (
    <div>
      <main className='bg-white px-10 md:px-20 lg:px-40'>
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>developedbykyle</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
            </ul>
          </nav>

          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Kyle Crawford</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-2xl mx-auto'>Full stack software developer, with a foundation in JavaScript, Typescript, React, and C#/.NET. I enjoy playing and producing music, working with my hands and exploring the great outdoors.</p>
          </div>

          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillLinkedin />
            <AiFillGithub />
          </div>

          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={kyle} alt='kyle headshot' layout='fill' objectFit='cover' />
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              Some projects I've worked on.
            </p>
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
              <div className='basis-1/3 flex-1'>
                <Image src={synesthesia} alt='synesthesia' className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={mouseMingle} alt='mouse mingle' className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}