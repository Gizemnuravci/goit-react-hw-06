import ContactForm from "./Components/ContactForm/ContactForm";
import SearchBox from "./Components/SearchBox/SearchBox";
import ContactList from "./Components/ContactList/ContactList";


function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;