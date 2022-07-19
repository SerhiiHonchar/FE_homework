import myPicture from '../../../img/me.jpeg';
import Header from '../../header';

const Education = () => {
    return (
        <>

        <Header />

        <div className="container">
            <div className="img-holder">
                <img className="me-pic" src={myPicture} alt="image description" />
            </div>

            <div className="box3 education">
                <h2 className="title-list">Education</h2>
                    <div className="text-holder">
                        <p>
                        2010 – 2015 Kyiv Professional and Pedagogical college named
                        A.Makarenko
                        Junior specialist degree – “Vocational educational teacher(computer
                        technologies)”.
                        </p>
                        <p> 
                        2022 Beetroot academy – Front end developer course
                        </p>
                    </div>
            </div>

        </div>    

        </>
    )
}

export default Education;