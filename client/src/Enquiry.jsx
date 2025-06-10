import React from "react";
import { Button, Label, TextInput, Textarea } from "flowbite-react";

import { EnquiryList } from "./enquiry/EnquiryList";
export default function Enquiry() {
    let saveEnquriy = (e) => {
        // alert('Enquiry Saved')
        e.preventDefault()
        let formDate={
            name:e.target.name.value,
            email:e.target.email.value,
            phone:e.target.phone.value,
            message:e.target.message.value

        }

        axios.post('http://localhost:8020/api/website/enquiry/insert',formDate).then((res)=>{
            console.log(res.data)
        })
    }
    return (
        <div>
            <h1 className="text-[40px] text-center py-6 font-blod">User Enquiry </h1>
            <div className="grid grid-cols-[30%_auto] gap-10">
                <div className="bg-gray-200 p-4">
                    <h2 className="text-[20px] font-blod">Enquiry From </h2>
                    <form action="" onSubmit={saveEnquriy}>
                        <div className="mb-2 block">
                            <Label htmlFor="Name">Your Name</Label>
                            <TextInput type="text" name='name' placeholder="Enter Your Name" required />
                        </div>
                        <div className="mb-2 block">
                            <Label htmlFor="email">Your email</Label>
                            <TextInput type="email" email='email' placeholder="Enter Your email" required />
                        </div>
                        <div className="mb-2 block">
                            <Label htmlFor="phone">Your phone</Label>
                            <TextInput type="text" phone='phone' placeholder="Enter Your phone" required />
                        </div>
                        <div className="mb-2 block">
                            <Label htmlFor="message">Your Message</Label>
                            <Textarea name='message' placeholder="Enter Your Message" required rows={4} />
                        </div>
                        <div className="mb-2 block">
                            <Button type="submit" className="w-[100%]">Save</Button>

                        </div>



                    </form>
                </div>
             <EnquiryList/>
            </div>
        </div>
    )
}


