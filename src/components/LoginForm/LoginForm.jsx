import { useRef, useState } from "react";


const LoginForm = () => {
    const resName = useRef('');
    const resEmail = useRef('');
    const resPassword = useRef(null)
    const [error, setError] = useState('')
    const formHandler = (e) =>{
        e.preventDefault()
        const {current} = resPassword
        if(current.value.length < 6){
            setError('Password must be 6 characters or longer')
        }else{
            setError('')
            console.log(resName.current.value);
            console.log(resEmail.current.value);
            console.log(resPassword.current.value);
            console.log('submitted')
        }
    }
    return (
        <div className="flex justify-center items-center h-full">
        <div className="border p-10 border-red-600 rounded-lg bg-yellow-50">
            <form onSubmit={formHandler}>

                <input ref={resName} className="border border-black block my-2 rounded" type="text" name="name" id="1" />
                <input ref={resEmail} className="border border-black block my-2 rounded" type="email" name="email" id="2"  />
                <input ref={resPassword} className="border border-black block my-2 rounded" type="password" name="password" id="4"/>
                <input className="border px-2 rounded block bg-yellow-200 shadow-md cursor-pointer" type="submit" value="Submit" />
               {
                error && <p>{error}</p>
               }
            </form>
        </div>
    </div>
    );
};

export default LoginForm;