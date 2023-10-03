import { CursorFollow } from '@/components/sfx/cursor-follow';
import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Head from 'next/head';

export default function Socials() {
    return (
        <>
            <Head>
                <title>Lex Wuestenenk • Socials</title>
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
                        <h1 className='md:text-transparent text-center text-primary align-right flex items-center text-3xl pr-3'>&nbsp;Socials</h1>
                    </div>
                </div>
                <div className='flex grow md:flex-row flex-col md:justify-between z-10 container h-[82vh]'>
                    <div className='text-5xl hidden md:block my-auto sticky text-center text-start pb-3'>
                        <h1 className='md:text-text'>My</h1>
                        <h1 className='md:text-primary'>Socials</h1>
                    </div>
                    <div className='md:w-2/4 flex flex-col gap-3 overflow-auto px-5'>
                        <div className='p-3 border-primary border-2 rounded-lg mb-3 hover:bg-primary ease-in duration-300'>
                            <Link href="https://github.com/lexwuestenenk">
                                <div className='flex flex-row justify-between items-center px-5'>
                                    <Icons.Github className="text-5xl text-text" />
                                    <p className='font-semibold text-2xl text-text'>Github</p>
                                </div>
                            </Link>
                        </div>
                        <div className='p-3 border-primary border-2 rounded-lg mb-3 hover:bg-primary ease-in duration-300'>
                            <Link href="https://discordapp.com/users/299901733943902208">
                                <div className='flex flex-row justify-between items-center px-5'>
                                    <Icons.Discord className="text-5xl text-text" />
                                    <p className='font-semibold text-2xl text-text'>Discord</p>
                                </div>
                            </Link>
                        </div>
                        <div className='p-3 border-primary border-2 rounded-lg mb-3 hover:bg-primary ease-in duration-300'>
                            <Link href="https://www.linkedin.com/in/lex-wuestenenk-0b0340294/?locale=nl_NL">
                                <div className='flex flex-row justify-between items-center px-5'>
                                    <Icons.LinkedIn className="text-5xl text-text" />
                                    <p className='font-semibold text-2xl text-text'>LinkedIn</p>
                                </div>
                            </Link>
                        </div>
                        <div className='p-3 border-primary border-2 rounded-lg mb-3 hover:bg-primary ease-in duration-300'>
                            <Link href="https://myanimelist.net/profile/lexwuessie">
                                <div className='flex flex-row justify-between items-center px-5'>
                                    <Icons.List className="text-5xl text-text" />
                                    <p className='font-semibold text-2xl text-text'>My Anime List</p>
                                </div>
                            </Link>
                        </div>
                        <div className='p-3 border-primary border-2 rounded-lg mb-3 hover:bg-primary ease-in duration-300'>
                            <Link href="https://twitter.com/lexwuestenenk">
                                <div className='flex flex-row justify-between items-center px-5'>
                                    <Icons.Twitter className="text-5xl text-text" />
                                    <p className='font-semibold text-2xl text-text'>Twitter</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}