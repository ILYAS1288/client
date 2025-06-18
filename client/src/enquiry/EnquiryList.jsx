import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, } from "flowbite-react";
import axios from "axios";

import { toast,  } from 'react-toastify'
export function EnquiryList({ data, getAllequiry, Swal,setformDate }) {
  
const deleteRow = async (delid) => {
 
  const result = await Swal.fire({
    title: "Delete this enquiry?",
    text: "This action cannot be undone.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete",
    cancelButtonText: "Cancel",
  });

  
  if (result.isConfirmed) {
    try {
      await axios.delete(
        `http://localhost:8020/api/website/enquiry/delete/${delid}`
      );
      toast.success("Enquiry deleted successfully");
      getAllequiry(); 
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Server error – could not delete"
      );
    }
  } else {
    
    Swal.fire("Deletion cancelled", "", "info");
  }
};


const editRow = async (editId) => {
  try {
    const res = await axios.get(
      `http://localhost:8020/api/website/enquiry/single/${editId}`  
    );
   setformDate(res.data.enquiry);
  
  } catch (err) {
    console.error(err.response?.data || err.message);
   
  }
};


    return (
        <div className="bg-gray-200 p-4">

            <h2 className="text-[20px] font-blod">Enquiry From </h2>
            <div className="overflow-x-auto">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeadCell>Sr.No </TableHeadCell>
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
                            data.length >= 1 ?
                                data.map((item, index) => {
                                    return (
                                        <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell>{item.email}</TableCell>
                                            <TableCell>{item.phone}</TableCell>
                                            <TableCell>{item.message}</TableCell>
                                            <TableCell>
                                                <button onClick={() => deleteRow(item._id)} className="bg-red-500 text-white px-4 py-2 rounded-md">
                                                    Delete
                                                </button>
                                            </TableCell>
                                            <TableCell>
                                                <button onClick={()=>editRow(item._id)} className="bg-blue-500 text-white px-4 py-2 rounded-md">
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