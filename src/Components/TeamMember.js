import React from 'react'

export default function TeamMember(props) {
    const { details } = props

    return (
        <div>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}