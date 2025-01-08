// !Using If - Else
import React, { useState } from 'react'

const IsLoggedState = () => {

     const [isLoggedIn, setIsLoggedIn] = useState(false);
        const handleToggle = () => setIsLoggedIn(!isLoggedIn);
    
        let button;
        if (isLoggedIn) {
          button = (
            <button className="btn btn-warning" onClick={handleToggle}>
              Logout
            </button>
          );
        } else {
          button = (
            <button className="btn btn-primary" onClick={handleToggle}>
              Login
            </button>
          );
        }



   return (
     <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container-fluid">
           {/* Navbar Brand */}
           <a className="navbar-brand" href="#">
             MyApp
           </a>


           <div className="collapse navbar-collapse" id="navbarContent">
             {/* Navbar Links */}
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               <li className="nav-item">
                 <a className="nav-link active" aria-current="page" href="#">
                   Home
                 </a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="#">
                   Features
                 </a>
               </li>
             </ul>

             {/* Right-aligned Button */}
             <div>{button}</div>
           </div>
         </div>
       </nav>
     </div>
   );

}
export default IsLoggedState


{/* //!Task login lougout using ternary in useState */}

//  import React, { useState } from 'react'
// const IsLoggedState = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const handleToggle = () => setIsLoggedIn(!isLoggedIn);
        
//   return (
//     <div>
        
//        <div style={{ textAlign: "center", marginTop: "50px" }}>
//          <h1>{isLoggedIn ? "Welcome !" : "Please log in."}</h1>
//          <div>
//            {/* <div>{content}</div>  */}
//            {isLoggedIn ? 
//            <button  className='btn btn-primary m-2' onClick={handleToggle}>Logout</button> 
//            : 
//            <button  className='btn btn-warning m-2' onClick={handleToggle}>Login</button>}
//          </div>
//        </div>
//     </div>
//   )
// }

// export default IsLoggedState