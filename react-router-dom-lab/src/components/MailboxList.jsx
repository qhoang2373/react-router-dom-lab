import { Link } from 'react-router-dom';




<li key={mailbox._id} className="mail-box">
  <Link to={`/mailboxes/${mailbox._id}`}>
    Mailbox {mailbox._id}
  </Link>
</li>
