import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ContactForm from './components/ContactForm';
import About from './components/About';
import Store from './components/Store';
import Blog from './components/Blog';
import Login from './components/Login';
import Register from './components/Register';
import Product from './components/Product';
import PageNotFound from './components/PageNotFound';
import Dashboard from './components/Dashboard';
import Account from './components/Account';
import PageLayout from './components/PageLayout';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<PageLayout/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<ContactForm/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/store' element={<Store/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/account' element={<Account/>}/>
    </Route>
    <Route path='*' element={<PageNotFound/>}/>
    </Routes>
      {/* <Routes>
        <Route path="/" element={<PageLayout/>}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/employees' element={<EmployeesPage/>}></Route>
          <Route path='/employees/create' element={<AddEmployeePage/>}></Route>
          <Route path='/employees/edit/:id' element={<EditEmployeePage/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes> */}
    </>
  );
}

export default App;
