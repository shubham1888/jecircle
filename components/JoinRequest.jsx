import { TabsContent } from './ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const JoinRequestComponent = () => {
    return (
        <TabsContent value="joinrequest">
            <Card>
                <CardHeader>
                    <CardTitle>Join Request</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    {/* <div className="space-y-1">

                    </div>
                    <div className="space-y-1">

                    </div> */}
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Rahul</AccordionTrigger>
                            <AccordionContent>
                                <p className='text-lg font-semibold'>Email : email@gmail.com</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis repudiandae ut aliquam ea culpa, magni sit est libero repellat cumque, commodi animi? Quisquam eveniet sequi beatae fugit id est magni.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Neha</AccordionTrigger>
                            <AccordionContent>
                                <p className='text-lg font-semibold'>Email : email@gmail.com</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis repudiandae ut aliquam ea culpa, magni sit est libero repellat cumque, commodi animi? Quisquam eveniet sequi beatae fugit id est magni.</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </CardContent>
            </Card>
        </TabsContent>
    )
}

export default JoinRequestComponent