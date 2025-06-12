import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
export function EnquiryList() {
    return (
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
    )
}