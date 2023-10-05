import React from 'react';

interface ExperienceItemProps {
    role: string,
    work_type: string,
    period: string,
    last?: boolean,
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ role, work_type, period, last }) => {
    return (
        <div className='flex flex-row pb-3 relative'>
            <div className='flex flex-col w-[4rem] pt-2 items-center'>
                <i className='w-3 h-3 rounded-full bg-text'></i>
                {last ? (
                    ""
                ) : (
                        <i className='absolute w-0 border-2 border-text h-[calc(100%-30px)] translate-y-[+20px]'></i>
                )}
            </div>
            <div className='flex flex-col'>
                <h5 className='text-text'>{role}</h5>
                <p className='text-text text-xs'>{work_type}</p>
                <p className='text-xs text-slate-400'>{period}</p>
            </div>
        </div>
    )
}