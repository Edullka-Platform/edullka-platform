import React from "react";
import logo from "../../assets/img/logo.png";

export const Navbar: React.FC<{}> = () => {
  return(
    <div className="mt-5 border-2 border-b-brand-pantone669C border-t-brand-pantone669C">
        <div className="navbar ">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl" href="/">
              <img src={logo} alt="Edullka Logo" className="w-10 mr-1" />
              edullka
            </a>
          </div>
          <div className="flex-none gap-2">
            <div className="flex-none">
              <ul className="menu menu-horizontal p-0 pr-2">
                <li><a>Membresías</a></li>
                <li tabIndex={0} >
                  <a>
                    Campamentos
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                  </a>
                  <ul className="p-2 bg-base-100">
                    <li><a>Python</a></li>
                    <li><a>Java</a></li>
                    <li><a>JavaScript</a></li>
                  </ul>
                </li>
                <li><a>Contáctanos</a></li>
                <li>
                  <a href="/login" className="btn bg-brand-pantone1925C border-1 border-brand-pantone1925C text-white h-10">
                    Campus
                  </a>
                </li>
              </ul>
            </div>

            {/* --------------------- SI EL USUARIO ESTÁ LOGUEADO APARECE SU FOTO ---------------------------- */}


            {/* <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
    </div>
  )
};
