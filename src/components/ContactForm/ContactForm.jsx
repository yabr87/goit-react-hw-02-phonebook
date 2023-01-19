import Button from 'components/Button';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

const ContactForm = props => (
  <form className={s.form} autocomplete="off">
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
