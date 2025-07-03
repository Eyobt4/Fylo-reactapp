import logo from "./assets/images/logo.svg"
import illustration1 from "./assets/images/illustration-intro.png"
import illustration2 from"./assets/images/bg-curvy-mobile.svg"
import iconaccess from "./assets/images/icon-access-anywhere.svg"
import iconany from "./assets/images/icon-any-file.svg"
import iconarrow from "./assets/images/icon-arrow.svg"
import iconsecurity from "./assets/images/icon-security.svg"
import iconcollaboration from "./assets/images/icon-collaboration.svg"
import iconproductive from "./assets/images/illustration-stay-productive.png"
import iconquote from "./assets/images/bg-quotes.png"
import iconprofile1 from "./assets/images/profile-1.jpg"
import iconprofile2 from "./assets/images/profile-2.jpg"
import iconprofile3 from "./assets/images/profile-3.jpg"
import iconemail from "./assets/images/icon-email.svg"
import iconlocation from "./assets/images/icon-location.svg"
import iconphone from "./assets/images/icon-phone.svg"

function Page(){
  
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      <title>Fylo </title>
      <div className="navbar"> 
        <img src={logo} className="icon"/>
        <ul className="left-nav">
          <li>Features</li>
          <li>Team</li>
          <li>Sign In</li>
        </ul>
      </div>
      <div  className="container" id="home">
    
        <img src={illustration1} className="home-svg"/>
        <h1>All your files in one secure <br/>
            location, accessible <br/> 
            anywhere.
        </h1>
        <h2>Fylo stores all your most important files in one secure location. Access them wherever 
        you need, share and collaborate with friends family, and co-workers.</h2>
      
        <button>Get Started</button> 
      
      </div>
      <div className="access">
        <img src={iconaccess} className="icon-access"/>
        <h1>Access your files, anywhere</h1>
        <h2>
        The ability to use a smartphone, tablet,or<br/> computer to access your account means your<br/>
        files follow you everywhere.</h2>
      </div>
      <div className="security">
        <img src={iconsecurity}/>
        <h1>
          Security you can trust</h1>

        <h2>2-factor authentication and user-controlled<br/> encryption are just a couple of the security<br/>
        features we allow to help secure your files.
        </h2>
      </div>
      <div className="collaboration">
        <img src={iconcollaboration}/>
        <h1>
          Real-time collaboration</h1>
        <h2>
            Securely share files and folders with friends,<br/>family and colleagues for live collaboration. 
            No <br/>email attachments required.
        </h2>
      </div>
      <div className="store">
        <img src={iconany}/>
        <h1>
          Store any type of file</h1>
        <h2>
            Whether you're sharing holidays photos or work<br/> documents, Fylo has you covered allowing for all<br/> 
            file types to be securely stored and shared. 
        </h2>
      </div>
      <div className="productive">
        <img src={iconproductive}/>
        <h1>
         Stay productive, wherever you are</h1>
        <h2>
            Never let location be an issue when accessing<br/>  your files. Fylo has you covered for all of your file <br/> 
            storage needs.
        </h2>
        <h2>
          Securely share files and folders with friends,<br/> family and colleagues for live collaboration. No <br/> email 
          attachments required.

        </h2>
        <div className="see">
          <h3>
            See how Fylo works
          </h3>
          <img src={iconarrow}/>
        </div>
      </div>
      <div className="testimony">
        <img src={iconquote}/>
        <div className="fylo">
          <h3>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
          become a well-oiled collaboration machine.</h3>
          <div className="profile">
            <img src={iconprofile1} className="profile-img"/>
            <div>
              <h2>Satish Patel</h2><br/>
              <h3>Founder & CEO, Huddle</h3>
            </div>
          </div>
        </div>
        <div className="fylo">
          <h3>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
          become a well-oiled collaboration machine.</h3>
          <div className="profile">
            <img src={iconprofile2} className="profile-img"/>
            <div>
              <h2>Bruce McKenzie</h2><br/>
              <h3>Founder & CEO, Huddle</h3>
            </div>
          </div>
        </div>
        <div className="fylo">
          <h3>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
          become a well-oiled collaboration machine.</h3>
          <div className="profile">
            <img src={iconprofile3} className="profile-img"/>
            <div>
              <h2>Iva Boyd</h2><br/>
              <h3>Founder & CEO, Huddle</h3>
            </div>
          </div>
        </div>
      </div>
      <div  className="get">
        <h1>Get early access today
        </h1>
        <h2>
        It only takes a minute to sign up and our <br/>free starter tier is extremely generous. If <br/>you have any 
        questions, our support team <br/>would be happy to help you.</h2>
        <input placeholder="Enter your email adress"/>
        <button>Get Started For Free</button> 
      </div>
      <img src={logo} className="bottom-icon"/>
      <div className="location" >
        <img src={iconlocation} id="location" className="location-img"/>
        <h2>E8358-London,England</h2><br/>
      </div>
      <div className="phone">
        <img src={iconphone} className="phone-img"/>
        <h2>+1-232-253-9684</h2><br/>
      </div>
      <div className="email">
        <img src={iconemail} className="email-img"/>
        <h2>support@fylo.com</h2><br/>
      </div>
      <div className="contact">
        <a href="location">Contact</a>
        <p> Terms & condition</p>
      </div>

    </>
  );
}

export default Page
