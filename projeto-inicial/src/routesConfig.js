import Home from "./pages/home/Home";


const routesConfig = [
    {
        path: "/",
        component:Home,
        exact:true
    },
    {
        path: "/user",
        component:User,
        exact:true
    }
]

export default routesConfig;