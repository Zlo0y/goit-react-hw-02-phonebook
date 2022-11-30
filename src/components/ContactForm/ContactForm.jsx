import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from "nanoid";
import { Label, Input, Form, Button} from './ContactForm.styled';

export class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    handleChange = evt => {
        const { name, value } = evt.target;
        this.setState({ [name]: value });
    };

    handleSubmit = evt => {
        evt.preventDefault();
        this.props.onSubmit({ id: nanoid(), ...this.state });
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };

render() {
    const { name, number, } = this.state;

      return (
          <Form onSubmit={this.handleSubmit}>
              <Label>
                  Name
                  <Input
                      type="text"
                      name="name"
                      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                      required
                      value={name}
                      onChange={this.handleChange}
                  />
              </Label>
              <Label>
                  Phone
                  <Input
                      type="tel"
                      name="number"
                      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                      required
                      value={number}
                      onChange={this.handleChange}
                  />
              </Label>
              <Button type="submit">Add contact</Button>
          </Form>
      );
    };
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};