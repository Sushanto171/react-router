import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Puff } from 'react-loader-spinner'
;(<Puff
    visible={true}
    height="80"
    width="80"
    color="#4fa94d"
    ariaLabel="puff-loading"
    wrapperStyle={{}}
    wrapperClass=""
    />)
const Home = () => {
    const navigation = useNavigation()
    return (
        <div className="flex h-screen flex-col">
            <Header />
            <div className="grid grid-cols-4 flex-grow">
                <div className="bg-gray-300  border-r p-5">
                    <h1>A Side section</h1>
                </div>
                <div className="col-span-3">
                {
                    navigation.state === "loading"?<p className=" h-full flex justify-center items-center"><Puff/></p> : <Outlet />
                }
            
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;