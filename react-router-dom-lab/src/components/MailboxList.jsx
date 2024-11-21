import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
    return (
        <>
         <h1>Mailbox List</h1>
         <ul>
         {props.mailboxes.map((chosenMailbox) =>(
        <li key={chosenMailbox._id} className="mail-box">
            <Link to={`/mailboxes/${chosenMailbox._id}`}>
            Mailbox {chosenMailbox._id}</Link>
        </li>
        ))}
        </ul>
        </>
    )
}