"use client"
import { XMarkIcon } from '@heroicons/react/24/solid';
import { format } from 'date-fns';
import { useReservation } from './useReservation';

function ReservationReminder() {
  const {range,resetRange}=useReservation()


  if (!range.from || !range.to) return null;

  return (
    <div className='fixed bottom-6 left-1/2 -translate-x-1/2 md:py-5 py-2 md:px-8 px-3 rounded-full bg-accent-500 text-primary-800 text  font-semibold shadow-xl shadow-slate-900 flex md:gap-8 items-center gap-2'>
      <p>
        <span>👋</span> Don&apos;f forget to reserve your dates <br /> from{' '}
        {format(new Date(range.from), 'MMM dd yyyy')} to{' '}
        {format(new Date(range.to), 'MMM dd yyyy')}
      </p>
      <button className='rounded-full p-1 hover:bg-accent-600 transition-all' onClick={resetRange}>
        <XMarkIcon className='h-5 w-5' />
      </button>
    </div>
  );
}

export default ReservationReminder;
