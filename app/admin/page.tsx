import NotificationsComponent from "@/components/Notifications"
import JoinRequestComponent from "@/components/JoinRequest"

import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import HomeComponent from "@/components/HomeComponent"
import NewForm from "@/components/NewForm"

export default function TabsDemo() {
  return (
    <section className="w-[90vw] h-full flex justify-center items-center py-14">
      <Tabs defaultValue="account" className="w-[600px]">
        <TabsList className="grid w-full grid-cols-4 text-2xl my-2">
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="joinrequest">Join Requests</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="newform">New Form</TabsTrigger>
        </TabsList>

        <HomeComponent />
        <JoinRequestComponent />
        <NotificationsComponent />
        <NewForm />
      </Tabs>
    </section>
  )
}
