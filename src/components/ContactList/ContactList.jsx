import { Ul } from './ContactList.styled';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const contactFilter = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };
  return (
    <Ul>
      {contactFilter().map(contact => {
        return <ContactItem key={contact.id} contact={contact} />;
      })}
    </Ul>
  );
};

export default ContactList;
