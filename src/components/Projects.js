import spoonbrain from "../assets/spoonbrain.png"
import connectfour from "../assets/connect-four.png"
import ppp from "../assets/ppp.png"
import fitnesstrackr from "../assets/fitnesstrackr.png"
import Video from "../assets/sembrar.mp4"

export default function Projects(){
  return(
    <>
      <h1>Projects</h1>
      <hr/>
      <div className="my-3 container text-center">
        <img className="project-image" src={spoonbrain} alt="spoonbrain screenshot"/>
      </div>
      <table className="table table-sm">
        <tr>
          <td><h6>Project: </h6></td>
          <td><p><a href="https://davids-guessing-game.netlify.app/">Spoonbrain ESP Implants</a></p></td>
        </tr>
        <tr>
          <td><h6>For: </h6></td>
          <td><p>Class</p></td>
        </tr>
        <tr>
          <td><h6>Description: </h6></td>
          <td><p>The project was to demonstrate our recently acquired HTML5, CSS, and JavaScript skills by creating a guessing game.  The player would have 5 attempts to guess one through 100, and could get a hint if needed.</p></td>
        </tr>
        <tr>
          <td><h6>Reason for Portfolio: </h6></td>
          <td><p>I had a blast on this project!  I used JavaScript to change CSS variables so that the player would have a "heatmap" that would calculate how "hot" or "cold" their guess was and display the corresponding color the more accurate their guess.  I also demonstrated flex box but was nonetheless unhappy with my design skills, so I created a 2nd version of this project to learn Bootstrap, thus creating a much cleaner look.</p></td>
        </tr>
      </table>
      <hr/>
      <div className="my-3 container text-center">
        <img className="project-image" src={connectfour} alt="connect four screenshot"/>
      </div>
      <table className="table table-sm">
        <tr>
          <td><h6>Project: </h6></td>
          <td><p><a href="https://4-connect.netlify.app/">Four Connect</a></p></td>
        </tr>
        <tr>
          <td><h6>For: </h6></td>
          <td><p>Class</p></td>
        </tr>
        <tr>
          <td><h6>Description: </h6></td>
          <td><p>This was our "final exam" for the Fundamentals portion of our class, to show off our HTML/CSS/JavaScript abilities by picking a game and coding it from scratch.</p></td>
        </tr>
        <tr>
          <td><h6>Reason for Portfolio: </h6></td>
          <td><p>I had recently read an article on mobile-first development, so even though the project didn't call for mobile phone usability, I still developed this primarily for my phone. I also ready many articles on CSS animation because it wasn't taught in class and I felt that could make the game go from good to great.  In addition to the animation, I was proud of the AI logic, and the massive object and object methods I created to keep the game moving forward.  My only pain was trying to animate a checker "falling", but it always clipped the game board, so I settled on a spinning animation to place the checkers.</p></td>
        </tr>
      </table>
      <hr/>
      <div className="my-3 container text-center">
        <img className="project-image" src={ppp} alt="peculiar peoples possessions screenshot"/>
      </div>
      <table className="table table-sm">
        <tr>
          <td><h6>Project: </h6></td>
          <td><p><a href="https://peculiar-peoples-possessions.netlify.app/">Peculiar Peoples Possessions</a></p></td>
        </tr>
        <tr>
          <td><h6>For: </h6></td>
          <td><p>Class</p></td>
        </tr>
        <tr>
          <td><h6>Description: </h6></td>
          <td><p>This was our "final exam" for the Frontend portion of our class, to demonstrate our JSON, JWT, AJAX, API, and React abilities by creating a "Craigslist-Lite" web application.</p></td>
        </tr>
        <tr>
          <td><h6>Reason for Portfolio: </h6></td>
          <td><p>This project was a ton of fun, and I enjoyed quickly creating a React project that was dynamic.  I was proud of figuring out how to make a responsive search bar that would update the results with each key pressed, based on matches in the posting's title, description, location, and username, instead of waiting for the "Search" button to be clicked.</p></td>
        </tr>
      </table>
      <hr/>
      <div className="my-3 container text-center">
        <img className="project-image" src={fitnesstrackr} alt="fitness trackr screenshot"/>
      </div>
      <table className="table table-sm">
        <tr>
          <td><h6>Project: </h6></td>
          <td><p>Fitness Track <a href="https://github.com/fitness-track/fitness-tracker-frontend">Frontend</a> & <a href="https://github.com/fitness-track/fitness-track">Backend</a></p></td>
        </tr>
        <tr>
          <td><h6>For: </h6></td>
          <td><p>Class</p></td>
        </tr>
        <tr>
          <td><h6>Description: </h6></td>
          <td><p>This was our "final exam" for the Backend portion of our class, to demonstrate Express and PostgreSQL abilities by creating a web application to manage accounts and exercise routines.</p></td>
        </tr>
        <tr>
          <td><h6>Reason for Portfolio: </h6></td>
          <td><p>This project was my first time working in github, rotating Scrum Master duties, creating tickets, submitting pull requests, and communicating daily in virtual stand-ups with a team!</p></td>
        </tr>
      </table>
      <hr/>
      <div className="my-3 container text-center">
      <video className="project-image project-video" src={Video} playsInline autoPlay loop muted></video>
      </div>
      <table className="table table-sm">
        <tr>
          <td><h6>Project: </h6></td>
          <td><p><a href="https://github.com/drchaney/sembrar">Sembrar</a></p></td>
        </tr>
        <tr>
          <td><h6>For: </h6></td>
          <td><p>Class</p></td>
        </tr>
        <tr>
          <td><h6>Description: </h6></td>
          <td><p>This was our "final exam!"  Goal: make a fully functional, yet fictional, full stack eCommerce application.  The "client" requests to have customers login, or check out as guest, have their carts follow them across devices (logged in users) or at least be restored with the browser (for guest users), and manage products.</p></td>
        </tr>
        <tr>
          <td><h6>Reason for Portfolio: </h6></td>
          <td><p>This final project was a ton of fun, from creating user stories, wireframes, database diagrams, to execution.  I enjoyed adding "extras", like more than one image per product, the ability to edit your cart by mousing over it, having stories, articles, promo codes, and sales campaigns managed through an admin portal.  I exceeded the course requirements, but didn't finish all the user stories I created in the four weeks we had to work on this.  Nonetheless, I learned a ton from the many, many hours I poured into this project.</p></td>
        </tr>
      </table>
    </>
  )
}