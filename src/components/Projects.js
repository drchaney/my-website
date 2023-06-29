import spoonbrain from "../assets/spoonbrain.png"
import connectfour from "../assets/connect-four.png"
import ppp from "../assets/ppp.png"
import fitnesstrackr from "../assets/fitnesstrackr.png"
import Video from "../assets/sembrar.mp4"
import projects from "../assets/projects.png"

export default function Projects(){
  return(
    <>
      <div className="text-center"><a href="https://github.com/drchaney"><img src={projects} alt="project title" className="figure-img img-fluid rounded"/></a></div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed focus-ring focus-ring-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              JavaScript Projects
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="my-3 container text-center">
                <img className="project-image" src={spoonbrain} alt="spoonbrain screenshot"/>
              </div>
              <table className="table table-sm">
                <tr>
                  <td><h6>Project: </h6></td>
                  <td><p><a href="https://davids-guessing-game.netlify.app/">Spoonbrain ESP Implants</a></p></td>
                </tr>
                <tr>
                  <td><h6>Description: </h6></td>
                  <td><p>A guessing game project demonstrating HTML5/CSS/JavaScript working together in harmony, with a Bootstrap framework bonus.</p></td>
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
                  <td><h6>Description: </h6></td>
                  <td><p>Responsive CSS with an AI JavaScript opponent, this game can be played on both small and large screens.</p></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed focus-ring focus-ring-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Frontend & React Projects
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="my-3 container text-center">
                <img className="project-image" src={ppp} alt="peculiar peoples possessions screenshot"/>
              </div>
              <table className="table table-sm">
                <tr>
                  <td><h6>Project: </h6></td>
                  <td><p><a href="https://peculiar-peoples-possessions.netlify.app/">Peculiar Peoples Possessions</a></p></td>
                </tr>
                <tr>
                  <td><h6>Description: </h6></td>
                  <td><p>A Craiglist clone to demonstrate JSON, JWT, AJAX, fetching APIs, and React.</p></td>
                </tr>
              </table>
              <hr/>
              <div className="my-3 container text-center">
                <img className="project-image" src={fitnesstrackr} alt="fitness trackr screenshot"/>
              </div>
              <table className="table table-sm">
                <tr>
                  <td><h6>Project: </h6></td>
                  <td><p>Fitness Track <a href="https://github.com/fitness-track/fitness-tracker-frontend">Frontend</a></p></td>
                </tr>
                <tr>
                  <td><h6>Description: </h6></td>
                  <td><p>A fitness tracking application created with a team via scrum, demonstrating group work, tickets, pull requests, React, and APIs.</p></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed focus-ring focus-ring-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Backend Projects & APIs
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="my-3 container text-center">
                <img className="project-image" src={fitnesstrackr} alt="fitness trackr screenshot"/>
              </div>
              <table className="table table-sm">
                <tr>
                  <td><h6>Project: </h6></td>
                  <td><p>Fitness Track <a href="https://github.com/fitness-track/fitness-track">Backend</a></p></td>
                </tr>
                <tr>
                  <td><h6>Description: </h6></td>
                  <td><p>Node, Express, and PostgreSQL web application to manage accounts and exercise routines created by users.</p></td>
                </tr>
              </table>
              <div className="my-3 container text-center">
                <video className="project-image project-video" src={Video} playsInline autoPlay loop muted></video>
              </div>
              <table className="table table-sm">
                <tr>
                  <td><h6>Project: </h6></td>
                  <td><p><a href="https://github.com/drchaney/sembrar">Sembrar</a></p></td>
                </tr>
                <tr>
                  <td><h6>Description: </h6></td>
                  <td><p>An e-commerce application that I made with React, I completed this project by coding a fully comprehensive backend to handle inventory, carts, users, reviews, and checking out. </p></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}