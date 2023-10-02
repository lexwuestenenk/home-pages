import { CursorFollow } from '@/components/sfx/cursor-follow'
import Head from 'next/head'

export default function Page404() {
    return (
        <>
            <Head>
                <title>Lex Wuestenenk • 404</title>
            </Head>
            <div className='h-screen flex justify-center items-center flex-col select-none'>
                <CursorFollow />
                <h1 className='text-text text-5xl z-10 ease-in duration-300 hover:text-background'>404</h1>
                <p className='text-primary z-10'>Misschien zocht je wat anders?</p>
            </div>
        </>
    )
}
  