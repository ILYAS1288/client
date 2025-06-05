import React from "react";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
export default function Enquiry() {
    let saveEnquriy = (e) => {
        // alert('Enquiry Saved')
        e.preventDefault()
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
                <div className="bg-gray-200 p-4">
                    <h2 className="text-[20px] font-blod">Enquiry From </h2>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableHeadCell>Sr No </TableHeadCell>
                                    <TableHeadCell>Name</TableHeadCell>
                                    <TableHeadCell>Email</TableHeadCell>
                                    <TableHeadCell>Phone</TableHeadCell>
                                    <TableHeadCell>Message</TableHeadCell>
                                    <TableHeadCell>
                                        <span className="">Delete</span>
                                    </TableHeadCell>
                                     <TableHeadCell>
                                        <span className="">Edit</span>
                                    </TableHeadCell>
                                </TableRow>
                            </TableHead>
                            <TableBody className="divide-y">
                                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                   1
                                    </TableCell>
                                    <TableCell>Ali</TableCell>
                                    <TableCell>Ali@gamil.com</TableCell>
                                    <TableCell>03555000</TableCell>
                                     <TableCell>Holle</TableCell>
                                    <TableCell>
                                        <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                     Delete
                                        </a>
                                    </TableCell>
                                    <TableCell>
                                        <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                            Edit
                                        </a>
                                    </TableCell>
                                </TableRow>
                               
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}