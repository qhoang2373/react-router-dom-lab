import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import MailboxDetails from './components/MailboxDetails';

const App = () => {
  const[mailboxes, setMailboxes] = useState(initialState)

  const addMailbox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1
    setMailboxes([...mailboxes, newMailboxData])
  }

return (
  <>
    <NavBar />
    <Routes>
    <Route path="/" element={<main><h1>Post Office</h1></main>} />
    <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
    <Route path="/new-mailbox" element={<MailboxForm addMailbox={addMailbox} />} />
    <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
    <Route path='*' element={<h2>Whoops, Mailbox Not Found</h2>}/>

    </Routes>
  </>
);
};

export default App;

