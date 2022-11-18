import { Menu } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {

  const navigate = useNavigate();

  return(
    <div className="mt-4 border border-b-brand-pantone669C border-t-brand-pantone669C">
      <div className="navbar px-4">
        <div className="flex-1">
          <button type="button" className="px-4 py-2 flex items-center space-x-2.5 text-xl text-stone-700 font-medium rounded-lg hover:bg-stone-500 hover:bg-opacity-5 hover:border-transparent focus:outline-none focus:ring-0">
            <img src='/img/logo.png' alt="Edullka Logo" className="w-9"/>
            <span>edulllka</span>
          </button>
        </div>
        <div className="flex-none gap-2">
          <div className="flex-none">
            <ul className="flex space-x-4 p-0 pr-2">
              <li>
                <button type="button" className="px-4 py-2 flex items-center space-x-2.5 text-base text-stone-700 rounded-lg hover:bg-stone-500 hover:bg-opacity-5 hover:border-transparent focus:outline-none focus:ring-0">Membresías</button>
              </li>
              <li>
                <Menu as='div' className='relative inline-block text-left'>
                  <div>
                    <Menu.Button>
                      Campamentos
                      <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                    </Menu.Button>
                  </div>
                </Menu>
                <button type="button" className="px-4 py-2 flex items-center space-x-1 text-base text-stone-700 rounded-lg hover:bg-stone-500 hover:bg-opacity-5 hover:border-transparent focus:outline-none focus:ring-0">
                  <span>Campamentos</span>
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </button>
                {/* <ul className="p-2 bg-base-100">
                  <li><a>Python</a></li>
                  <li><a>Java</a></li>
                  <li><a>JavaScript</a></li>
                </ul> */}
              </li>
              <li><button type="button" className="px-4 py-2 flex items-center space-x-1 text-base text-stone-700 rounded-lg hover:bg-stone-500 hover:bg-opacity-5 hover:border-transparent focus:outline-none focus:ring-0">Contáctanos</button></li>
              <li>
                <button type="button" onClick={() => navigate('/login')} className="ml-2 px-6 py-2 flex items-center font-medium space-x-2.5 bg-brand-pantone1925C bg-opacity-90 text-base text-white rounded-lg hover:bg-opacity-100 hover:border-transparent focus:outline-none focus:ring-0">
                  Campus
                </button>
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
