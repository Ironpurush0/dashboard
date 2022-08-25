import React from 'react'

import {Link, NavLink} from 'react-router-dom'

import {SiShopware} from 'react-icons/si'
import {MdOutlineCancel} from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import {links} from '../data/data/dummy'

import { useStateContext } from '../context/ContextProvider'

const SideBar = () => {
    const {activeMenu, setActiveMenu} = useStateContext()

    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white bg-blue-500 text-md m-2';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md text-gray-700 hover:bg-gray-200'

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
        {
            activeMenu && (
                <>
                <div className='flex justify-between items-center'>
                    <Link to="/" className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight">
                        <span>Orders</span>
                    </Link>
                    <TooltipComponent position='BottomCenter' content="cancel">
                        <button type="button" onClick={() => setActiveMenu((prevState) => !prevState)} className="md:hidden text-xl mt-4 block rounded-full p-3 hover:bg-light-gray">
                            <MdOutlineCancel />
                        </button>
                    </TooltipComponent>
                </div>
                <div className='mt-10'>
                <NavLink className={({ isActive }) => isActive ? activeLink : normalLink } to="/" onClick={() => {}}>
                                        <span className='capitalize'>
                                            Dashboard
                                        </span>
                                    </NavLink>
                    {links.map(item => (
                        <div key={item.title}>
                            <p className='text-gray-400 mt-4 uppercase'>{item.title}</p>
                            {
                                item.links.map((link) => (
                                    <NavLink className={({ isActive }) => isActive ? activeLink : normalLink } to={`/${link.name}`} key={link.name} onClick={() => {}}>
                                        {link.icon}
                                        <span className='capitalize'>
                                            {link.name}
                                        </span>
                                    </NavLink>
                                ))
                            }
                        </div>
                    ))}
                </div>
                </>
            )
        }
    </div>
  )
}

export default SideBar