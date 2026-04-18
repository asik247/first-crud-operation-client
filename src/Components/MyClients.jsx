import React, { use, useState } from 'react';
import {  NavLink } from 'react-router';

const MyClients = ({ fetchUsers }) => {
    const initialUsers = use(fetchUsers);
    // console.log(initialUsers);
    const [users, setUsers] = useState(initialUsers);
    // HandlerSubmit 
    const handlerSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const newUsers = { name, email };
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUsers)

        }).then(res => res.json())
            .then(data => {
                console.log('After data in server', data)
                if (data.insertedId) {
                    alert("Add DB")
                    newUsers._id = data.insertedId;
                    const updateUsers = [...users,newUsers];
                    setUsers(updateUsers)
                }
            })


        e.target.reset();


    }
    // handle detelte
    const handleDelete = (id)=>{
        console.log('Delete Btn Clicked',id);
        fetch(`http://localhost:3000/users/${id}`,{
            method:'DELETE'
        }).then(res=>res.json()).then(data=>{
            // console.log(data)
            if(data.deletedCount){
                alert('Delete Successfully')
                const reminingUsre = users.filter(user=>user._id !==id)
                setUsers(reminingUsre)
            }
        })
    }
    return (
        <div>
            <div className="hero-content ">

                <div className="hero bg-base-200 min-h-screen">


                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handlerSubmit}>
                                <fieldset className="fieldset">
                                    <label className="label">Name</label>
                                    <input type="text" name='name' className="input" placeholder="Name" />

                                    <label className="label">Email</label>
                                    <input type="email" name='email' className="input" placeholder="Email" />

                                    <button className="btn btn-neutral mt-4">Add User</button>
                                </fieldset>
                            </form>
                            {/* show peopleInfo */}
                            {
                                users.map(user => <p key={user._id}>{user.name} : {user.email}
                                <NavLink to={`/users/${user._id}`} className={'text-red-500 font-bold'}>Details</NavLink>
                                <NavLink to={`/update/${user._id}`} className={'text-green-500 font-bold'}>Edit</NavLink>
                                 <button className='btn btn-primary gap-2' onClick={()=>handleDelete(user._id)}>X</button>
                                </p>)
                            }
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyClients;