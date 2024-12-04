import React from 'react'
import './PageHeader.css'

const PageHeader = ({ title, subtitle, backgroundImages }) => {
  // Default images for responsive sizes (can be overridden by props)
  const defaultImages = {
    desktop: 'https://wvss.ca/wp-content/uploads/2020/12/snowmobiling-forester-pow-carve-1-banner.jpg',
    tablet: 'https://wvss.ca/wp-content/uploads/2020/12/snowmobiling-forester-pow-carve-1-banner-1024x342.jpg',
    mobile: 'https://wvss.ca/wp-content/uploads/2020/12/snowmobiling-forester-pow-carve-1-banner-736x246.jpg',
  }

  // Merge default images with provided images (if any)
  const images = { ...defaultImages, ...backgroundImages }

  return (
    <div className="page-header">
      <div className="header-content">
        <h1 className="header-title">{title}</h1>
        <p className="header-subtitle">{subtitle}</p>
      </div>
      <style>
        {`
          .page-header {
            background-image: url(${images.desktop})
          }
          @media (max-width: 1024px) {
            .page-header {
              background-image: url(${images.tablet})
            }
          }
          @media (max-width: 768px) {
            .page-header {
              background-image: url(${images.mobile})
            }
          }
        `}
      </style>
    </div>
  )
}

export default PageHeader
