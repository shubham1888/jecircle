import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TabsContent } from "@radix-ui/react-tabs"

const NewForm = () => {
    return (
        <TabsContent value="newform">
            <Card>
                <CardHeader>
                    <CardTitle>New Form</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p>New Form</p>
                </CardContent>
            </Card>
        </TabsContent>
    )
}

export default NewForm