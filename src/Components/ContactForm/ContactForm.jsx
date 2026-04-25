import { useDispatch } from "react-redux";
import { addContact } from "../../Redux/ContactsSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
  number: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values.name, values.number));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={styles.form}>
        <label>Name</label>
        <Field type="text" name="name" className={styles.input} />
        <ErrorMessage name="name" component="span" className={styles.error} />

        <label>Number</label>
        <Field type="text" name="number" className={styles.input} />
        <ErrorMessage name="number" component="span" className={styles.error} />

        <button type="submit" className={styles.btn}>Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;