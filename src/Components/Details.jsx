import React from 'react';
import { useLoaderData } from 'react-router';

const Details = () => {
    const detailsUsers = useLoaderData();
    console.log(detailsUsers);
    return (
        <div>
            <h2>Details pages</h2>
        </div>
    );
};

export default Details;