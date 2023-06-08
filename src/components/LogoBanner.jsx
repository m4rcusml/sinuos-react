import logoBannerImg from '../assets/imgs/logo-banner.jpeg'
import './LogoBanner.css'

export default function Logobanner() {
  return (
    <>
      <div className="logoBanner">
        <img src={logoBannerImg} alt="" />
      </div>
    </>
  )
}