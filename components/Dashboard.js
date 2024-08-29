import React from 'react'
import { Fugaz_One } from 'next/font/google'
import Calendar from './Calendar'

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] })
export default function Dashboard() {
    const statuses = {
        num_days: 14,
        time_remaining: '13:14:26',
        date: (new Date()).toDateString()
    }
    const moods = {
        '!%$*#': '😭',
        'Sad': '😢',
        'Existing': '😶',
        'Good': '🙂',
        'Elated': '😍'
    }
  return (

    <div className="flex flex-col flex-1 gap-8 sm:gap-12 md:gap-16">
        <div className="grid grid-cols-3 bg-indigo-50 text-indigo-500 rounded-lg p-4 gap-4">
            {Object.keys(statuses).map((status, statusIndex) => {
                return (
                    <div key={statusIndex} className="flex flex-col gap-1 sm:gap-2">
                        <p className="font-medium truncate uppercase text-xs sm:text-sm">{status.replaceAll('_',' ')}</p>
                        <p className={`text-base sm:text-lg truncate ${fugaz.className}`}>{statuses[status]}</p>
                    </div>
                )
            })}
        </div>
        <h4 className={`${fugaz.className} text-5xl sm:text-6xl md:text-7xl text-center`}>
            How do you <span className="textGradient">feel</span> today?
        </h4>
        <div className="flex items-stretch flex-wrap gap-4">
            {Object.keys(moods).map((mood, moodIndex) => {
                return (
                    <button className={`p-4 px-5 rounded-xl purpleShadow duration-200 bg-indigo-50 hover:bg-indigo-100 flex flex-col items-center gap-2 flex-1`} key={moodIndex}>
                        <p className='text-4xl sm:text-5xl md:text-6xl'>{moods[mood]}</p>
                        <p className={`text-indigo-500 text-xs sm:text-sm md:text-base ${fugaz.className}`}>{mood}</p>
                    </button>
                )
            })}
        </div>
        <Calendar />
    </div>
  )
}
