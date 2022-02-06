import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteContactAction } from "../../redux/actions/contactAction";

const Home = () => {

    const contacts = useSelector(state => state.contact.contacts)
const dispatch = useDispatch()
    const deleteHandler = (id) => {
    dispatch(deleteContactAction(id))
    toast.success('contact deleted successfully')
    }
    return ( 
              <div>
           <div className="row">
           <div className="col-md-12 my-5 text-end">
               <Link to="/add" className="btn btn-outline-dark">add contact</Link>
           </div>
           {contacts.length === 0 ? <h3 className="text-center mt-5">there is no contact yet!!</h3> :
            <div className="col-md-10">
           <h2 className="text-center my-3">contacts</h2>
           <table className="table table-hover">
            <thead className="text-white bg-dark text-center">
             <tr>
                 <th scope="col">
                     #
                 </th>
                 <th scope="col">
                     Name
                 </th>
                 <th scope="col">
                     Email
                 </th>
                 <th scope="col">
                     Phone number
                 </th>
                 <th scope="col">
                     actions 
                 </th>
             </tr>
            </thead>
            <tbody>
                {contacts.map((item) => {
                    return (
                        <tr className="text-center" key={item.id}>
                             <td>{item.id} </td>
                         <td> {item.name}</td>
                         <td> {item.email} </td>
                         <td>{item.phoneNumber} </td>
                         <td>
                          <Link to= {`edit/${item.id}`} className="btn btn-small btn-primary me-2">edit</Link> 
                          <button onClick={() => deleteHandler(item.id)} type="button" className="btn btn-small btn-danger">Delete</button>
                           </td>
                        </tr>

                    )
                })}
            </tbody>
           </table>
           </div> }
           
           </div>
        </div> 
        
        
     );
}
 
export default Home;