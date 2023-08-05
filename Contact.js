import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './Contact.css'
// import z from './contact-wallpaer.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

export function Contact() {
  return (
    <>
      <h3>Responsive Form</h3>

<div class="container">
  <form action="/action_page.php">
    <label for="fname">Your Name</label>
    <input type="text" id="fname"  name="firstname" placeholder="Your name.."/>

    <label for="lname">Your Ph Number</label>
    <input type="text" id="lname" name="lastname" placeholder="Number.."/>

    <label for="lname">Email</label>
    <input type="text" id="lname" name="lastname" placeholder="Email.."/>
    

    <label for="subject">Message (Max)</label>
    <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>

    <input type="submit" value="Submit"/>
  </form>
</div>







     <footer class="bg-light text-center text-white">
        <div class="container p-4 pb-0">
          <section class="mb-4">
            <a
              class="btn text-black btn-floating m-1 fb"
              href="https://www.facebook.com/profile.php?id=100040393480514"
              role="button"
            >
             <FontAwesomeIcon icon={faFacebook} />
            </a>

            <a
              class="btn text-white btn-floating m-1 twitter"
              href="https://twitter.com/NAVEENK70894046"
              role="button"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              class="btn text-white btn-floating m-1 instagram"
              href="https://www.instagram.com/naveen_k_3401/"
              role="button"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              class="btn text-white btn-floating m-1 linkedin" href="https://www.linkedin.com/in/naveen-k-025a3723a/" role="button">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a
              class="btn text-white btn-floating m-1 github"
              href="https://github.com/naveenkaviyarasan"
              role="button"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </section>
        </div>
        <div class="text-center p-3 tt">
          © 2020 Copyright:
          <a class="text-white" href="">
            Naveek.com
          </a>
        </div>
      </footer>
    </>
  );
}
