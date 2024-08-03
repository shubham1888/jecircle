'use client'
import { TabsContent } from './ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { useState, useEffect } from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { db } from '@/firebase'
import { getDocs, collection } from 'firebase/firestore'

interface JoinRequest {
    id: String;
    name?: String;
    email?: String;
    message?: String;
    date?: String;
}

async function getJoinRequestsFunction():Promise<JoinRequest[]> {
    const querySnapShot = await getDocs(collection(db, "join_requests"))
    const arr: JoinRequest[] = []
    querySnapShot.forEach((doc) => {
        arr.push({ id: doc.id, ...doc.data() } as JoinRequest)
    })
    return arr
}

const JoinRequestComponent = () => {
    const [join_request_data, setJoin_request_data] = useState<JoinRequest[]>([]);
    useEffect(() => {
        async function fetchData() {
            const data = await getJoinRequestsFunction()
            setJoin_request_data(data)
        }
        fetchData()
    }, [])

    return (
        <TabsContent value="joinrequest">
            <Card>
                <CardHeader>
                    <CardTitle>Join Request</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <Accordion type="single" collapsible>
                        {
                            join_request_data.map((i) => {
                                return (
                                    <AccordionItem value:string={i.id} key:string={i.id}>
                                        <AccordionTrigger>{i.name}</AccordionTrigger>
                                        <AccordionContent>
                                            <p className='text-lg font-semibold'>Email : {i.email}</p>
                                            <p>{i.message}</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>

                </CardContent>
            </Card>
        </TabsContent>
    )
}

export default JoinRequestComponent