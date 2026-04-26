import { useDispatch } from "react-redux";
import { deleteContact } from "../../Redux/contactsSlice.js";
import styles from "./Contact.module.css";

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button 
        className={styles.btn} 
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;