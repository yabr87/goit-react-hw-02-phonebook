// import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.contactItem}>
            {name}: {number}
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  // bla: PropTypes.string,
};

ContactList.defaultProps = {
  // bla: 'test',
};

export default ContactList;
