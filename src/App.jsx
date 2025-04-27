import { useState } from 'react'
import './App.css'
import Button from './components/badge/Badge.jsx'
import Navbar from './components/navbar/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='space-y-10'>
      <h1 className='text-3xl font-bold'>Hello world!</h1>
      <div>
        <Button label={"Primary Badge"} variant={"primary"} size={"small"} />
        <Button label={"Secondary Badge"} variant={"secondary"} size={"medium"} />
        <Button label={"Success Badge"} variant={"success"} size={"large"} />
        <Button label={"Warning Badge"} variant={"warning"} />
        <Button label={"Error Badge"} variant={"error"} />
      </div>

      <Navbar variant="primary" />
      <Navbar variant="secondary" orientation="end" />
      <Navbar variant="success" orientation="evenly" />
      <Navbar variant="warning" orientation="between" />
      <Navbar variant="error" orientation="around" />
      <Navbar variant="info" orientation="around" />
    </div>
  )
}

export default App
