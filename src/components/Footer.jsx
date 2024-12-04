import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy 2024 WVSS Snowmobile Club. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.facebook.com/WindermereValleySnowmobiling/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/windermerevalleysnowmobile/?fbclid=IwY2xjawGY2rRleHRuA2FlbQIxMAABHaAG13HumlS-QDnTs9p0lqAGdS3aVZhpEaYsHg_T85e7Pa57_ZSx0o2mzw_aem_QrtpJPnB-b5PUgkUjTS3fA" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer