import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        const request = async () => {
            const response = await fetch(`https://dummyjson.com/users/${id}`);
            const data = await response.json();
            console.log(data);
            setUser(data);
        }
        request();

        },[id]);

        return(
            <>

            <div className="container">

                    <div className="user-holder-single-page">
                        <div className="img-holder">
                            <img src={user.image} alt="user" className="user-img img-info" />
                        </div>

                        <div className="info-holder">
                                <ul className="info-list">
                                    <li className="user-name users-list-item">{user.firstName} {user.lastName}</li>
                                    <li className="users-list-item"><strong>Email: </strong>{user.email}</li>
                                    <li className="users-list-item"><strong>Phone: </strong>{user.phone}</li>
                                </ul>
                        </div>    
                    </div>

            </div>
        </>
        )
    
}

export default User;