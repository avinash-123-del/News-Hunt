'use client'
import React, { useContext } from 'react'
import { UserAuth } from '../components/Context'

const page = () => {
    const { user } = UserAuth()

    return (
        <div>
            {!user ? (
                <p>yout must login first </p>
            ) : (
                <p>welcome {user?.displayName} to the news app</p>
            )
        }
        </div>
    )
}

export default page