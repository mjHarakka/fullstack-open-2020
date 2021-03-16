import React, { useState, useEffect } from "react";
import Person from "./components/Person";
import AddPersonForm from "./components/AddPersonForm";
import FilterForm from "./components/FilterForm";
import personsService from "./services/persons";

const Notification = ({ message, messageType }) => {
  if (message === null) {
    return null;
  }

  if (messageType === "SUCCESS") {
    return <div className="success">{message}</div>;
  } else if (messageType === "ERROR") {
    return <div className="error">{message}</div>;
  } else {
    return <div className="error">Something wen't wrong with the message.</div>;
  }
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("");

  useEffect(() => {
    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const filteredPersons = persons.filter((person) => {
    return person.name.toLowerCase().includes(nameFilter.toLowerCase());
  });

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.find((person) => person.name === newName)) {
      if (
        window.confirm(
          `${newName} is already added to the phonebook, replace the old number with a new one?`
        )
      ) {
        const id = persons.find((person) => person.name === newName).id;
        const personObject = {
          id: id,
          name: newName,
          number: newNumber,
        };

        personsService
          .update(id, personObject)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== id ? person : returnedPerson
              )
            );
          })
          .catch((error) => {
            setMessage(
              `The person ${personObject.name} was already deleted from the Server`
            );
            setMessageType("ERROR");
            setTimeout(() => {
              setMessage(null);
            }, 5000);
            setPersons(persons.filter((n) => n.id !== id));
          });

        setMessage(`Updated ${personObject.name}`);
        setMessageType("SUCCESS");
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };

      personsService
        .create(personObject)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          setNewName("");
          setNewNumber("");
          //Success message handling
          setMessage(`Added ${personObject.name}`);
          setMessageType("SUCCESS");
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        })
        .catch((error) => {
          setMessage(error.response.data);
          setMessageType("ERROR");
        });
    }
  };

  const handleDelete = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personsService.remove(person.id);
      setPersons(persons.filter((p) => p.id !== person.id));
    }
    setMessage(`Removed ${person.name}`);
    setMessageType("SUCCESS");
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setNameFilter(event.target.value);
  };

  const rows = () => {
    return filteredPersons.map((person) => (
      <Person
        key={person.name}
        person={person}
        handleDelete={handleDelete.bind(this, person)}
      />
    ));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} messageType={messageType} />
      <FilterForm
        handleFilterChange={handleFilterChange}
        nameFilter={nameFilter}
      />
      <AddPersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      {rows()}
    </div>
  );
};

export default App;
