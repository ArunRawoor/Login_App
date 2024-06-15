import React from 'react'
import {Link} from 'react-router-dom';

import { FcHome } from "react-icons/fc";
import './ContactUs.css'

function ContactUs() {
  return (
    <div className='abcd'>this is ContactUs Page

    

     <Link to="/"> <button className='ASDF'><FcHome /></button> </Link>

     <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
  <label for="floatingPassword">Password</label>
</div>
    </div>
    

  )
}

export default ContactUs