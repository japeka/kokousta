import MeetingTypeList from '@/components/MeetingTypeList'
import React from 'react'

const Home = () => {
  const now = new Date()
  const minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes()
  const hours = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours()
  const time = `Klo ${hours}:${minutes}`
  const date = now.toLocaleDateString('fi-FI', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).split(' ')
  const formattedDate = `${date[0].charAt(0).toUpperCase() + date[0].slice(1)}, ${date[1]} ${date[2]}, ${date[3]}`  


  /*
  body > main > main > div 
  > section.flex.min-h-screen.flex-1.flex-col.px-6.pb-6.pt-28.max-md\:pb-14.sm\:px-14 > 
  div > section > section > button:nth-child(5)
  */
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">

          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">Tulevat kokoukset klo 12:30</h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">
              {time}
            </h1>
            <p className="text-xl font-medium text-sky-1 lg:text-2xl">
              {formattedDate}
              </p>
          </div>
        </div>
      </div>
      <MeetingTypeList/>
    </section>
  )
}

export default Home