import { useState } from "react";

const SimpleForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("");
    const [error, setError] =useState('')

    console.log(name, email, phone,password)
    const formHandler =(e)=>{
        e.preventDefault()
        if(password.length < 6){
            setError("Password must be 6 characters or longer")
        }else{
            setError('')
            console.log('submited', name)
        }
    }
    const nameHandler =(e) =>{
        setName(e.target.value)
    }
    const emailHandler = (e) =>{
        setEmail(e.target.value)
    }
    const phoneHandler =(e) =>{
        setPhone(e.target.value)
    }
    const passwordHandler =(e) =>{
       
        setPassword(e.target.value)

    }
    return (
        <div className="flex justify-center items-center h-full">
            <div className="border p-10 border-red-600 rounded-lg bg-yellow-50">
                <form onSubmit={formHandler}>

                    <input value={name} className="border border-black block my-2 rounded" type="text" name="name" id="1" onChange={nameHandler} />
                    <input className="border border-black block my-2 rounded" type="email" name="email" id="2"  onChange={emailHandler}/>
                    <input className="border border-black block my-2 rounded" type="text" name="phone" id="3" onChange={phoneHandler}/>
                    <input className="border border-black block my-2 rounded" type="password" name="password" id="4" onChange={passwordHandler}/>
                    <input className="border px-2 rounded block bg-yellow-200 shadow-md cursor-pointer" type="submit" value="Submit" />
                    {
                        error && <p>{error}</p>
                    }
                </form>
            </div>
        </div>
    );
};

export default SimpleForm;