import React from 'react'

const RegForm = () => {
  return (
    <div>
        <form action="/regs" method='POST'>
            First Name : <input value={firstName} onChange={handleChangeF}/>
            <br></br>
            Last Name ; <input value={lastName} onChange={handleChangeL}/>
            <br></br>
        </form>

    </div>
  )
}

export default RegForm