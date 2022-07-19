import myPicture from '../../../img/me.jpeg';
import Header from '../../header';

const Hobbies = () => {
    return (
        <>

        <Header />

        <div className="container">
            <div className="img-holder">
                <img className="me-pic" src={myPicture} alt="image description" />
            </div>

            <div className="box5 hobbies">
                <h2 className="title-list">Hobbies</h2>
                    <div className="text-holder">
                        <p>hiking ,traveling, kayaking</p>
                    </div>
            </div>

        </div>    

        </>
    )
}

export default Hobbies;