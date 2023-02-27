import React from "react"
import Torin from '../assets/torin.png'
import Moss from '../assets/moss.png'
import Molly from '../assets/molly.png'
import Raymond from '../assets/raymond.png'

const AboutUs = () => {
  return (
    <>
  <h1 className="about-title"> About Us </h1>
  <div className='about-us-container'>
      <div className='moss-about'>
      <img src={Moss} alt='circle' />
<br/>  
        <div className='about-paragraph'>
          <p>The communication master and Trello board Guardian is Moss. They are in charge of keeping Slack active with updates, controlling the PR swim lanes, and wrangling invasive crocodiles. Fun Fact: They own the world’s slowest computer.</p>  
        </div>  
      </div>
        <div className='torin-about'>
        <img src={Torin} alt='circle' />
<br/>
        <div className='about-paragraph'>
            <p>Torin is the Tech Lead. He takes ownership over the code base and version control. A hardened Marine vet, his favorite things to do are merge code and talk about Alaska. Fun Fact: He loves shoveling snow!</p>  
          </div>  
    </div>
        <div className='molly-about'>
        <img src={Molly} alt='circle' />
<br/>
        <div className='about-paragraph'>
        <p>As Product Manager, Molly is the strategic planner who keeps her team on track and ensures all requirements are met. She enjoys spending as little time as humanly possible outside. Fun fact: She walks like a mom. </p>  
      </div>  
        </div>
        <div className='raymond-about'>
        <img src={Raymond} alt='circle' />
<br/>
        <div className='about-paragraph'>
        <p>A designer with expertise in styling and chilling, Raymond is the Design Lead. He is responsible for the UI/UX ideas and cuts the entire USA army’s hair. What a guy! Fun Fact: He created a new shade of green.</p>  
      </div>  
        </div>
  </div>
<br/>

  </>
)
}

export default AboutUs