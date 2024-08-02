"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
// import { toast } from "@/components/ui/use-toast"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string(),
    message: z.string(),
})

export default function InputForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
            addDoc(collection(db, "join_requests"), {
                name: data.username,
                email: data.email,
                message: data.message,
                date: Date().toLocaleString(),
            }).then((docRef) => {
                // toast({ title: "Your request has been sent successfully" });
                toast("Your request has been sent successfully. We will contact you soon.");
                addDoc(collection(db, "notifications"), {
                    message: `New join request have been created.`,
                    date: Date().toLocaleString(),
                    linkid: docRef.id
                })
            })
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <section className="h-full flex justify-center items-center py-10 mx-auto">
            <ToastContainer />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="sm:w-[90vw] md:w-[60vw] space-y-6">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-2xl font-semibold">Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Full name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-2xl font-semibold">Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-2xl font-semibold">Why JEC ?</FormLabel>
                                <FormControl>
                                    <Input placeholder="Why JEC ?" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="w-full flex justify-center items-center">
                        <Button type="submit" className="text-xl">Submit</Button>
                    </div>
                </form>
            </Form>
        </section>
    )
}
