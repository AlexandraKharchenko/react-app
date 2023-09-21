import {
    Routes,
    Route,
} from "react-router-dom"
import HomePage from "../pages/Home";
import Item from "../pages/Item";
import ItemsList from "../pages/ItemsList";
const NavRoutes = () => {
    return (<Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/todoList" element={<ItemsList/>}/>
        <Route path="/todoList/:todoId" element={<Item/>}/>
        <Route
            path="*"
            element={
                <div style={{padding: "1rem"}}>
                    <p>There's nothing here!</p>
                </div>
            }
        />
    </Routes>)
}
export default NavRoutes;