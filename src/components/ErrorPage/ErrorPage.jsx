import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    const goBackHandler =()=>{
        navigate(-1)
    }
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-300 space-y-8 text-center">
            <h3 className="text-3xl text-red-500">Oops!!</h3>
            {
                error.status === 404 && <div>
                    <p>{error.statusText || error.message}</p>
                    <p>{error.status}</p>
                </div>
            }
            <button onClick={goBackHandler} className="border px-4 py-2 rounded-md bg-gray-600 text-white">Go back</button>
        </div>
    );
};

export default ErrorPage;