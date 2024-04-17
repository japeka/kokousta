"use client"
import React, { useState } from 'react'
import HomeCard from './HomeCard'
import { useRouter } from 'next/navigation';
import MeetingModal from './MeetingModal';
import { useUser } from '@clerk/nextjs';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useToast } from './ui/use-toast';
import { Textarea } from './ui/textarea';

import ReactDatePicker, { registerLocale } from 'react-datepicker';
import {fi} from "date-fns/locale";
import { Input } from './ui/input';

const MeetingTypeList = () => { 

  registerLocale("fi", fi);
  const router = useRouter();
  const { toast } = useToast()

  const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>()

  const {user} = useUser()
  const client = useStreamVideoClient()

  const [values, setValues] = useState({
   dateTime: new Date(),
   description: '',
   link: '',
  })

  const [callDetails, setCallDetails] = useState<Call>()
  const createMeeting = async () => {
   if(!client || !user) return;
   try {
      
      if(!values.dateTime) {
         toast({
            title: "Valitse päivämäärä ja aika",
          })
          return;
      }

      const id = crypto.randomUUID()
      const call = client.call('default', id)
      if(!call) throw new Error('Soiton muodostaminen epäonnistui')

      const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString()
      const description = values.description || 'Kokous heti'   
      await call.getOrCreate({
         data: {
            starts_at: startsAt,
            custom: {
               description
            }
         }
      })

      setCallDetails(call)
      
      if(!values.description){
         router.push(`/meeting/${call.id}`)
      }
      
      toast({
         title: "Kokous luotu",
       })

   } catch (error) {
      console.log(error);      
      toast({
         title: "Kokouksen luonti epäonnistui",
       })
   }
  }

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetails?.id}`
  
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        <HomeCard 
            title="Uusi kokous"
            img="/icons/add-meeting.svg"
            description="Aloita heti uusi kokous"
            handleClick={()=> setMeetingState('isInstantMeeting')}
            className="bg-orange-1"
        />

        <HomeCard 
           img="/icons/schedule.svg"
           title="Aikatauluta kokous"
           description="Suunnittele kokous"
           handleClick={()=> setMeetingState('isScheduleMeeting')}
           className="bg-blue-1"
        />

        <HomeCard 
           img="/icons/recordings.svg"
           title="Tarkastele äänityksiä"
           description="Tarkastele omia äänityksiäsi"
           handleClick={()=> router.push('/recordings')}
           className="bg-purple-1"
        />

        <HomeCard 
           img="/icons/join-meeting.svg"
           title="Liity kokoukseen"
           description="Liity kokoukseen kutsulinkin kautta"
           handleClick={()=> setMeetingState('isJoiningMeeting')}
           className="bg-yellow-1"
        />


      {!callDetails ? (
         <MeetingModal
                isOpen={meetingState === 'isScheduleMeeting'}
                onClose={()=> setMeetingState(undefined)}
                title="Luo kokous"
                handleClick={createMeeting}
          >
            <div className="flex flex-col gap-2.5">
               <label className="text-base text-normal leading-[22px] text-sky-2">Lisää kuvaus</label>
               <Textarea className="border-none bg-dark-3 focus-visible:ring-0 focus-visible-ring-offset-0"
                  onChange={(e)=>setValues({...values, description: e.target.value})}
               />
            </div>
            <div className="flex w-full flex-col gap-2.5">
               <label className="text-base text-normal leading-[22px] text-sky-2">Valitse päivämäärä ja aika</label>
               <ReactDatePicker
                  selected={values.dateTime}
                  onChange={(date)=>setValues({...values, dateTime: date!})}
                  showTimeSelect
                  locale="fi"
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  timeCaption="Aika"
                  dateFormat="dd.MM.yyyy HH:mm"
                  className="w-full rounded bg-dark-3 p-2 focus:outline-none"
               />
            </div>
            </MeetingModal> 
      ):(
         <MeetingModal
            isOpen={meetingState === 'isScheduleMeeting'}
            onClose={()=> setMeetingState(undefined)}
            title="Kokous luotu"
            handleClick={()=>{

               navigator.clipboard.writeText(meetingLink)
               toast({
                 title: 'Kokouslinkki kopioitu'
                }) 
             }}
             image="/icons/checked.svg"
             buttonIcon = "/icons/copy.svg"
             buttonText="Kopioi kokouslinkki"
        /> 
      )}

       <MeetingModal
        isOpen={meetingState === 'isInstantMeeting'}
        onClose={()=> setMeetingState(undefined)}
        title="Aloita heti uusi kokous"
        buttonText="Aloita kokous"
        handleClick={createMeeting}
       /> 

      <MeetingModal
        isOpen={meetingState === 'isJoiningMeeting'}
        onClose={()=> setMeetingState(undefined)}
        title="Kirjoita kokouslinkki tähän"
        buttonText="Liity kokoukseen"
        handleClick={()=> router.push(values.link)}
       >
         <Input 
            placeholder="Kokouslinkki"
            className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
            onChange={(e)=>setValues({...values, link: e.target.value})}
         />
         </MeetingModal> 


    </section>
  )
}

export default MeetingTypeList