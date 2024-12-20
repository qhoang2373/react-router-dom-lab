import { useState } from "react"
import { useNavigate } from "react-router-dom";

const initialState = {
    _id: 0,
    boxholder: '', 
    boxSize:'',
}

const MailboxForm = (props) => {
    const navigate = useNavigate();
    const [formInfo, setFormInfo] = useState(initialState)

const handleSubmit = (event) => {
    event.preventDefault();
    props.addMailbox(formInfo);
    setFormInfo(initialState);
    navigate("/mailboxes");
}

const handleInputChange = (event) => {
    setFormInfo({...formInfo, [event.target.name]:event.target.value})
}

return (
    <>
        <h2>Add New Mailbox</h2>
        <form onSubmit={handleSubmit}>
        <label htmlFor="boxholder">Enter Boxholder: </label>
        <input 
            name="boxholder" 
            id="boxholder"
            onChange={handleInputChange}
            value={formInfo.boxholder} 
            />

        <label htmlFor="boxSize">Select Box Size: </label>

        <select id="boxSize" name="boxSize" onChange={handleInputChange} value={formInfo.boxSize} required>
            <option value="">--Select Size--</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
        </select>
        <button type="submit">Submit</button>
    </form>
    </>
    )
};

export default MailboxForm;