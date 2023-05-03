import { Component } from 'react';
import { Notify } from 'notiflix';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  isUnique = (objArr, name) => {
    const isIncludes = objArr.some(
      element => element.name.toLowerCase() === name.toLowerCase()
    );
    if (isIncludes) {
      return true;
    }
    return false;
  };
  formReset = () => {
    this.setState({ name: '', number: '' });
  };
  onFormSubmit = event => {
    event.preventDefault();
    const { name } = event.currentTarget.elements;
    if (this.isUnique(this.props.check, name.value)) {
      Notify.info(`${name.value} is already in your contacts`);
      return;
    }
    this.props.addContact({
      name: this.state.name,
      number: this.state.number,
    });

    this.formReset();
  };
  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { onFormSubmit, onInputChange } = this;
    const { name, number } = this.state;
    return (
      <form onSubmit={onFormSubmit}>
        <label>
          Name
          <input
            onChange={onInputChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Phone
          <input
            onChange={onInputChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit">Добавить контакт</button>
      </form>
    );
  }
}
export default Form;
