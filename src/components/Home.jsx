import React, { useState, useEffect } from 'react';
import './Home.css';
import Slider from 'react-slick';  // Import React Slick
import bcsfLogo from '../assets/BCSFLogo.png';
import bcsfLogo2 from '../assets/BCSFLogo2.jpg';
import rafflepic2425 from '../assets/rafflepic2425.webp';
import sponsor1 from '../assets/kanataMod.jpg';
// import sponsor2 from '../assets/horsethiefcreek-textbordered-colour.png';
import sponsor3 from '../assets/cvflogoleftb2bb.jpg';
import sponsor4 from '../assets/CVPowerSports.png';
import sponsor5 from '../assets/cbt-logo.jpg';
import sponsor6 from '../assets/groupedSponsors.jpg';
// import { ReactComponent as Sponsors2025 } from '../assets/2025Sponsors.svg';


function Home() {
  const today = new Date();
  const month = today.getMonth();
  const day = today.getDate();
  const [facebookPost, setFacebookPost] = useState(null);

const getBannerAndCatamountText = () => {
  const bannerText = (() => {
    // June 1 – Nov 30 closure
    if ((month === 5 && day >= 1) || (month === 10 && day <= 30) || (month > 5 && month < 10)) {
      return (
        "Please be aware that the Forster area is closed to motorized vehicles from June 1st - November 30th. " +
        "We kindly ask that everyone respect this closure.\n" +
        "If you have any questions regarding the closure, please feel free to reach out to us."
      );
    } 
    // Dec 1 – Feb 14 open
    else if ((month === 11 || month === 0) || (month === 1 && day <= 14)) {
      return "The Forster area is open.";
    }
      return "";
    })();

    const catamountText = (() => {
      // Feb 15 – May 31 open for Catamount
      if ((month === 11 || month === 0) || (month === 1 && day <= 14)) {
        return "Catamount Glacier will be open to snowmobiling February 15 to May 31.";
      } else if ((month === 1 && day >= 15) || (month > 1 && month < 5) || (month === 4 && day <= 31)) {
        return "Forster and Catamount areas are wide open.";
      }
      return "";
    })();

    return { bannerText, catamountText };
  };

  const { bannerText, catamountText } = getBannerAndCatamountText();

  // useEffect(() => {
  //   const fetchFacebookPost = async () => {
  //     const pageId = 'WindermereValleySnowmobiling';  // Facebook page name or ID
  //     const accessToken = 'EAAS1HqzxeZCgBOZCEERNJUgJDeftHlWberrWK22KLZA6jArmlrJFaJ0wWvnuK0mvm10tCo9h05nLrhh97PGoNZCAdiw8wGB8uTMi2OoicP763Fqcx2ZBPWiLmlXAnZC5xZANMkgzDJZAkpDzC8MVDavb99E4RTdIXBOL6OFCy1dGghlifHU7CL9uoBaA1SZAlVHkcT8TTRyEZAFZAiIP5iCAx71yZCryyNl49FGhy2zOFdwPdC9AJBCBJZAZCoYHK8aYkZD'; // Use your Facebook Page Access Token

  //     try {
  //       // Fetch the latest post from the Facebook Page
  //       const response = await fetch(
  //         `https://graph.facebook.com/${pageId}/posts?access_token=${accessToken}`
  //       );
  //       const data = await response.json();

  //       if (data.data && data.data.length > 0) {
  //         const latestPost = data.data[0]; // Get the most recent post
  //         setFacebookPost(latestPost);
  //       } else {
  //         console.error('No posts found');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching Facebook posts:', error);
  //     }
  //   };

  //   fetchFacebookPost();
  // }, []);

  return (
    <section>
      {(bannerText || catamountText) &&
        <div className="home-banner">
          {bannerText && <p>{bannerText}</p>}
          {catamountText && <p>{catamountText}</p>}
        </div>
      }

      <h1 className="home-title">Come Ride With Us</h1>
      <div className="home-buttons">
        <a
          href="https://app.amilia.com/store/en/windermere-valley-snowmobile-club/shop/programs/91912?subCategoryIds=5317994"
          target="_blank"
          rel="noopener noreferrer"
          className="home-button"
        >
          Membership
        </a>
        <a
          href="https://app.amilia.com/store/en/windermere-valley-snowmobile-club/shop/programs/calendar/91913?view=month&scrollToCalendar=true"
          target="_blank"
          rel="noopener noreferrer"
          className="home-button"
        >
          Trail Passes
        </a>
      </div>

      {/* <div className="home-social">
      <div className="home-facebook">
          {facebookPost ? (
            <div className="facebook-post">
              <h3>Latest Facebook Post</h3>
              <p>{facebookPost.message}</p>
              {facebookPost.link && (
                <a href={facebookPost.link} target="_blank" rel="noopener noreferrer">
                  Read more
                </a>
              )}
            </div>
          ) : (
            <p>Loading latest Facebook post...</p>
          )}
        </div>
        <div className="home-instagram"> */}
      {/* Placeholder for Instagram gallery */}
      {/* <p>Instagram Gallery Placeholder</p>
        </div>
      </div> */}


      {/* Updated Raffle Section */}
      {/* <div className="home-Raffle-section">
        <h2 className="section-header">2024/2025 W.V.S.S. Poker Run Prize Raffle</h2>
        <div className="two-column">
          <div className="column-left">
            <h5 className="prize-header">FIRST PRIZE</h5>
            <p>
              Klim Aspect 16 Avalanche airbag pak with Alpride E2 air bag system
              (Valued at $1800)
            </p>
            <h5 className="prize-header">SECOND PRIZE</h5>
            <p>
              Mammut Barryvox S transceiver
              Mammut 320 Probe
              Mammut Alugator Pro Light Shovel/Hoe
              (Combined value of $855)
            </p>
            <h5 className="prize-header">THIRD PRIZE</h5>
            <p>
              $500 value of local restaurant gift certificates
            </p>
          </div>
          <div className="column-right">
            <img src={rafflepic2425} alt="Raffle Prizes" />
          </div>
        </div>
        <h3 className="section-subheader">Tickets on sale until March 1st</h3>
        <div className="section-button">
          <a
            href="https://www.rafflebox.ca/raffle/wvss"
            target="_blank"
            rel="noopener noreferrer"
            className="explore-button"
          >
            Enter Here!
          </a>
        </div>
      </div> */}

      <section>
      {/* Sponsors Section with Images in a Row */}
      <div className="sponsors-banner">
        <h2 className="section-header">Our Sponsors</h2>
        <div className="sponsor-images">
          <div className="sponsor-image">
            <img src={sponsor1} alt="Sponsor 1" />
          </div>
          {/* <div className="sponsor-image">
            <img src={sponsor2} alt="Sponsor 2" />
          </div> */}
          <div className="sponsor-image">
            <img src={sponsor3} alt="Sponsor 3" />
          </div>
          <div className="sponsor-image">
            <img src={sponsor4} alt="Sponsor 4" />
          </div>
          <div className="sponsor-image">
            <img src={sponsor5} alt="Sponsor 5" />
          </div>
          <div className="sponsor-image">
          </div>
        </div>
      </div>
      {/* <div className="sponsor-images">
        <img src={sponsor6} alt="Sponsors" className="sponsors-image" />
      </div> */}
            {/* <Sponsors2025 className="my-svg" /> */}

      {/* Other sections... */}
    </section>

      <div className="home-proud-member" style={{ paddingBottom: '10px' }}>
        <p>Proud Member</p>
        <a href="https://bcsf.org/" target="_blank" rel="noopener noreferrer">
          <img
            className="bcsf-logo"
            srcSet={`${bcsfLogo} 150w, ${bcsfLogo2} 250w`}
            sizes="(max-width: 250px) 150px, 250px"
            src={bcsfLogo2}
            alt="BCSF"
          />
        </a>
      </div>
    </section>
  );
}

export default Home;
