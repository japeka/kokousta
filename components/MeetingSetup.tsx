"use client"

import { DeviceSettings, VideoPreview, useCall } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'

const MeetingSetup = ({setIsSetupComplete}: {setIsSetupComplete:(value:boolean) => void}) => {

  const [isMIcCamToggledOn, setIsMIcCamToggledOn]= useState(false)


  const call = useCall()

  if(!call) throw new Error('useCall metodia pitää käyttää StreamCall komponentissa')
  
  useEffect(() => {
    if(isMIcCamToggledOn){
        call?.camera?.disable()
        call?.microphone?.disable()
    } else {
        call?.camera?.enable()
        call?.microphone?.enable()
    }
    
  },[isMIcCamToggledOn, call?.camera, call?.microphone])

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
        <h1 className="text-2xl font-bold">Laitteistoasetukset</h1>
        <VideoPreview />
        <div className="flex h-16 items-center justify-center gap-3">
            <label className="flex items-center justify-center gap-2 font-medium">
                <input type="checkbox"
                checked = {isMIcCamToggledOn}
                onChange={(e)=>{setIsMIcCamToggledOn(e.target.checked)}}
                />
                Liity kokoukseen mikrofoni äänettömänä ja kamera pois päältä
            </label>
            <DeviceSettings />
        </div>
        <Button className="rounded-md bg-green-500 px-4 py-2.5"
            onClick={()=> {
               call.join();
               setIsSetupComplete(true);
            }
        }
        >
            Liity kokoukseen
        </Button>
    </div>
  )
}

export default MeetingSetup