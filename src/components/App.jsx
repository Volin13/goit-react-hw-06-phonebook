// import { useEffect, useState } from 'react';
import {
  Section,
  Filter,
  Contacts,
  AddContactForm,
  Container,
} from '../components/index';
// import { nanoid } from 'nanoid';

const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   const savedData = localStorage.getItem('contacts');
  //   const parsedData = JSON.parse(savedData);
  //   return parsedData ?? [];
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const seveData = JSON.stringify(contacts);
  //   return localStorage.setItem('contacts', seveData);
  // }, [contacts]);

  return (
    <Container title="Phone book">
      <Section title="Add new contact" variant="h3">
        <AddContactForm />
      </Section>
      <Section title="Your contacts" variant="h3">
        <Contacts>
          <Filter />
        </Contacts>
      </Section>
    </Container>
  );
};
export default App;
