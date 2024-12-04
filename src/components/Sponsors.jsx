import React from 'react';
import PageHeader from './PageHeader';
import './Sponsors.css';

// Importing sponsor logos as React components
import kanataLogo from '../assets/kanata-1.jpg';
import cbtLogo from '../assets/cbt-logo.jpg';
import cvfLogo from '../assets/cvflogoleftb2bb.jpg';
import powersportsLogo from '../assets/CVPowerSports.png';
import horsethiefLogo from '../assets/horsethiefcreek-textbordered-colour.png';

function Sponsors() {
  const sponsors = [
    {
      name: "The Kanata Inn Invermere",
      website: "https://kanatainns.com/locations/hotel-in-invermere-bc/",
      description: "Nestled in the beautiful Columbia Valley, Kanata Invermere offers friendly service, extra amenities and a convenient location.",
      logo: kanataLogo, // Use the imported logo image
    },
    {
      name: "Columbia Basin Trust",
      website: "https://ourtrust.org/",
      description: "Columbia Basin Trust supports the ideas and efforts of the people in the Columbia Basin.\n\nWe take our lead from residents and communities. Whatever the situation calls for, we adapt our role: from providing resources, to bringing people together, to leading an entire initiative. The Trust is here to offer experience and support to all Basin residents.\n\nWhile our range of services, programs, initiatives and financial investments is extensive, our purpose is straightforward: we exist and act for the social, economic and environmental well-being of the Basin—now and for generations to come.",
      logo: cbtLogo, // Use the imported logo image
    },
    {
      name: "Columbia Valley Freight",
      website: "https://www.columbiavalleyfreight.com/",
      description: "We take pride in ensuring that your items are arriving to you damage free and in a timely fashion. We are a small family ran business that understands the frustrations commonly associated with moving your items and look to change your opinion in regards to logistics in the Columbia Valley!",
      logo: cvfLogo, // Use the imported logo image
    },
    {
      name: "Columbia Powersports",
      website: "https://www.columbiapowersport.com/",
      description: "Parts, service and gear for all off road vehicles.",
      logo: powersportsLogo, // Use the imported logo image
    },
    {
      name: "Horsethief Pub",
      website: "https://horsethiefpub.ca/",
      description: "Here at the Horsethief Pub and Eatery, we pride ourselves on being the best restaurant in Radium, and maybe even in the Columbia Valley. With our extensive menu we are sure to provide something for everyone. We use only the freshest ingredients in all of our food, from our homemade half pound burgers to our roasts and turkeys cooked in our own ovens, you are sure to be satisfied. Come visit our Restaurant in Radium Hot Springs, BC!",
      logo: horsethiefLogo, // Use the imported logo image
    },
  ];

  return (
    <div>
      <PageHeader title="Our Sponsors" />
      <section className="sponsors-page">
        <div className="sponsors-content">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="sponsor-item">
              <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
              <div className="sponsor-text">
                <h4><a href={sponsor.website} target="_blank" rel="noopener noreferrer">{sponsor.name}</a></h4>
                <p>{sponsor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Sponsors;
