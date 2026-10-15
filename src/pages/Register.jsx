import { useState } from "react"

function Register(){
    const[formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
    })

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev, [e.target.name]: e.target.value,
        }))
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("form submitted plz check console :)")
    }


    return(
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow bg-dark text-light opacity-75">
                <h1 className="text-center"> Sign Up </h1>
                <form onSubmit={submitHandler}>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}
                    placeholder="Enter Your First Name" className="form-control mb-3" required/>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}
                    placeholder="Enter Your Last Name" className="form-control mb-3" required/>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}
                    placeholder="Enter Your Email" className="form-control mb-3" required/>
                    <input type="password" name="password" value={formData.password} onChange={handleChange}
                    placeholder="Enter Your Password" className="form-control mb-3" required/>
                    <button className="btn btn-success w-100"> Sign up </button>
                </form>
            </div>
        </div>
    )
}
export default Register