import React, { useState } from 'react'
import Form from './Components/Form'
import TeamMember from './Components/TeamMember'
import './App.css'


const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

// const team = [
//   {
//     name: 'Nathan',
//     email: 'Nathan@nathan.com',
//     role: 'Designer'
//   },
// ]

function App() {

  const [formValues, setFormValues] = useState(initialFormValues)

  const [teamMembers, setTeamMembers] = useState([])

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

    setTeamMembers([...teamMembers, newTeamMember])
    setFormValues(initialFormValues)
  }

  return (
    <div className="App">
      <Form
        values={formValues}
        submit={submitForm}
        update={updateForm}
      />
      {
        teamMembers.map(member => {
          return (
            <TeamMember details={member}/>
          )
        })
      }
    </div>
  )
}

export default App
