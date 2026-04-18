import React from 'react';
import { useLoaderData } from 'react-router';

const Update = () => {
    const updateUser = useLoaderData();
    console.log(updateUser);
    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        // console.log(name,email);
        const newUpdateUser = { name, email }
        // console.log(newUpdateUser);
        fetch(`http://localhost:3000/users/${updateUser._id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newUpdateUser)
        }).then(res=>res.json()).then(data=>{
            console.log('after update',data)
            if(data.modifiedCount){
                alert('update success')
            }

        }
    
    )
    }
    return (
        <div>
            <h2>Edit here</h2>


            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleUpdate} >
                                <fieldset className="fieldset">
                                    <label className="label">Name</label>
                                    <input type="text" name='name' defaultValue={updateUser.name} className="input" placeholder="Name" />

                                    <label className="label">Email</label>
                                    <input type="email" name='email' defaultValue={updateUser.email} className="input" placeholder="Email" />


                                    <button className="btn btn-neutral mt-4">Edit</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;