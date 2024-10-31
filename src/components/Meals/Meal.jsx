import { Link, useNavigate, useNavigation } from "react-router-dom";

const Meal = ({meal}) => {
    const {idMeal, strMeal, strMealThumb} =meal
    const navigate = useNavigate()
    const btnHandler = ()=>{
        navigate(`/meal/${idMeal}`)
    }
    return (
        <div className="border p-5 rounded-md space-y-3">
            <h5 className="text-sm">id: {idMeal}</h5>
            <h3 className="font-semibold">{strMeal}</h3>
            <img src={strMealThumb} alt={strMeal} />
            <div className="flex justify-between">
                <button onClick={btnHandler} className="border p-2 rounded bg-yellow-200 hover:bg-yellow-300">Show more</button>
                <Link to={`/meal/${idMeal}`} ><button className="border p-2 rounded bg-yellow-200 hover:bg-yellow-300">Show more</button></Link>
            </div>
        </div>
    );
};

export default Meal;