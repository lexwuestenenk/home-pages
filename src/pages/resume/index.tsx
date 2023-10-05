import { CursorFollow } from '@/components/sfx/cursor-follow';
import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/button';
import { ResumeItem } from '@/components/ui/resume-item';
import { SeperationBar } from '@/components/ui/seperation-bar';
import { ExperienceItem } from '@/components/ui/experience-item';
import Link from 'next/link';
import Head from 'next/head';
import { ExperienceItemHeader } from '@/components/ui/experience-item-header';

export default function Projects() {
    return (
        <>
            <Head>
                <title>Lex Wuestenenk • Resume</title>
            </Head>
            <div className='bg-background h-screen flex flex-col justify-center select-none'>
                <CursorFollow />
                <div className='flex flex-row justify-between p-3 h-[6vh] border-primary sticky top-0 left-0'>
                    <Button asChild className='bg-transparent text-primary border-4 border-transparent hover:border-background hover:text-background hover:bg-transparent duration-300 ease-in'>
                        <Link href="/">
                            <Icons.ChevronLeft />
                        </Link>
                    </Button>
                    <div className='flex flex-row'>
                        <h1 className='md:text-transparent text-center text-text align-right flex items-center text-3xl'>My</h1>
                        <h1 className='md:text-transparent text-center text-primary align-right flex items-center text-3xl pr-3'>&nbsp;Resume</h1>
                    </div>
                </div>
                <div className='flex grow md:flex-row flex-col justify-start md:justify-between z-10 container h-[82vh]'>
                    <div className='hidden md:block text-5xl my-auto sticky text-center text-start pb-3'>
                        <h1 className='md:text-text'>My</h1>
                        <h1 className='md:text-primary'>Resume</h1>
                    </div>
                    <div className='md:w-2/4 flex flex-col overflow-scroll px-5'>
                        <div className='pb-16'>
                            <h2 className='text-text text-2xl text-center pb-5'>My Studies</h2>
                            <ResumeItem 
                                period={"09/2023 - Current"} 
                                school={"Windesheim"} 
                                study={"HBO-ICT"}
                            />
                            <SeperationBar />
                            <ResumeItem 
                                period={"09/2020 - 05-2023"} 
                                school={"ROC Aventus"} 
                                study={"Software Development - MBO Niveau 4"}
                            />
                            <SeperationBar />
                            <ResumeItem 
                                period={"09/2019 - 07/2020"} 
                                school={"Etty Hillesum Lyceum - De Marke"} 
                                study={"Mavo"}
                            />
                            <SeperationBar />
                            <ResumeItem 
                                period={"08/2016 - 09/2019"} 
                                school={"Etty Hillesum Lyceum - Boerhaave"} 
                                study={"Havo"}
                            />
                        </div>
                        <div className='pb-16 flex flex-col gap-5'>
                            <h2 className='text-text text-2xl text-center pb-5'>My Experience</h2>
                            <div className='flex flex-col border-2 border-primary rounded-md p-3 duration-300 ease-in hover:bg-primary'>
                                <ExperienceItemHeader 
                                    company={"Highbiza"}
                                    total_time={"7 mos"}
                                    location={"Deventer, Overijssel, Netherlands - On-site"}
                                />
                                <ExperienceItem 
                                    role={"Software Developer"}
                                    work_type={"Full Time"}
                                    period={"3 mos"}
                                />
                                <ExperienceItem 
                                    role={"Software Developer"}
                                    work_type={"Internship"}
                                    period={"4 mos"}
                                    last={true}
                                />
                            </div>
                            <div className='flex flex-col border-2 border-primary rounded-md p-3 duration-300 ease-in hover:bg-primary'>
                                <ExperienceItemHeader 
                                    company={"Topicus"}
                                    total_time={"7 mos"}
                                    location={"Deventer, Overijssel, Netherlands - On-site"}
                                />
                                <ExperienceItem 
                                    role={"Automation Tester"}
                                    work_type={"Full Time"}
                                    period={"2 mos"}
                                />
                                <ExperienceItem 
                                    role={"Automation Tester"}
                                    work_type={"Internship"}
                                    period={"5 mos"}
                                    last={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}