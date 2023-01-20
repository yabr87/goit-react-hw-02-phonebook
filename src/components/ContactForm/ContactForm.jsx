import Button from 'components/Button';
// import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

const ContactForm = ({ onFormSabmit }) => (
  <form className={s.form} autoComplete="off" onSubmit={e => onFormSabmit(e)}>
    <label className={s.label} htmlFor="contactsName">
      Name
    </label>
    <input
      className={s.input}
      id="contactsName"
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
    <label className={s.label} htmlFor="contactsTel">
      Number
    </label>
    <input
      className={s.input}
      id="contactsTel"
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
    />

    <Button text="Add contact" type="submit" />
  </form>
);

ContactForm.propTypes = {
  // bla: PropTypes.string,
};

ContactForm.defaultProps = {
  // bla: 'test',
};

export default ContactForm;
