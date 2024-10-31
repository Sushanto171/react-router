import { useLoaderData } from "react-router-dom";
import Meal from "./Meal";

const Meals = () => {
    const {meals} = useLoaderData()
    return (
        <div>
            <h3>Meals : {meals.length}</h3>
            <div className="grid grid-cols-3 gap-5 p-10">
            {
                meals.map(meal => <Meal key={meal.idMeal} meal={meal} />)
            }
            </div>
        </div>
    );
};

export default Meals;