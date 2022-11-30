import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import { Item, List, Button } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <List>
            {contacts.map((contact) => (
                <Item key={contact.id}>
                    {<ContactItem contact={contact}/>}
                    <Button type="button" onClick={() => onDeleteContact(contact.id)}>
                        Delete
                    </Button>
                </Item>
            ))}
        </List>
    );
};
    
    
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired).isRequired,
    onDeleteContact: PropTypes.func.isRequired
};