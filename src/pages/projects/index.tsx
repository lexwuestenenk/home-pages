import { CursorFollow } from '@/components/sfx/cursor-follow';
import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Head from 'next/head';

export default function Projects() {
    return (
        <>
            <Head>
                <title>Lex Wuestenenk • Projects</title>
            </Head>
            <div className='bg-background h-screen flex flex-col justify-center select-none'>
                <CursorFollow />
                <div className='flex flex-row justify-between p-3 h-[6vh] my-5 md:my-0 border-primary sticky top-0 left-0'>
                    <Button asChild className='bg-transparent text-primary border-4 border-transparent hover:border-background hover:text-background hover:bg-transparent duration-300 ease-in'>
                        <Link href="/">
                            <Icons.ChevronLeft />
                        </Link>
                    </Button>
                    <div className='flex flex-row'>
                        <h1 className='md:text-transparent text-center text-text align-right flex items-center text-3xl'>My</h1>
                        <h1 className='md:text-transparent text-center text-primary align-right flex items-center text-3xl pr-3'>&nbsp;Projects</h1>
                    </div>
                </div>
                <div className='flex grow md:flex-row flex-col justify-between z-10 container h-[82vh]'>
                    <div className='text-5xl hidden md:block my-auto sticky text-center text-start pb-3'>
                        <h1 className='md:text-text'>My</h1>
                        <h1 className='md:text-primary'>Projects</h1>
                    </div>
                    <div className='md:w-2/4 flex flex-col gap-3 overflow-auto px-5'>
                        <Link href="https://lexwuestenenk.nl/">
                            <div className='p-3 border-primary border-2 rounded-lg mb-3 hover:bg-primary ease-in duration-300'>
                                <div className='flex flex-row justify-between items-center'>
                                    <h2 className='text-2xl text-text'>Portfolio</h2>
                                    <Icons.Link className="text-xl text-text" />
                                </div>
                                <p className='text-text'>The project you are looking at right now.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div> 
        </>
    )
}