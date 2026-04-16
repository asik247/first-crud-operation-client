import React from 'react';

const MyClients = () => {
    // HandlerSubmit 
    const handlerSubmit = (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        console.log(name,email);
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyClients;