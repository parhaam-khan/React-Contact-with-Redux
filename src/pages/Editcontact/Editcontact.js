import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { clearInputEmailAction, clearInputNameAction, clearInputNumberAction } from "../../redux/actions/clearInputAction";
import { editContactAction } from "../../redux/actions/contactAction";
import {  setInputEmailAction, setInputNameAction, setInputNumberAction } from "../../redux/actions/setInputAction";

const Editcontact = () => {

const {id} = useParams()

const navigate = useNavigate()

   const inputName = useSelector(state => state.setInputName.inputName)
   const inputEmail = useSelector(state => state.setInputEmail.inputEmail)
   const inputNumber = useSelector(state => state.setInputNumber.inputNumber)
   const contacts = useSelector(state => state.contact.contacts)

   const dispatch = useDispatch()

   const currentContact = contacts.find((item) => item.id === parseInt(id) )

   useEffect(() => {
if(currentContact){
    dispatch({ type: 'EDIT-INPUT-NAME', payload: currentContact.name})
    dispatch({ type: 'EDIT-INPUT-EMAIL', payload: currentContact.email})
    dispatch({ type: 'EDIT-INPUT-NUMBER', payload: currentContact.phoneNumber})
}
   },[currentContact])
   

   const handleSubmit = (e) => {
    e.preventDefault()

const checkEmail = contacts.find((item) => item.id !== parseInt(id) && item.email === inputEmail)
const checkNumber = contacts.find((item) =>  item.id !== parseInt(id) && item.phoneNumber === inputNumber)


if(!inputName || !inputEmail || !inputNumber){
    return toast.warning("please fill all fields!")
}

if(checkEmail){
    return toast.error("this email already exists!")
}
if(checkNumber){
    return toast.error("this phone number already exists!")
}

dispatch(editContactAction(id))

toast.success('contact updated successfully!')
dispatch(clearInputNameAction())
dispatch(clearInputEmailAction())
dispatch(clearInputNumberAction())
navigate('/')
   }

const cancelHandler = () => {
 dispatch(clearInputNameAction())
dispatch(clearInputEmailAction())
dispatch(clearInputNumberAction())
}
    return ( 
        <div>
            {currentContact ? 
            (<div>
             <h2 className="text-center my-5">edit contact "{id}"</h2>
        <div className="row">
<div className="col-md-6 shadow mx-auto p-5">
<form onSubmit={handleSubmit}>
<div className="form-group py-3">
<input  value={inputName}  onChange={(e) => dispatch(setInputNameAction(e))} className="form-control" type="text" placeholder="Name..."/>
</div>
<div className="form-group py-3">
<input  value={inputEmail}  onChange={(e) => dispatch(setInputEmailAction(e))} className="form-control" type="email" placeholder="Email..."/>
</div>
<div className="form-group py-3">
<input  value={inputNumber}  onChange={(e) => dispatch(setInputNumberAction(e))} className="form-control" type="number" placeholder="Phone number..."/>
</div>
<div className="form-group py-3">
<input  className="btn btn-dark" value="update contact" type="submit"/>
<Link to="/" onClick={cancelHandler} className="btn btn-danger ms-3">cancel</Link>
</div>
</form>
</div>
        </div> </div>) : <h3 className="text-center mt-3">contact with id {id} is not exist</h3> }
        
    </div>
     );
}
 
export default Editcontact;