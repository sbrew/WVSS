import tablet from '../assets/snowmobiling-forester-pow.jpg';
import desktop from '../assets/snowmobiling-forester-pow-carve-1-banner-1024x342.jpg';
import mobile from '../assets/snowmobiling-forester-pow-carve-1-banner-736x246.jpg';
import './PageHeader.css'

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="page-header">
      <div className="header-content">
        <h1 className="header-title">{title}</h1>
        <p className="header-subtitle">{subtitle}</p>
      </div>
      <style>
        {`
          .page-header {
            background-image: url(${desktop})
          }
          @media (max-width: 1024px) {
            .page-header {
              background-image: url(${tablet})
            }
          }
          @media (max-width: 768px) {
            .page-header {
              background-image: url(${mobile})
            }
          }
        `}
      </style>
    </div>
  )
}

export default PageHeader
