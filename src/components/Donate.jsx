import React from 'react';
import PageHeader from './PageHeader'; // Import the PageHeader component
import './Donate.css'; // Add a separate CSS file for styling

function Donate() {
  return (
    <div>
      <PageHeader title="Donate to the Club" /> {/* Use PageHeader component for the title */}
      <section className="donate-page">
        <div className="donate-content">
          <h3>Donate to the Windermere Valley Snowmobile Society</h3>
          <p>Each year, membership and trail fees are used to offset the cost of basic operations with any small surpluses set aside each season towards new initiatives. Consider giving a little extra towards special initiatives that may be near and dear to your heart and help us fast-track these projects.</p>

        </div>
      </section>

    </div>
  );
}

export default Donate;
