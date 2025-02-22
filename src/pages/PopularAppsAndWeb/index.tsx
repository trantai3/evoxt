import "../../css/PopularAppsAndWebPage/style.scss";
import { ReactComponent as Img1 } from "../../assets/images/PopularWebAndApps/img1.svg";
import { ReactComponent as Img2 } from "../../assets/images/PopularWebAndApps/img2.svg";
import { ReactComponent as Img3 } from "../../assets/images/PopularWebAndApps/img3.svg";
import { ReactComponent as Img4 } from "../../assets/images/PopularWebAndApps/img4.svg";
import { ReactComponent as Img5 } from "../../assets/images/PopularWebAndApps/img5.svg";
import img6 from "../../assets/images/PopularWebAndApps/img6.png";
import img7 from "../../assets/images/PopularWebAndApps/img7.png";
import { ReactComponent as Img8 } from "../../assets/images/PopularWebAndApps/img8.svg";
import { ReactComponent as Img9 } from "../../assets/images/PopularWebAndApps/img9.svg";
import { Link } from "react-router-dom";

const PopularAppsAndWeb = () => {
  return (
    <div className="popularAppsAndWebPage">
      <div className="container">
        <div className="wrap">
          <h1>Popular Web Apps and Websites to deploy (Updated 2021)</h1>
          <p>
            Here are some of the most popular Web Apps and Websites to deploy
            you can set up.
          </p>
          <br />
          <h3>1. WordPress</h3>
          <div className="img">
            <Img1 className="img-element" />
          </div>
          <br />
          <p>
            WordPress is one of the most popular free and open-source content
            management systems, with more than 30%+ of websites that WordPress
            powers as of 2021. Today, even the largest corporations' websites
            are powered by WordPress as it is effortless to use and easy to get
            started. Some of the examples includes:
          </p>
          <ul>
            <li>
              <a href="https://www.whitehouse.gov/" target="_blank">
                The White House
              </a>
            </li>
            <li>
              <a href="https://jquery.com/" target="_blank">
                Jquery
              </a>
            </li>
            <li>
              <a href="https://www.sonymusic.com/" target="_blank">
                Sony Music
              </a>
            </li>
            <li>
              <a href="http://The New York Times" target="_blank">
                https://www.nytco.com/
              </a>
            </li>
            <li>
              <a href="https://thewaltdisneycompany.com/" target="_blank">
                The Walt Disney Company
              </a>
            </li>
            <li>
              <a href="http://www.toyota.com.br/" target="_blank">
                Toyota
              </a>
            </li>
            <li>
              <a href="http://fortune.com/" target="_blank">
                Fortune
              </a>
            </li>
            <li>
              <a href="https://news.microsoft.com/" target="_blank">
                Microsoft News
              </a>
            </li>
            <li>
              <a href="https://blog.mozilla.org/en/" target="_blank">
                Mozilla Blog
              </a>
            </li>
            <li>
              <a href="https://blog.ted.com/" target="_blank">
                Ted Blog
              </a>
            </li>
          </ul>
          <br />
          <h3>2. NextCloud</h3>
          <div className="img">
            <Img2 className="img-element" />
          </div>
          <br />
          <p>
            NextCloud is the go-to for the self-hosted Google Drive alternative,
            which bundles your file storage, calendars, contacts, and mail
            together. Enable you to access them anytime through your PC and even
            mobile devices. Providing you with total flexibility on your files
            and complete privacy of your files.
          </p>
          <br />
          <h3>3. cPanel</h3>
          <div className="img">
            <Img3 className="img-element" />
          </div>
          <br />
          <p>
            cPanel is one of the most popular web hosting control panels. The
            industrial standard for web hosting control panel and powers most of
            the hosting market's web hosting control panel. cPanel provides a
            graphical user interface that allows you to easily set up and host a
            website without any command line.
          </p>
          <br />
          <h3>4. Magento</h3>
          <div className="img">
            <Img4 className="img-element" />
          </div>
          <br />
          <p>
            Magento is an open-source eCommerce platform targeting medium-sized
            and larger-sized corporations that are written in PHP. Magento is
            currently powering around 250k websites and there are also 200,000
            Magento developers around the world. Some popular company that uses
            Magento includes:
          </p>
          <ul>
            <li>
              <a
                href="https://store.liverpoolfc.com/"
                rel="noopener"
                target="_blank"
              >
                LiverPool F.C. Shop
              </a>
            </li>
            <li>
              <a
                href="https://www.omegawatches.com/en-gb/"
                rel="noopener"
                target="_blank"
              >
                Omega
              </a>
            </li>
            <li>
              <a
                href="https://us.coca-cola.com/store/"
                rel="noopener"
                target="_blank"
              >
                The Coca-Cola Company
              </a>
            </li>
            <li>
              <a
                href="https://www.timberland.co.nz/"
                rel="noopener"
                target="_blank"
              >
                Timberland New Zealand
              </a>
            </li>
          </ul>
          <br />
          <h3>5. Prestashop</h3>
          <div className="img">
            <Img5 className="img-element" />
          </div>
          <br />
          <p>
            The other alternative of Magento is Prestashop. Prestashop is also
            an open-source eCommerce platform which initially released in 2008.
            Prestashop is one of the more preferred platforms to build an
            eCommerce store because it is packed with many eCommerce features.
            Such as Inventory management, a large selection of payment options,
            Email Automations, Promotions, visitors statistics, multi-language,
            customizable checkout processes, and more. **ps, Prestashop also
            have a very friendly community that is always ready to help you out
            when trouble arrives! Link
          </p>
          <h3>6. VestaCP</h3>
          <div className="img">
            <img className="img-element" src={img6} />
          </div>
          <br />
          <p>
            Open source web hosting control panel to manage your website easily
            with a GUI interface. Super-lightweight and able to run smoothly
            even on the smallest VM specs. One of the most important features
            that make developers and users choose VestaCP over the others is
            that VestaCP has NGINX + PHP-FPM available at initial installation
            without requiring any further setup.
          </p>
          <h3>7. HestiaCP</h3>
          <div className="img">
            <img className="img-element" src={img7} />
          </div>
          <br />
          <p>
            HestiaCP is a fork of VestaCP because the founder of VestaCP does
            not actively maintain VestaCP. HestiaCP has every feature that
            VestaCP has. However, HestiaCP includes a free file manager, Lets
            Encrypt support, 2nd Factor Admin Login, and more, take a look at
            their main features here : Link
          </p>
          <h3>8. CyberPanel</h3>
          <div className="img">
            <Img8 className="img-element" />
          </div>
          <br />
          <p>
            CyberPanel is another web hosting control panel, but it is powered
            by OpenLiteSpeed. CyberPanel is packed with many features such as
            LiteSpeed cache to optimize WordPress websites, one-click
            installers, and one-click SSL installation. CyberPanel is gaining
            many attractions as more and more shared web hosting websites are
            powered by LiteSpeed, causing many users to search for
            LiteSpeed-powered web hosting control panel alternatives.
          </p>
          <h3>9. Cloudron</h3>
          <div className="img">
            <Img9 className="img-element" />
          </div>
          <br />
          <p>
            Cloudron is the go-to control panel for self-hosting apps. With
            Cloudron, you can install hundreds of apps with a single click. Most
            of the discussed applications Popular Web Apps and Websites are also
            included to be deployed with Cloudron.
            <br />
            You can deploy most of the applications using Evoxt's 1-click
            deploy, <Link to="/deploy/dashboard">deploy a server</Link> with
            Evoxt now!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopularAppsAndWeb;
