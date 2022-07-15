import myPicture from './img/me.jpeg';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <div className="container">
      <div className="img-holder">
        <img className="me-pic" src={myPicture} alt="image description" />
      </div>
      
        <h1 className="main-title">Resume</h1>
    
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
          <div className="box2 skills">
            <h2 className="title-list">Skills</h2>
            <ul>
              <li>HTML/CSS, JavaScript ES6, jQuery;</li>
              <li>SCSS, Bootstrap, responsive design;</li>
              <li>Gulp/Webpack, Git/GitHub.</li>
              <li>Independent user English.</li>
            </ul>
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
          <div className="box4 experience">
            <h2 className="title-list">Experience</h2>
            <div className="text-holder">
            Company name: “Simply contact”, Poltava
            Position: Outsourced customer support specialist for Bolt Ukraine
            Period of operation: 04.01.2021 - now
            <p>Duties:</p>
            </div>
            <ul>
              <li>Support Bolt's users and help them with the app;</li>
              <li>Train and mentoring new CS specialist;</li>
              <li>Completing daily tasks;</li>
              <li>Help with the answer on difficult cases;</li>
              <li>Work with the spreadsheets and database.</li>
            </ul>
          </div>
          <div className="box5 hobbies">
            <h2 className="title-list">Hobbies</h2>
            <div className="text-holder">
                <p>hiking ,traveling, kayaking</p>
            </div>
          </div>

      </div>

    </div>
    </>
  );
}

export default App;
