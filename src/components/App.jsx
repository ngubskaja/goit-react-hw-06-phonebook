import {useState, useEffect} from "react";
import { nanoid } from 'nanoid'
import {Form} from './Form/Form'
import {Filter} from './Filter/Filter'
import { ContactList } from "./ContactList/ContactList";
import css from '../index.css'



export function App() {
  const [contacts, setContacts] = useState(()=> JSON.parse(window.localStorage.getItem('contacts')) ?? []);


  const [filter, setFilter] =  useState('')

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const addContact = ({name, number}) =>{
    const contact = {
      id:nanoid(),
      name,
      number,
    }

    const checkContact = contacts.find(
      contact=> contact.name.toLowerCase() === name.toLowerCase()
    )
    if (checkContact) {
      alert(`${name} is already in contacts.`)
      return
    }

    setContacts(prevState => [contact, ...prevState])
  }
  const filterByName = e=> {
    setFilter(e.currentTarget.value)
  } 


  const visibleContacts = () => {
    const normalized = filter.toLowerCase()
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalized)
      )
  }

  const handleDeleteContact = id => {
    setContacts(prevState => prevState.filter(el => el.id !== id))
  }

    return(
    <div className={css.phonebook}>
      <h2>Phonebook</h2>
   <Form onSubmit={addContact}/>
      <h3>Contacts</h3>
   <Filter filterName={filterByName} value={filter}/>    
   <ContactList onDelete={handleDeleteContact} contacts={visibleContacts()}/>
    </div>
    )
  }
