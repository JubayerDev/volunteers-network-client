/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { Link } from 'react-router-dom'
import navImg from '../../logos/Group 1329.png'

const navigation = [
    { name: 'Home', to: '/', current: false },
    { name: 'Donation', to: '/donation', current: false },
    { name: 'Events', to: '/events', current: false },
    { name: 'Blog', to: '/blog', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <Disclosure as="nav" className="">
            {() => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="w-32 flex items-center">
                                    <Link to='/'>
                                        <img src={navImg} alt="" />
                                    </Link>
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4 absolute right-0">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.to}
                                                className='text-[#0B0B0B] px-3 py-2 rounded-md text-sm font-medium'

                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                        <Link to='/register'>
                                            <button className='text-sm py-[0.5rem] px-[2rem] bg-[#3F90FC]  text-white rounded-[6px]'>Register</button>
                                        </Link>
                                        <Link to='/admin'>
                                            <button className='text-sm py-[0.5rem] px-[2rem] bg-[#434141]  text-white rounded-[6px]'>Admin</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    )
}
