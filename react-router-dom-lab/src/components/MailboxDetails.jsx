import { useParams } from "react-router-dom"

const MailboxDetails = ({ props }) => {
    const { mailboxId } = useParams()
    const currentMailbox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId))



      
    return (
        <>
        <h2>MailBox {currentMailbox._id}</h2>
        <dl>
          <dt>Box Size: {currentMailbox.boxSize}</dt>
          <dt>Box Holder: {currentMailbox.boxholder}</dt>
          <dt>Box Number: {currentMailbox._id}</dt>
        </dl>
      </>
  )
}




export default MailboxDetails;