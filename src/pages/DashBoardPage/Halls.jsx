import React, { useEffect, useState } from "react";
import { format, isValid } from "date-fns";
import { Link, useParams } from "react-router-dom";
import { MdUpdate } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegEdit } from "react-icons/fa";
import Formupdates from './Formupdates'

export default function RecentHalls() {
  const [data, setData] = useState([]);
  const params = useParams();

  const handleFetch = async () => {
    await axios({
      method: "Get",
      url: "https://dream-day-rentals-16.onrender.com/weeding/service/list",
      headers: {
        // "Content-Type":"application/json"
      },
    })
      .then((response) => {
        console.log(response.data.getServices);
        setData(response.data.getServices);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    handleFetch();
  }, []);
  ///delete
  const handleDelete = async (id) => {
    console.log(id,'dsbjsk')
    // if (window.confirm("Are you sure you want to delete")) {
      await axios({
        url: `https://dream-day-rentals-16.onrender.com/weeding/service/delete/${id}`,
        method: "DELETE",
        headers:{
          "Content-Type":"application/json"
        }
      })
        .then((response) => {
          console.log(response.data);
          if(response.status === 200){
            toast.success(response.data.message)

          }
          setTimeout(() =>{
            window.location.reload();
          }, 3000)
        })
        .catch((error) => {
          console.log(error);
          toast.error('not deleted', error)
        });
    // }
  };
  return (
    <div className="bg-white px-6 py-4 rounded-lg shadow-md border border-gray-200 flex-1">
      <ToastContainer />
      <strong className="text-gray-700 font-medium text-xl">
        Recent Halls
      </strong>
      <div className="mt-4">
        <table className="w-full text-gray-700 table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Profile</th>
              <th className="px-4 py-2">availability</th>
              <th className="px-4 py-2">category</th>
              <th className="px-4 py-2">description</th>
              <th className="px-4 py-2">email</th>
              <th className="px-4 py-2">location</th>
              <th className="px-4 py-2">phoneNumber</th>
              <th className="px-4 py-2">phoneNumber</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td className="border px-4 py-2 text-center">
                    <img src={item.Profile} />
                  </td>
                  <td className="border px-4 py-2 text-center">{`${item.availability}`}</td>
                  <td className="border px-4 py-2 text-center">
                    {item.category}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {item.description}
                  </td>
                  <td className="border px-4 py-2 text-center">{item.email}</td>
                  <td className="border px-4 py-2 text-center">
                    {item.location}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {item.phoneNumber}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {item.serviceName}
                  </td>
                  <td className="border px-4 py-2 text-center flex flex-row">
                    <Link to={'/Formupdates'}>
                    <FaRegEdit />
                    </Link>
                    <Link >
                    <MdDeleteForever onClick={()=>{handleDelete(item._id)}}/>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
