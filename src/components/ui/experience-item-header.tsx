import React from 'react';

interface ExperienceItemHeaderProps {
    company: string,
    total_time: string,
    location: string,
}

export const ExperienceItemHeader: React.FC<ExperienceItemHeaderProps> = ({ company, total_time, location }) => {
    return (
        <div className='flex flex-row pb-3'>
            <div className='flex flex-col w-[4rem]'></div>
            <div className='flex flex-col'>
                <h5 className='text-text'>{company}</h5>
                <p className='text-text text-xs'>{total_time}</p>
                <p className='text-xs text-slate-400'>{location}</p>
            </div>
        </div>
    )
}