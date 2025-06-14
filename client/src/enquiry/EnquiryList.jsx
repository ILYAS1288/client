import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow,  } from "flowbite-react";
import axios from "axios";
import{toast,ToastContainer} from 'react-toastify'
export function EnquiryList({data, getAllequiry}) {
 // EnquiryList.jsx
const deleteRow = async (delid) => {

    await axios.delete(
      `http://localhost:8020/api/website/enquiry/delete/${delid}`
    ).then((res)=>{
           toast.success('Enquiry deleted successfully');
    getAllequiry()
    })
     
 
};

    return (
        <div className="bg-gray-200 p-4">
        <ToastContainer/>
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

                     {
                        data.length>=1 ?
                        data.map((item,index)=>{
                            return(
                                <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <TableCell>{index+1}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.phone}</TableCell>
                                    <TableCell>{item.message}</TableCell>
                                    <TableCell>
                                        <button onClick={()=>deleteRow(item._id)} className="bg-red-500 text-white px-4 py-2 rounded-md">
                                            Delete
                                        </button>
                                    </TableCell>
                                     <TableCell>
                                        <button  className="bg-blue-500 text-white px-4 py-2 rounded-md">
                                            Eidt
                                        </button>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                        :
                        <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <TableCell colSpan={7} className="text-center">  NO Found Data</TableCell>
                        </TableRow>
                     }

                    </TableBody>
                </Table>
            </div>
        </div>
    )
}