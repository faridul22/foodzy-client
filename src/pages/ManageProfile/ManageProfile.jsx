import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";


const ManageProfile = () => {
    const { user } = useContext(AuthContext)
    console.log(user)

    const [userInfo, setUserInfo] = useState([]);
    useEffect(() => {
        fetch(`https://foodzy-server-wd6a.vercel.app/user/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserInfo(data)
            })
    }, [user])
    console.log(userInfo)

    const { _id, name, email, image, } = userInfo
    return (
        <div>
            <h1 className="text-2xl font-bold">Profile Information</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Mobile number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {email}
                            </td>
                            <td>
                                {userInfo?.age}
                            </td>
                            <td>
                                {userInfo?.phone}
                            </td>

                            <th>
                                <button className="btn bg-emerald-500 text-white hover:bg-emerald-600">
                                    <Link to={`edit/${_id}`}>Edit Profile</Link>
                                </button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProfile;