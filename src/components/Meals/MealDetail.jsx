import { useLoaderData, useNavigate } from "react-router-dom";
const MealDetail = () => {
    const {meals} = useLoaderData()
    const navigate = useNavigate()
   const meal = meals[0]
  const {idMeal, strMeal, strMealThumb} =meal
  console.log(meal)
    return (
        <div>
            <h3>meal detail</h3>
            <div className="border p-5 rounded-md space-y-3">
            <h5 className="text-sm">id: {idMeal}</h5>
            <h3 className="font-semibold">{strMeal}</h3>
          <img className="w-full h-96 object-cover" src={strMealThumb} alt="" />
        </div>
        <button onClick={()=>navigate(-1)} className="border p-2 rounded bg-yellow-200 hover:bg-yellow-300">Go Back</button>
        </div>
    );
};

export default MealDetail;