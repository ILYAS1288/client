


import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { ToastContainer, toast } from "react-toastify"
import { EnquiryList } from "./enquiry/EnquiryList";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Enquiry() {
    let [enquiryList, setEnquiryList] = useState([])
    let [formDate, setformDate] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })
    let saveEnquriy = (e) => {


        e.preventDefault()

        // let formDate={
        //     name:e.target.name.value,
        //     email:e.target.email.value,
        //     phone:e.target.phone.value,
        //     message:e.target.message.value

        // }

        axios.post('http://localhost:8020/api/website/enquiry/insert', formDate).then((res) => {
            // console.log(res.data)
            toast.success('Enquiry Saved Successfully')
            setformDate({
                name: "",
                email: "",
                phone: "",
                message: ""
            })
        })
    }
    
    let getAllequiry = () => {
        axios.get('http://localhost:8020/api/website/enquiry/view')
            .then((res) => {
                return res.data
            })
            .then((finalDate) => {
                if (finalDate.status) {
                    setEnquiryList(finalDate.enquiryList)
                }
            })
    }






    let getValue = (e) => {
        let inputName = e.target.name
        let inputValue = e.target.value
        let oldDate = { ...formDate }
        oldDate[inputName] = inputValue;
        setformDate(oldDate)
    }


    useEffect(() => {
        getAllequiry()
    }, [])

    return (
        <div>
            <ToastContainer />
            <h1 className="text-[40px] text-center py-6 font-blod">User Enquiry </h1>
            <div className="grid grid-cols-[30%_auto] gap-10">
                <div className="bg-gray-200 p-4">
                    <h2 className="text-[20px] font-blod">Enquiry From </h2>
                    <form action="" onSubmit={saveEnquriy}>
                        <div className="mb-2 block">
                            <Label htmlFor="Name">Your Name</Label>
                            <TextInput type="text" value={formDate.name} onChange={getValue} name='name' placeholder="Enter Your Name" required />
                        </div>
                        <div className="mb-2 block">
                            <Label htmlFor="email">Your email</Label>
                            <TextInput type="text" value={formDate.email} onChange={getValue} name="email" placeholder="Enter Your email" required />
                        </div>
                        <div className="mb-2 block">
                            <Label htmlFor="phone">Your phone</Label>
                            <TextInput type="tel" value={formDate.phone} onChange={getValue} name="phone" placeholder="Enter Your phone" required />
                        </div>
                        <div className="mb-2 block">
                            <Label htmlFor="message">Your Message</Label>
                            <Textarea value={formDate.message} onChange={getValue} name="message" placeholder="Enter Your Message" required rows={4} />
                        </div>
                        <div className="mb-2 block">
                            <Button type="submit" className="w-[100%]">Save</Button>

                        </div>



                    </form>
                </div>
                <EnquiryList data={enquiryList} />
            </div>
        </div>
    )
}


