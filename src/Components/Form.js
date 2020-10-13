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
            <form onSubmit={onSubmit}>
                <label htmlFor='name'>Name:
                    <input
                        type='text'
                        onChange={onChange}
                        value={values.name}
                        name='name'
                        placeholder='Name'
                    />
                </label>
                <label>Email:
                    <input
                        type='email'
                        onChange={onChange}
                        value={values.email}
                        name='email'
                        placeholder='Email'
                    />
                </label>
                <label htmlFor='role'>Role:
                    <select
                        name='role'
                        onChange={onChange}
                        value={values.role}
                    >
                        <option value=''>-- Select Role --</option>
                        <option value='Designer'>Designer</option>
                        <option value='Frontend'>Frontend</option>
                        <option value='Backend'>Backend</option>
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}