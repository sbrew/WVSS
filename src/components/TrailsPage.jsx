import React from 'react'
import PageHeader from './PageHeader'
import './Trails.css'
import { jsPDF } from 'jspdf'; // Import jsPDF
import trailMap from '../assets/koocanussa-trail-map-1-854x1024-1.jpg';

const TrailsContent = () => {
  return (
    <div className="trails-content-container">
      {/* Left Column with Image and Button */}
      <div className="left-column">
        <img
          src={trailMap}
          alt="Snowmobiling area"
          className="trails-image"
        />
        <button className="download-button">Download PDF</button>
      </div>

      {/* Right Column with Text Content */}
      <div className="right-column">
        <h4>Forster Creek</h4>
        <p>
          Forster Creek is the most popular snowmobiling area around Radium Hot Springs and it is maintained by the Windermere Valley Snowmobile Society. A groomed trail leads to the club's cabin and four meadows where sledders of all skill levels can do some powder carving and boondocking. Experienced riders can venture beyond the meadows and get into high alpine lakes that offer incredible views of the area. From February 15 to May 31, sledders can also access Catamount Glacier.
        </p>
        <p>
          Staging is at the 19km Parking Lot. The Forest Service Roads to our staging area are active logging roads 7 days a week, logging trucks always have the right of way. Be aware that Forster Creek FSR is an unmaintained road and conditions vary daily.
        </p>

        <h4>Brewer Creek</h4>
        <p>
          Located 17 kilometres south of Invermere, Brewer Creek is a more challenging area. The terrain here consists of gorgeous meadows and high alpine bowls. Keep in mind, however, that this area is not maintained and that there are high avalanche hazards.
        </p>

        <h4>Rocky Point</h4>
        <p>
          If you are an experienced rider, you might want to venture out to Rocky Point—an advanced and unmaintained area located west of Brisco. Rocky Point is accessed along the Bugaboo Forest Service Road, and there are a number of slide paths along the steep climb, so use extreme caution if you are riding in this area.
        </p>

        <h4>Doctor Creek</h4>
        <p>
          This is a small and unmaintained area near Canal Flats. There is an older warming hut here that was originally the birthplace of the Windermere Valley Snowmobile Society. With several avalanche paths along the way, this area is not recommended for inexperienced mountain riders.
        </p>

        <h4>Paradise Mine</h4>
        <p>
          Paradise Mine is a privately maintained area by <a href="http://tobycreekadventures.com/" target="_blank" rel="noopener noreferrer">Toby Creek Adventures</a>. If you want to see the switchbacks, alpine basins, and open ridges here, you can book a trip with Toby Creek. They offer guided tours that are great for everyone, including families. Riders who would like to visit this area on their own are asked to please respect the private lands and facilities and obtain written permission from Toby Creek Adventures prior to unloading.
        </p>

        <h4>Windermere Valley Snowmobile Society</h4>
        <p>
          The Windermere Valley Snowmobile Society is a local non-profit club that has worked hard to keep riding areas in the Radium Hot Springs area open for future use. Annual memberships to the club are available <a href="https://www.amilia.com/store/en/windermere-valley-snowmobile-club/shop" target="_blank" rel="noopener noreferrer">online</a>, trail passes can also be purchased at the <a href="https://www.radiumhotsprings.com/plan-your-trip/visitor-centre/" target="_blank" rel="noopener noreferrer">Radium Hot Springs Visitor Centre</a>. Follow the Windermere Valley Snowmobile Club on <a href="https://www.facebook.com/WindermereValleySnowmobiling/" target="_blank" rel="noopener noreferrer">Facebook</a>.
        </p>

        <h4>WVSS Day Use Cabin</h4>
        <p>
          WVSS Day Use Cabin is user maintained, please pack it in, pack it out. The cabin has an outhouse, BBQ, and firewood. Please be respectful and keep it clean.
        </p>
      </div>
    </div>
  )
}


const TrailsPage = () => {
  return (
    <div>
      <PageHeader
        title="TRAILS"
        subtitle="Trail Information provided by SnoRiders West, Discover more about sledding in our area."
      />
      <div className="trails-content">
        {TrailsContent()}
      </div>
    </div>
  )
}

export default TrailsPage
