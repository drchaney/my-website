// import strengths from '../assets/5-strengths.png'
// import hobbies from '../assets/hobbies.png'
// import about from '../assets/about.png'
import david from '../assets/david.jpg'
import camp from '../assets/camp.jpg'
import croatia from '../assets/croatia.jpg'
import hforh from '../assets/hforh.jpg'
import strengths from '../assets/strengths.png'
import fixing from '../assets/fixing.png'

export default function Bio(){
  return(
    <>
      <h1>Bio</h1>
      <div className="text-center"><img src={david} alt="david"/></div>
      <p>Hi, I'm David, an experienced people leader, process manager, and software developer based in Tulsa, OK.</p>
      <p>And I'm good at it.  I've managed multi-million dollar projects, lead large teams, and am frequently celebrated for winning results.</p>
      <p>Most of my experience is in telecommunications & supply chain.  My non-leader experience is in networks, RF, and coding.  The only exception was a brief few years working construction when I was in college.</p>
      <figure className="figure">
        <img src={strengths} alt="strengths" className="figure-img img-fluid rounded"/>
        <figcaption className="figure-caption text-end">StrengthFinder Strengths</figcaption>
      </figure>
      <p>With strengths like these, it's easy to see that I enjoy reading, repairing, and building.  Throughout my career, I've frequently tasked peers and direct reports to find their strengths and explore their personalities.  To this end, I've always been on high-performing teams because we always know and respect the talents and abilities of one another.</p>
      <p>My strengths, combined with my experience, has given me an exceptional talent for fixing what's broke and making good things great. And I enjoy it, too!</p>
      <figure className="figure">
        <img src={fixing} alt="Fixing" className="figure-img img-fluid rounded"/>
        <figcaption className="figure-caption text-end">That's David!</figcaption>
      </figure>
      <p>Personally, I have been coding for many years, and have experience in PC/Mac/Linux/AS400.  I enjoy all-things-geek, so along with programming, I also have experience with cyber security, networking, and circuit boards.</p>
      <p>Outside of tech, I enjoy getting outside!  Dispersed camping``, off-roading, cycling, hiking, gardening, and traveling - sunlight fuels me!</p>
      <figure className="figure">
        <img src={camp} alt="camping" className="figure-img img-fluid rounded"/>
        <figcaption className="figure-caption text-end">Dispersed camping, Colorado</figcaption>
      </figure>
      <p>I also enjoy making music, art, and going on family adventures, big & small.</p>
      <p>Family adventures have become a priority.  I'm <a href="https://www.smithfamilymortuaries.com/memorials/jennifer-chaney/3940103/obit.php?&printable=true">widowed with two sons</a>, remarried in 2022, and moved to Tulsa where I gained two bonus step kids.  I love exploring and traveling with my family.</p>
      <figure className="figure">
        <img src={croatia} alt="croatia" className="figure-img img-fluid rounded"/>
        <figcaption className="figure-caption text-end">Exploring Croatia</figcaption>
      </figure>
      <p>I'm passionate about helping others, and have volunteered, supported, and chaired in a number of community and professional organizations that advocate for equality and the underserved.  For example, PTO/PTA, JA, WICT, and Habitat for Humanity.</p>
      <figure className="figure">
        <img src={hforh} alt="roofing" className="figure-img img-fluid rounded"/>
        <figcaption className="figure-caption text-end">Building roofs with Habitat for Humanity</figcaption>
      </figure>
      <p>I don't cook amazingly well, I can't sleep in past 6AM, and I can't concurrently maintain more than one social media presence, so feel free to connect with me on the only social app I maintain by pressing the LinkedIn icon below!</p>
      

      {/* <div className="toc text-center">
        <h4>Contents:</h4>
        <ul>
          <li><a href="#strengths">Top Strengths</a></li>
          <li><a href="#hobbies">Hobbies</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </div>

      <div className="text-center">
        <img id="strengths" className="bio-images" src={strengths} alt="top strengths"/>
      </div>  
      
      <div className="text-center">
        <img id="hobbies" className="bio-images" src={hobbies} alt="my hobbies"/>
      </div>

      <div className="text-center">
        <img id="about" className="bio-images" src={about} alt="about me"/>
      </div>  */}
    </>
  )
}