import myPicture from '../../../img/me.jpeg';
import Header from '../../header';

const Info = () => {
    return (
        <>

        <Header />

        <div className="container">
            <div className="img-holder">
                <img className="me-pic" src={myPicture} alt="image description" />
            </div>
      
            <h2 className="title-list">Info</h2>

            <div className="text-holder">
                <p className="name">Name – Serhii Honchar</p>
                <p className="tel">Phone +380937621138</p>
                <a className="email" href="#">E-mail: goncharsergey95@gmail.com</a>
            </div>

            <div class="wrapper">
                <div class="box1 about">
                    <div className="text-holder">
                        <p>
                        At the moment I'm finishing my IT course Front-end developer from Beetroot academy. During studying I did my homework diligently, gained a lot of theoretical knowledge and was able to apply it in practice. There is a great desire to learn and develop in the direction of Front end development.
                        </p>
                    </div>
                </div>
            </div>

        </div>    

        </>
    )
}

export default Info;