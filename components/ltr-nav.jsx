'use client'

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { createContext, useState, useEffect} from 'react';
import Link from 'next/link'

/*
TODO: Update navigation to account for next.js routing
TODO: Use useEffect to render menu items once on load
TODO: Right to left navigation bar has some formatting issues (menu items are flipped), if I flip them there seems to
a mismatch between the client and server renderings
TODO: Fix menu on mobile formatting
TODO: Language selection does not work on condensed menu
TODO: RTL language alignment on condensed menu should be on right side
TODO: Remove user profile in RTL 
TODO: Update language selection redirect to go to same page with new language
*/

/* Navigation hrefs include language due to level of nav routing (if resources href == resources, page would route to 
ocalhost:3000/resources not localhost:3000/en/resources), language routing includes ../ to reset route */
const navigation = [
  { name: 'Home', href: '/en', current: true },
  { name: 'Resources', href: '/en/resources', current: false },
  { name: 'ُCheck your eligibility', href: '/en/eligibility', current: false },
]
const languageSelection = [
  { name: 'العربية', href: '../ar' },
  { name: 'ُEnglish', href: '' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
    const [openLanguage, setOpenLanguage] = useState(false);

    return (
        <>   
        <Disclosure as="nav" className="border-b border-gray-200 bg-white">
            {({ open }) => (
            <>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                    <div className="flex">
                    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                        {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={classNames(
                            item.current
                                ? 'border-indigo-500 text-gray-900'
                                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                            'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </Link>
                        ))}
                    </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                        <div>
                        {console.log("Menu.Button rendered")} {/* Debugging */}
                        <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => {setOpenLanguage(!openLanguage)}}
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open language menu</span>
                            <img className="h-8 w-8 rounded-full" src='https://cdn.vectorstock.com/i/500p/84/91/world-earth-globe-icon-language-change-travel-vector-23828491.jpg' alt="" />
                        </Menu.Button>
                        </div>
                        <Transition
                        show={openLanguage}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                        >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {languageSelection.map((item) => (
                            <Menu.Item key={item.name}>
                                {({ active }) => (
                                <Link
                                    href={item.href}
                                    className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                    replace={true}
                                >
                                    {item.name}
                                </Link>
                                )}
                            </Menu.Item>
                            ))}
                        </Menu.Items>
                        </Transition>
                    </Menu>
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                    </Disclosure.Button>
                    </div>
                </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 pb-3 pt-2">
                    {navigation.map((item) => (
                    <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                        item.current
                            ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                            : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800',
                        'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                    >
                        {item.name}
                    </Disclosure.Button>
                    ))}
                    <Disclosure.Button className="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full" src='https://cdn.vectorstock.com/i/500p/84/91/world-earth-globe-icon-language-change-travel-vector-23828491.jpg' alt="" />
                    </Disclosure.Button>
                </div>

                </Disclosure.Panel>
            </>
            )}
        </Disclosure>
        </>
    )
}
