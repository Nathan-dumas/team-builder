import React, { useState } from 'react'
import Form from './Components/Form'
import './App.css'


const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

const team = [
  {
    name: 'Nathan',
    email: 'Nathan@nathan.com',
    role: '1'
  },
]

function App() {

  const [formValues, setFormValues] = useState(initialFormValues)

  const [teamMembers, setTeamMembers] = useState(team)

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    })
  }

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }

    if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) return

    setTeamMembers(...teamMembers, newTeamMember)
    setFormValues(initialFormValues)
  }

  return (
    <div className="App">
      <Form
        values={formValues}
        submit={submitForm}
        update={updateForm}
      />
    </div>
  )
}

export default App
