'use client'


import Page1 from './en-form-p1'
import Page2 from './en-form-p2'


export default function Form() {

    return (
        <form className='mt-8 px-8 flex flex-col'>
            <Page1/>
            <button className="mt-8 px-8 py-1 self-end border border-indigo-600">Continue</button>
        </form>
    )
}
