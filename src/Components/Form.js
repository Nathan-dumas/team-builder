import React from 'react'

export default function Form(props) {

    const { values, update, submit } = props

    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <div>
            <form>
                <label htmlFor='name'>Name:
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                    />
                </label>
                <label>Email:
                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
                    />
                </label>
                <label htmlFor='role'>Role:
                    <select
                        name='role'
                    >
                        <option value=''>-- Select Role --</option>
                        <option value='1'>Designer</option>
                        <option value='2'>Frontend</option>
                        <option value='3'>Backend</option>
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}