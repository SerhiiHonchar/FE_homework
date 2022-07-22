import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const request = async () => {
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();
            setUsers(data.users);
        }
        request();
    }, []);

    return (
        <>
            <div className="container">
                <h1 className='main-title'>User information</h1>
                    <div className="user-holder">
                            {
                                users.map(user => (
                                    <div className="user-info" key={user.id}>

                                        <div className="left-col img-holder">
                                            <img src={user.image} alt="user" className="user-img" />
                                        </div>

                                        <div className="right-col">
                                            <ul className="users-list">
                                                <li className="users-list-item"><strong>Name: </strong>{user.firstName} {user.lastName}</li>
                                                <li className="users-list-item"><strong>Age: </strong>{user.age}</li>
                                                <li className="users-list-item"><strong>Gender: </strong>{user.gender}</li>
                                            </ul>
                                        <Link className='link' to={`/${user.id}`}>More info</Link>
                                        </div>

                                    </div>
                                ))
                            }
                    </div>
            </div>    
        </>
    )
}

export default Home;