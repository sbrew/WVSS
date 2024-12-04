import React, { useState, useEffect } from 'react';
import './Home.css';
import bcsfLogo from '../assets/BCSFLogo.png';
import bcsfLogo2 from '../assets/BCSFLogo2.jpg';

function Home() {
  const today = new Date();
  const month = today.getMonth();
  const day = today.getDate();
  const [facebookPost, setFacebookPost] = useState(null);

  const getBannerAndCatamountText = () => {
    const bannerText = (() => {
      if ((month === 6 && day >= 1) || (month === 11 && day <= 30) || (month > 6 && month < 11)) {
        return (
          "Please be aware that the Forster area is closed to motorized vehicles from June 1st - November 30th. We kindly ask that everyone respect this closure.\n" +
          "If you have any questions regarding the closure, please feel free to reach out to us."
        );
      } else if ((month === 12 || month < 2) || (month === 2 && day <= 14)) {
        return "The Forster area is open.";
      }
      return "";
    })();

    const catamountText = (() => {
      if ((month === 12 || month < 2) || (month === 2 && day <= 14)) {
        return "Catamount Glacier will be open to snowmobiling February 15 to May 31.";
      } else if ((month === 2 && day >= 15) || (month > 2 && month < 6) || (month === 5 && day <= 31)) {
        return "Forster and Catamount areas are wide open.";
      }
      return "";
    })();

    return { bannerText, catamountText };
  };

  const { bannerText, catamountText } = getBannerAndCatamountText();

  useEffect(() => {
    const fetchFacebookPost = async () => {
      const pageId = 'WindermereValleySnowmobiling';  // Facebook page name or ID
      const accessToken = 'EAAS1HqzxeZCgBOZCEERNJUgJDeftHlWberrWK22KLZA6jArmlrJFaJ0wWvnuK0mvm10tCo9h05nLrhh97PGoNZCAdiw8wGB8uTMi2OoicP763Fqcx2ZBPWiLmlXAnZC5xZANMkgzDJZAkpDzC8MVDavb99E4RTdIXBOL6OFCy1dGghlifHU7CL9uoBaA1SZAlVHkcT8TTRyEZAFZAiIP5iCAx71yZCryyNl49FGhy2zOFdwPdC9AJBCBJZAZCoYHK8aYkZD'; // Use your Facebook Page Access Token

      try {
        // Fetch the latest post from the Facebook Page
        const response = await fetch(
          `https://graph.facebook.com/${pageId}/posts?access_token=${accessToken}`
        );
        const data = await response.json();
        
        if (data.data && data.data.length > 0) {
          const latestPost = data.data[0]; // Get the most recent post
          setFacebookPost(latestPost);
        } else {
          console.error('No posts found');
        }
      } catch (error) {
        console.error('Error fetching Facebook posts:', error);
      }
    };

    fetchFacebookPost();
  }, []);

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

      <div className="home-social">
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
        <div className="home-instagram">
          {/* Placeholder for Instagram gallery */}
          <p>Instagram Gallery Placeholder</p>
        </div>
      </div>

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
