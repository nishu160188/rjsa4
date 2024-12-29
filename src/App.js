import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Contact Manager</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default App;
