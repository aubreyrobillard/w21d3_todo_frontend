import {createBrowserRouter, CreateBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import App from './App'
import Show from './pages/Show'
import Index from './pages/Index'
import Post from './components/Post'
import { indexLoader, ShowLoader } from './loaders';
import { createAction, updateActon, deleteAction } from './actions'

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={indexLoader}/>
            <Route path="post/:id" element={<Show/>} loader={ShowLoader}/>
            <Route path="create" action={createAction}/>
            <Route path='update/:id' action={updateActon}/>
            <Route path='delete/:id' action={deleteAction}/>
        </Route>
    </>
));

export default router;