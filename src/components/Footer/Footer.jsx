import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
 
];

const GetToKnowUsLinks = [
  {
    title: "Sell on Shopwell",
    link: "/#about-amazon",
  },
  {
    title: "Protect and build your brand",
    link: "/#careers",
  },
  {
    title: "Supply to shopwell",
    link: "/#press-releases",
  },
  {
    title: "fulfilment by shop",
    link: "/#amazon-science",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              Shopwell
            </h1>
            <p>Discover a shopping experience where every find feels unique! From the latest trends to everyday essentials, we have everything to make your shopping unforgettable. Enjoy quality, style, and fantastic deals—all in one place.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
            <div className="py-8 px-4">
            <h1 className="text-xl font-bold mb-3">Make Money with Us</h1>
            <ul className="flex flex-col items-center md:items-start gap-3">
              {GetToKnowUsLinks.map((link) => (
                <li
                  className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                  key={link.title}
                >
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}

            <div>
              <div className="flex items-center gap-12 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-5 mb-7">
                  <FaLocationArrow />
                  <p>wagholi, pune </p>
                </div>
                <div className="flex items-center gap-5 mt-3">
                  <FaMobileAlt />
                  <p>+91 8446211791</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
