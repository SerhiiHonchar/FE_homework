import myPicture from '../../../img/me.jpeg';
import Header from '../../header';

const Experience = () => {
    return (
        <>

        <Header />

        <div className="container">
            <div className="img-holder">
                <img className="me-pic" src={myPicture} alt="image description" />
            </div>

            <div className="box4 experience">
                <h2 className="title-list">Experience</h2>
                    <div className="text-holder">
                        <p>
                        Company name: “Simply contact”, Poltava
                        Position: Outsourced customer support specialist for Bolt Ukraine
                        Period of operation: 04.01.2021 - now
                        Duties:
                        </p>
            </div>
                <ul>
                <li>Support Bolt's users and help them with the app;</li>
                <li>Train and mentoring new CS specialist;</li>
                <li>Completing daily tasks;</li>
                <li>Help with the answer on difficult cases;</li>
                <li>Work with the spreadsheets and database.</li>
                </ul>
          </div>

        </div>    

        </>
    )
}

export default Experience;