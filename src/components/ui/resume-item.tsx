import React from 'react';

interface ResumeItemProps {
    period: string;
    school: string;
    study: string;
}

export const ResumeItem: React.FC<ResumeItemProps> = ({ period, school, study }) => {
    return (
        <div className="border-2 border-primary p-3 rounded-md flex flex-row justify-between duration-300 ease-in hover:bg-primary">
            <div className='flex flex-col'>
                <h4 className='text-text text-sm'>{period}</h4>
                <p className='text-slate-400'>{school}</p>
            </div>
            <div>
                <h4 className='text-text text-sm'>{study}</h4>
            </div>
        </div>
    )
}
