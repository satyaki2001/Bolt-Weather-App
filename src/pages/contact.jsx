import React, {useState} from "react";
import Navbar from "../components/navbar";
import emailjs from "emailjs-com";
const Result =() =>{
return(
  <div>
    <p>Your feedback has been submitted successfully!</p>
    <a class="btn btn-primary" href="/" role="button">Go back to Homepage</a>
  </div>


)
}

function Contact(){
  const [result, showResult] = useState(false);
function sendEmail(event){
  event.preventDefault();
  emailjs.sendForm('service_bijpg9p','template_isi6i0j',event.target,'vsk1n5ZKsQPPRZSxY'
  ).then(
    (result) => {
      console.log(result.text);
    },
    (error) => {
      console.log(error.text);
    }
  );
  event.target.reset();
 showResult(true);
}

return(
    <div>
    <Navbar />

    <h2 className="contact-title">Lets hear something from you...</h2>
    <div className="form-submit-result">{result ? <Result /> : null}</div>

   
    <form className="form w-50 mx-auto" id="contact-form" onSubmit={sendEmail}>
   
    <div className="mb-3">
  <label className="form-label">Full Name</label>
  <input type="text" name="name" className="form-control" id="exampleFormControlInput1" placeholder="Name...." />
</div>
<div className="mb-3">
  <label className="form-label">Email address</label>
  <input type="email" name="user_email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div className="mb-3">
  <label className="form-label">Your message or query</label>
  <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows="3" placeholder="write something..."></textarea>
</div>
<button type="submit" className="btn btn-success">Submit</button>
    </form>

    </div>
)
}

export default Contact
