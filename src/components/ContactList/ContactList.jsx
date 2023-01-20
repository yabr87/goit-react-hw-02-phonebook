// import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <ul className={s.ContactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.ContactItem}>
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
