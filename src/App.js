
// import './App.css';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import React from 'react';
// import Home from './Components/Home';
// import Blog from './Components/Blog';
// import PhotoGallery from './Components/PhotoGallery';
// import ContactUs from './Components/ContactUs';
// import Counter from './Components/Counter';
// import UserData from './Components/UserData';
// import Events from './Components/Events';
// import ReactEvents from './Components/ReactEvents';
// import ReactValidate from './Components/ReactValidate';
// import ReactForm from './Components/ReactForm';
// import ReactVlaidForm from './Components/ReactVlaidForm';
// import FormExample from './Components/FormExample';
// import { FcHome } from "react-icons/fc";
// import { BsCameraReelsFill } from "react-icons/bs";
// import One from './Components/One';
// import Two from './Components/Two';
// import ParentComponent from './Components/ParentComponent';
// import MyComponent from './Components/MyComponent';


// function App() {
//   return (
//     <div className="App">
//       {/* <Router>

//       <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <div class="container-fluid">
//     <Link class="navbar-brand" to="/">Navbar</Link>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNavDropdown">
//       <ul class="navbar-nav">
//         <li class="nav-item">
//           <Link class="nav-link active" aria-current="page" to="/"><FcHome />Home</Link>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-link" to="/Blogs"><BsCameraReelsFill />Blog</Link>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-link" to="/ContactUs">ContactUs</Link>
//         </li>
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown link
//           </a>
//           <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//             <li><Link class="dropdown-item" to="/UserData">UserData</Link></li>
//             <li><a class="dropdown-item" href="#">Another action</a></li>
//             <li><a class="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-link" to="/ReachOut">ReachOut</Link>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route path='/Blogs' element={<Blog />} />
//           <Route path='/PhotoGallery' element={<PhotoGallery />} />
//           <Route path='/ContactUs' element={<ContactUs />} />
//           <Route path='/ReachOut' element={<FormExample/>} />
//           <Route path='/UserData' element={<UserData/>} />


//         </Routes>
//       </Router> */}

    

//       {/* <UserData/> */}
//       {/* <Events/> */}
//       {/* <ReactEvents/> */}

//       {/* <ReactValidate/> */}
//       {/* <ReactForm/> */}
//       {/* <ReactVlaidForm/> */}

//       {/* <One/>
//       <Two/> */}

//       {/* <ParentComponent/> */}

//       <h3>This is the Class Component Example with the Component Life Cycale  </h3>

//       <MyComponent/>
//       <br></br>
//       <br></br>


//       <h4>This is the Functional Component With the React Hooks </h4>


//       <Counter/>

      
//     </div>
//   );
// }

// export default App;











import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import Dashboard from './Components/Dashboard';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
