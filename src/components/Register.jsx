import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { useForm} from "react-hook-form";
import { useAuth } from '../contex/AuthContext';

const Register = () => {
    const {registerUser}=useAuth()
    console.log(registerUser);
    
    const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
          } = useForm();

       
        const [message,setMessage]=useState("")
        const onSubmit = async (data) =>{
            console.log(data) 
            try{
               await registerUser(data.email , data.password);
               alert("User registered sucessfully");
        }catch (error){
            setMessage("please provide a valid emeil and password")
        }
    }
        const handleGoogleSignIn=()=>{
    
        }
  return (
    <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
        <div className='w-full max-w-sm  mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <h2 className='text-xl font-semibold mb-4'>
                Plaese Register
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Email</label>
                    <input {...register("email", { required: true })} type="email" name='email' id="email" placeholder="Email Address" className='shadow apperarence-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'></input>
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="uername">Password</label>
                    <input 
                    {...register("password", { required: true })}
                    type="password" name='password' id="password" placeholder="Password" className='shadow apperarence-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'></input>
                </div>
                {
                    message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
                }
                <div>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none'>Register</button>
                </div>
                
            </form>
            <p className='align-baseline font-medium mt-4 text-sm'> You have an account? Please <Link to="/login" className="text-blue-500 hover:text-blue-700">Login</Link></p>
            <div className='mt-4'>
                <button onClick={handleGoogleSignIn} className='w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'><FaGoogle />
                sign in with Google</button>
            </div>
            <p>02025 Book Store. All rights</p>
        </div>
      
    </div>
  )
}

export default Register
