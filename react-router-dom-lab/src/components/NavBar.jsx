import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/mailboxes'>Mailboxes</Link></li>
            <li><Link to='/new-mailbox'>New Mailbox</Link></li>
        </ul>
      </nav>
    );
<<<<<<< HEAD
  };

=======
  }
  
>>>>>>> 9899b50210bf374033fdfc991303546606917649
  export default NavBar;