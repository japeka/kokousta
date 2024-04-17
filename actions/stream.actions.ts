"use server"

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY
const apiSecret = process.env.NEXT_PUBLIC_STREAM_API_SECRET

console.log('HELLO',apiSecret)

export const tokenProvider = async()=> {
    const user = await currentUser();
    if(!user) throw new Error('Käyttäjä ei ole kirjautunut')
    if(!apiKey) throw new Error('Api key puuttuu');
    if(!apiSecret) throw new Error('Api secret puuttuu');

    const client = new StreamClient(apiKey, apiSecret)
    const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
    const issued = Math.floor(Date.now() /1000) - 60
    const token = client.createToken(user.id,exp,issued)
    return token
}