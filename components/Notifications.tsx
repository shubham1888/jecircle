import { TabsContent } from './ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const NotificationsComponent = () => {
  return (
    <TabsContent value="notifications">
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <p className="bg-slate-900 px-6 py-4 rounded-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti provident, corporis nihil natus non quibusdam similique iste, voluptate reprehenderit mollitia officia tempora, tempore veniam </p>
          </div>
          <div className="space-y-1">
            <p className="bg-slate-900 px-6 py-4 rounded-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti provident, corporis nihil natus non quibusdam similique iste, voluptate reprehenderit mollitia officia tempora, tempore veniam </p>
          </div>
          <div className="space-y-1">
            <p className="bg-slate-900 px-6 py-4 rounded-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti provident, corporis nihil natus non quibusdam similique iste, voluptate reprehenderit mollitia officia tempora, tempore veniam </p>
          </div>
          <div className="space-y-1">
            <p className="bg-slate-900 px-6 py-4 rounded-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti provident, corporis nihil natus non quibusdam similique iste, voluptate reprehenderit mollitia officia tempora, tempore veniam </p>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  )
}

export default NotificationsComponent