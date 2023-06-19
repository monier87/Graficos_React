import { Routes, Route } from 'react-router-dom'
import Dashboard from '../../Pages/dashboard/index'
import Inventarios from '../../Pages/inventarios/index'
import Ordenes from '../../Pages/ordenes/index'
import Usuarios from '../../Pages/usuarios/index'


function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path='/Inventario' element={<Inventarios/>}>Inventario</Route>
            <Route path='/Ordenes' element={<Ordenes/>}>Ordenes</Route>
            <Route path='/Usuarios' element={<Usuarios/>}>Usuarios</Route>

        </Routes>

    )

}

export default AppRoutes;