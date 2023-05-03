const ContactList = ({ contacts, deleteById }) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>
        {contact.name}: {contact.number}
        <button
          type="button"
          onClick={() => {
            deleteById(contact.id);
          }}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
export default ContactList;
