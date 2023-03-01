import  { useState} from "react";
import PropTypes from 'prop-types';
import css from '../Form/Form.module.css';


export function Form({ onSubmit })  {

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const handleChange = e => {
    switch (e.target.name){
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        console.log(`Error in ${e.target.name}`)    
    }
  }

  const handleSubmit = e =>{
    e.preventDefault();
    onSubmit({name, number})
    setName('');
    setNumber('')
  }

    return(
        <form action="" onSubmit={handleSubmit}>
        <label htmlFor="" className={css.form}>    
        <p className={css.title}>Name</p>
            <input 
            className={css.input_form}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
                />
        <p className={css.title}>Number</p>
             <input
             className={css.input_form}
             value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
                  />
        </label>
        <button className={css.add_btn} type="submit">Add contact</button>      
          </form>
    )
}


Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};