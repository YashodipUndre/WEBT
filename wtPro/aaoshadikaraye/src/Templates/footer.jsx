import React from 'react';
import './footer.css';
import loggg from '../Images/icons8-wedding-ring-64-pink.png'
function Footer() {
  return (
    <footer className="Footer padding-t-20">
      <div className="container bg-white">
        <div className="section-contact padding-v-20">
          <div className="section-left padding-v-20">
            <p className="text-bold main-head">
              AoaShadiKarye.com - Your Ultimate Wedding Planning Companion
            </p>
            <p className="small padding-v-10">Plan your wedding with Us</p>
            <p className="small">
              Are you ready to embark on the journey of a lifetime? Look no further than AoaShadiKarye.com, your ultimate wedding planning companion. We're here to turn your wedding dreams into reality, one detail at a time.
            </p>
            <p className="small">
              From the grandest of gestures to the smallest of details, we're committed to ensuring that your special day is nothing short of perfection. Our team of dedicated professionals is passionate about curating an unforgettable experience tailored to your unique vision and style. With AoaShadiKarye.com by your side, you can rest assured that every aspect of your wedding will be handled with care and expertise.
            </p>
          </div>
          <div className="section-right padding-v-20">
            <div>
              <p className="text-bold main-head margin-b-20 fs-18">
                Contact us to get best deals
              </p>
              <div className="f-sb-bw">
                <div className="footer-block">
                  <p className="text-bold">For Vendors</p>
                  <a href="mailto:vendors@aoashadikarye.com">vendors@aoashadikarye.com</a>
                  <p>0124-6812346</p>
                </div>
                <div className="footer-block-divider"></div>
                <div className="footer-block">
                  <p className="text-bold">For Users</p>
                  <a href="mailto:info@aoashadikarye.com">info@aoashadikarye.com</a>
                  <p>+91 9898973883</p>
                </div>
              </div>
              <p className="text-bold main-head margin-t-30 fs-18 margin-b-10" style={{ marginTop: '32px' }}>
                Registered Address
              </p>
              <div className="f-sb-bw small" style={{ width: '334px' }}>
                <p>Katraj, Pune, India, 122002</p>
              </div>
              <p className="text-bold main-head margin-t-50 fs-18">
                Get Latest Blog Alerts
              </p>
              <form>
                <div className="flex d-flex margin-t-10">
                  <input
                    type="email"
                    id="footer-email"
                    className="input-outlined"
                    placeholder="Email*"
                    name="EMAIL"
                    autoComplete="off"
                    required=""
                    fdprocessedid="3nvkem"
                    value=""
                  />
                  <button
                    type="button"
                    className="bg-primary1 white padding-5-10"
                    id="btn1"
                    style={{ height: '40px', border: 'none', borderRadius: '3px', backgroundColor: '#e72e77' }}
                    fdprocessedid="j3zfc"
                  >
                    Submit
                  </button>
                </div>
              </form>
              <div className="margin-t-20">
                <a href="/submit-real-wedding" className="h6 margin-r-20 padding-10-20 text-primary border-primary border-radius-5 inline-block animated-btn hover-btn">
                  Submit Wedding
                </a>
                <span className="h6 border-vendor padding-10-20 text-vendor pointer border-radius-5 inline-block animated-btn hover-btn" role="button" tabIndex="0">
                  Register as a Vendor
                </span>
              </div>
            </div>
            <div className="follow-us">
              <span className="text-bold main-head margin-b-10">Follow us on:</span>
              <div className="social-media-links">
                <a href="https://www.facebook.com/wedmegood" target="_blank" style={{ color: '#3b5998' }}>
                  <i className="fa fa-facebook h6"></i>
                  <span className="margin-l-10">facebook</span>
                </a>
              </div>
              <div className="social-media-links">
                <a href="https://twitter.com/wedmegood" target="_blank" style={{ color: '#55acee' }}>
                  <i className="fa fa-twitter h6"></i>
                  <span className="margin-l-10">twitter</span>
                </a>
              </div>
              <div className="social-media-links">
                <a href="https://www.pinterest.com/wedmegood/" target="_blank" style={{ color: '#cb2027' }}>
                  <i className="fa fa-pinterest h6"></i>
                  <span className="margin-l-10">pinterest</span>
                </a>
              </div>
              <div className="social-media-links">
                <a href="https://www.instagram.com/wedmegood/" target="_blank" style={{ color: '#e95950' }}>
                  <i className="fa fa-instagram h6"></i>
                  <span className="margin-l-10">instagram</span>
                </a>
              </div>
              <div className="social-media-links">
                <a target="_blank" style={{ color: '#fffc00' }}>
                  <i className="fa fa-snapchat h6"></i>
                  <span className="margin-l-10">snapchat</span>
                </a>
              </div>
              <div className="social-media-links">
                <a href="https://www.youtube.com/channel/UCe96CeIKcoexrE3dtAuBKxA" target="_blank" style={{ color: '#ff0000' }}>
                  <i className="fa fa-youtube h6"></i>
                  <span className="margin-l-10">youtube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="section-constant padding-v-50">
          <div className="column-flex">
            <p className="main-head text-bold">Start Planning</p>
            <a href=" " className="small margin-t-10">Search By Vendor</a>
            <a href=" " className="small margin-t-10">Search By City</a>
            <a href=" " className="small margin-t-10">Download Our App</a>
            <a href=" " className="small margin-t-10">Top Rated Vendors</a>
            <a href=" " className="small margin-t-10">Destination Wedding</a>
          </div>
          <div className="column-flex">
            <p className="main-head text-bold">Wedding Ideas</p>
            <a href=" " className="small margin-t-10">Wedding Blog</a>
            <a href=" " className="small margin-t-10">Wedding Inspiration Gallery</a>
            <a href=" " className="small margin-t-10">Real Wedding</a>
            <a href=" " className="small margin-t-10">Submit Wedding</a>
          </div>
          <div className="column-flex">
            <p className="main-head text-bold">Photo Gallery</p>
            <a href=" " className="small margin-t-10">Bridal Wear</a>
            <a href=" " className="small margin-t-10">Wedding Jewellery</a>
            <a href=" " className="small margin-t-10">Bridal Makeup &amp; Hair</a>
            <a href=" " className="small margin-t-10">Wedding Decor</a>
            <a href=" " className="small margin-t-10">Wedding Photography</a>
            <a href=" " className="small margin-t-10">Groom Wear</a>
            <a href=" " className="small margin-t-10">Invitations &amp; Favors</a>
            <a href=" " className="small margin-t-10">Wedding Accessories</a>
            <a href=" " className="small margin-t-10">Mehendi Designs</a>
          </div>
          <div className="column-flex">
            <p className="main-head text-bold">Home</p>
            <a href=" " className="small margin-t-10">About WedMeGood</a>
            <a href=" " className="small margin-t-10">Careers</a>
            <a href=" " className="small margin-t-10">Contact Us</a>
            <a href=" " className="small margin-t-10">Site Map</a>
            <a href=" " className="small margin-t-10">Terms &amp; Conditions</a>
            <a href=" " className="small margin-t-10">Privacy Policy</a>
            <a href=" " className="small margin-t-10">Cancellation Policy</a>
          </div>
          <div className="column-flex">
            <p className="main-head text-bold">Wedding Invitation Maker</p>
            <a href=" " className="small margin-t-10">Wedding Card Designs</a>
            <a href=" " className="small margin-t-10">Save the Date Templates</a>
            <a href=" " className="small margin-t-10">Invitation Video Templates</a>
          </div>
        </div>
        <section className="tradmark">
          <div className="container section-footer padding-v-15">
            <span className="center">
              <span className="margin-r-20">
                © 2024
              </span>
              <img src={loggg} alt="lg" width="45" height="45" />
              <h4>AAOSHADIKARAYE</h4>
            </span>
            <span className="text-bold">
              <a href="/terms">Terms &amp; Conditions</a> |
              <a href="/privacy">Privacy Policy</a>
            </span>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
