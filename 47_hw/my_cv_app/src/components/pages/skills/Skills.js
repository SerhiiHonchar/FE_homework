import myPicture from '../../../img/me.jpeg';
import Header from '../../header';

const Skills = () => {
    return (
        <>

        <Header />

        <div className="container">
            <div className="img-holder">
                <img className="me-pic" src={myPicture} alt="image description" />
            </div>

            <div className="box2 skills">
                <h2 className="title-list">Skills</h2>
                    <ul>
                        <li>HTML/CSS, JavaScript ES6, jQuery;</li>
                        <li>SCSS, Bootstrap, responsive design;</li>
                        <li>Gulp/Webpack, Git/GitHub.</li>
                        <li>Independent user English.</li>
                    </ul>
            </div>

        </div>    

        </>
    )
}

export default Skills;