import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../users/users.css'

interface ProductSchema{
    id:string ,
    image:string ,
    firstName:string,
    lastName:string,
    age:number,
    phone:number
}

const API_URL: string = 'http://dummyjson.com'
const Users: React.FC = () => {
    const [productData, setProductData] =  useState <null | ProductSchema[]>(null)
    useEffect(()=> {
        axios 
            .get(`${API_URL}/users`, {params:{limit:12}})
            .then(res => setProductData(res.data.users))
    }, [])
    
    const productItems: JSX.Element[] | undefined= productData?.map((user : ProductSchema) =>(
        <div className='user' key={user.id}>
            <img src={user.image} width={200} alt="" />
            <h3>{user.firstName}</h3>
            <h3>{user.lastName}</h3>
            <h4>age: {user.age}</h4>
            <h4>{user.phone}</h4>
        </div>
    ))
  return (
    <div  className='container'>
        <h5>Meet our team</h5>
        <div className="users">
            {productItems}
        </div>
    </div>
  )
}

export default Users
