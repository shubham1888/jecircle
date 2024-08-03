'use client'
import { TabsContent } from './ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

import { db } from '@/firebase'
import { getDocs, collection } from 'firebase/firestore'

import { useState, useEffect } from 'react'

interface NotificationTypes {
  id: String;
  date: String;
  message: String;
}

async function notificationsFunction():Promise<NotificationTypes[]> {
  const querySnapShot = await getDocs(collection(db, "notifications"))
  const arr:NotificationTypes[] = []
  querySnapShot.forEach((doc) => {
    arr.push({ id: doc.id, date:doc.data().date,message:doc.data().message } as NotificationTypes)
  })
  return arr
}

const NotificationsComponent = () => {
  const [notificationsState, setnotificationsState] = useState<NotificationTypes[]>([]);
  useEffect(() => {
    async function fetchData() {
      const data = await notificationsFunction()
      setnotificationsState(data)
    }
    fetchData()
  }, [])
  return (
    <TabsContent value="notifications">
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {notificationsState.map((i) => {
            return (
              <div className="space-y-1 bg-slate-900 px-6 py-4 rounded-lg" key={String(i.id)}>
                <p className='text-sm'>{i.date}</p>
                <p className='text-2xl'>{i.message}</p>
              </div>
            )
          })
          }
        </CardContent>
      </Card>
    </TabsContent>
  )
}

export default NotificationsComponent