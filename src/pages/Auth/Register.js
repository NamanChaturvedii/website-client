import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import toast from 'react-hot-toast';
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import "../../styles/AuthStyles.css"

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [answer, setAnswer] = useState("");


    const navigate = useNavigate();
    // form submit
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = { name, email, password, phone, address, answer }
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, data)
            if (res.data.success) {
                toast.success(res.data.message)
                navigate("/login")
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error("something went wrong..")
        }
    }

    return (
        <Layout title={"Register-Ecommerce app"}>
            <div className='form-container'>
                <h1>Register </h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">

                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="mb-3">

                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3">

                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="mb-3">

                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder='Enter Your Phone' value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <div className="mb-3">

                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder='Enter Your Address' value={address} onChange={(e) => setAddress(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter Your Favorite sport"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>

            </div>
        </Layout>
    )
}

export default Register