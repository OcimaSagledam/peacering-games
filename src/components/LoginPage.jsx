import { useState } from "react";
import PageWrapper from "./PageWrapper"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
    const [user_name, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()

    async function login(user_name, password) {
        setError("")

        try {
            const response = await axios.post('http://localhost:4000/user/login', { user_name, password });

            sessionStorage.setItem("auth_token", response.data.auth_token)

            navigate("/")

        } catch (error) {
            console.log(error.response.data)
            if (error.response && error.response.data) {
                setError(error.response.data)
            } else {
                setError(error.message)
            }
        }
    }

    return <PageWrapper>
        <div className="h-full w-full flex flex-col items-center justify-center">
            <span className="text-2xl font-bold mb-2">
                Log in or <span className="underline text-[#FF6161]"><Link to="/register">Register</Link></span>
            </span>
            <div className="border border-black p-1 flex flex-col w-96 h-64">
                <label htmlFor="username"><b>Username</b></label>
                <input type="text" className="border border-black h-14 w-full px-2" placeholder="Enter Username" name="username" required onChange={(e) => setUsername(e.target.value)} />

                <label className="mt-4" htmlFor="password"><b>Password</b></label>
                <input type="password" className="border border-black h-14 w-full px-2" placeholder="Enter Password" name="password" required onChange={(e) => setPassword(e.target.value)} />

                {error && <span className="text-[#FF6161] border border-[#FF6161]">{error}</span>}

                <div className="h-full w-full flex items-end justify-center">
                    <button className="w-full lg:w-48 mt-2 lg:mt-0 h-12 transition bg-[#FF6161] hover:bg-[#ff4f4f] hover:scale-105" type="button" onClick={() => login(user_name, password)}>Login</button>
                </div>
            </div>
        </div>
    </PageWrapper>
}
