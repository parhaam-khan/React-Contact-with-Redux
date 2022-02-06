import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clearInputEmailAction, clearInputNameAction, clearInputNumberAction } from "../../redux/actions/clearInputAction";
import { contactAction } from "../../redux/actions/contactAction";
import { setInputEmailAction, setInputNameAction, setInputNumberAction } from "../../redux/actions/setInputAction";

const Addcontact = () => {
const navigate = useNavigate()

   const inputName = useSelector(state => state.setInputName.inputName)
   const inputEmail = useSelector(state => state.setInputEmail.inputEmail)
   const inputNumber = useSelector(state => state.setInputNumber.inputNumber)
   const contacts = useSelector(state => state.contact.contacts)

   const dispatch = useDispatch()

   const handleSubmit = (e) => {
    e.preventDefault()

const checkEmail = contacts.find((item) => item.email === inputEmail && inputEmail)
const checkNumber = contacts.find((item) => item.phoneNumber === inputNumber && inputNumber)


if(!inputName || !inputEmail || !inputNumber){
    return toast.warning("please fill all fields!")
}

if(checkEmail){
    return toast.error("this email already exists!")
}
if(checkNumber){
    return toast.error("this phone number already exists!")
}

dispatch(contactAction())
dispatch(clearInputNameAction())
dispatch(clearInputEmailAction())
dispatch(clearInputNumberAction())
toast.success('contact added successfully!')
navigate('/')
   }

    return ( 
        <div>
            <h2 className="text-center my-5">add contact</h2>
            <div className="row">
<div className="col-md-6 shadow mx-auto p-5">
<form onSubmit={handleSubmit}>
<div className="form-group py-3">
<input value={inputName}  onChange={(e) => dispatch(setInputNameAction(e))} className="form-control" type="text"  placeholder="Name..."/>
</div>
<div className="form-group py-3">
<input value={inputEmail} onChange={(e) => dispatch(setInputEmailAction(e))} className="form-control" type="email"  placeholder="Email..."/>
</div>
<div className="form-group py-3">
<input onChange={(e) => dispatch(setInputNumberAction(e))} className="form-control" type="number" value={inputNumber} placeholder="Phone number..."/>
</div>
<div className="form-group py-3">
<input  className="btn btn-dark" value="add contact" type="submit"/>
</div>
</form>
</div>
            </div>
        </div>
     );
}
 
export default Addcontact;