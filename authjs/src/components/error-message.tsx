import {TriangleIcon} from 'lucide-react';

export default function ErrorMessage({error}:{error: string}){
    return (
        <div className='flex w-full items-center justify-center rounded-full bg-red-600 p-2' role='alert'>
            <TriangleIcon className='h-4 w-4 text-white'/>
            <span className='sr-only'>{error}</span>
        </div>
    )
}