'use client'

import React, { ChangeEvent, FormEvent, useState } from 'react'
import Input from '../(components)/Inputs/input'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface InitialStateProps {
    name: string,
    email: string,
    password: string,
}

const initialState:InitialStateProps = {
    name: '',
    email: '',
    password: ''
}

export default function page() {
    const [state, setState] = useState(initialState)
    const Router = useRouter()

        function handleChange(event: ChangeEvent<HTMLInputElement>) {
            setState({...state, [event.target.name]: event.target.value})
        }

        function onSubmit(event: FormEvent) {
            event.preventDefault()

            axios.post('/api/register', state)
            .then(() => {
                Router.refresh()
            })
            .then(() => {
                setTimeout(() => {
                    Router.push('/login')
                }, 2500)    
                
            })

            .catch((error:any) => {
                throw new Error(error)
            })
        }

    return (
        <form onSubmit={onSubmit} className='text-center'>
            <div className='flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2'>
                <input placeholder='Name' id='name' type="text" name='name' onChange={handleChange} value={state.name}/>
                <input placeholder='Email' id='email' type="email" name='email' onChange={handleChange} value={state.email}/>
                <input placeholder='Password' id='password' type="password" name='password' onChange={handleChange} value={state.password}/>
                
                <button type='submit'>Submit</button>
            </div>

            <div>
                <div>Do you have an account? <Link href='/login'>Sign in</Link></div>
            </div>
        </form>
    )
}