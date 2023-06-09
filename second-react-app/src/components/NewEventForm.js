import './NewEventForm.css'
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function NewEventForm({ addEvent }) {
    const [title, setTitle] = useState ('')
    const [date, setDate] = useState ('')
    const [location, setLocation] = useState('ankara')
    
    const resetForm = () => {
        setTitle('')
        setDate('')
        setLocation('ankara')
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        const event = {
            title: title,
            date: date,
            location: location,
            id: uuidv4()
        }
        console.log(event)
        addEvent(event)
        resetForm()
    }

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
        <label>
            <span>Event Title:</span>
            <input 
                type="text" 
                onChange={(e) => setTitle(e.target.value)} 
                value={title}>
            </input>
        </label>
        <label>
            <span>Event Date:</span>
            <input 
                type="date" 
                onChange={(e) => setDate(e.target.value)} 
                value={date}>                
            </input>
        </label>
        <label>
            <span>Event location:</span>
            <select onChange={(e) => setLocation(e.target.value)}>
                <option value="ankara">Ankara</option>
                <option value="izmir">İzmir</option>
                <option value="istanbul">İstanbul</option>
            </select>
        </label>
        <button>Submit</button>
    </form>
  )
}
