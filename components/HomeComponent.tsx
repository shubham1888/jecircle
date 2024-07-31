import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TabsContent } from "@radix-ui/react-tabs"

const HomeComponent = () => {
    return (
        <TabsContent value="home">
            <Card>
                <CardHeader>
                    <CardTitle>Home</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p>Home</p>
                </CardContent>
            </Card>
        </TabsContent>
    )
}

export default HomeComponent