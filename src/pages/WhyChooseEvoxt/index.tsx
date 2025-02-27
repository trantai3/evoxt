import { Link } from "react-router-dom";
import "../../css/WhyChooseEvoxt/style.scss";
import wrapperHeader from "../../assets/images/WhyChooseEvoxt/wrapper-header.png";
import imgFaster from "../../assets/images/WhyChooseEvoxt/imgFaster.png";
import imgDataSafety from "../../assets/images/WhyChooseEvoxt/imgDataSafery.gif";
import imgApplications from "../../assets/images/WhyChooseEvoxt/imgApplications.png";
import imgFirewalls from "../../assets/images/WhyChooseEvoxt/imgFirewall.png";
import imgUptime from "../../assets/images/WhyChooseEvoxt/imgUptime.png";
import imgVnc from "../../assets/images/WhyChooseEvoxt/imgVnc.png";
import imgAddressManagement from "../../assets/images/WhyChooseEvoxt/imgAddressManagement.png";
import { useState, useEffect } from "react";
const sidebar = [
  { title: "Faster CPU", id: "header-1" },
  { title: "Data Safety", id: "header-2" },
  { title: "One-click Applications", id: "header-3" },
  { title: "Firewalls", id: "header-4" },
  { title: "Quick deployments", id: "header-5" },
  { title: "Isolated", id: "header-6" },
  { title: "Enterprise grade hardware", id: "header-7" },
  { title: "Clean IP ranges", id: "header-8" },
  { title: "Future ready", id: "header-9" },
  { title: "We Listen from you", id: "header-10" },
  { title: "Uptime", id: "header-11" },
  { title: "Privacy", id: "header-12" },
  { title: "VNC", id: "header-13" },
  { title: "Customer support", id: "header-14" },
  { title: "Customer satisfaction", id: "header-15" },
  { title: "Pricing", id: "header-16" },
  { title: "Scalability", id: "header-17" },
  { title: "IP address management", id: "header-18" },
  { title: "API", id: "header-19" },
  { title: "We are passionate!", id: "header-20" },
];

const WhyChooseEvoxt = () => {
  const [isTab, setTab] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.scrollY;
      sidebar.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition + 100) {
          setTab(section.title);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="whyChooseEvoxt">
      <div className="main">
        <div className="sidebar">
          {sidebar.map((e, index) => (
            <a
              onClick={() => setTab(e.title)}
              href={`#header-${index + 1}`}
              className={`${isTab === e.title ? "header-active" : ""}`}
              key={index}
            >
              {e.title}
            </a>
          ))}
        </div>
        <div className="wrapper">
          <div className="wrapper-left">
            <div className="breadcrumbs">
              <span>
                <Link to="/">Evoxt</Link>
              </span>
              <span>
                <Link to="/why-choose-evoxt">Why choose Evoxt</Link>
              </span>
            </div>
            <div className="wrapper-header">
              <h1>Why choose Evoxt?</h1>
              <div className="img">
                <img src={wrapperHeader} />
              </div>
              <p>
                If you are still hesitating whether to choose Evoxt. This will
                be the post to convince you to get on Evoxt right now.
                <br />
                <br />
                Here are <strong>20</strong> reasons why Evoxt is
                <strong> better</strong> than our competitions:
              </p>
            </div>
            <br />
            <br />
            <div id="header-1" className="faster-cpu">
              <h4>Faster CPU</h4>
              <p>
                All Evoxt virtual machines come with CPUs that have frequencies
                that are at least <strong>3.5 GHz</strong> and above, and Evoxt
                will continue raising this standard in the future as hardware
                gets more advanced.
                <br />
                <br />
                Most providers hide the fact that they use a low CPU clock speed
                and charge you based on the number of cores, as that is the more
                obvious marketing strategy and cost-saving tactic.
                <br />
                <br />
                In virtual machines, where every core matters, getting a higher
                clock speed is more beneficial.
                <br />
                <br />
                Evoxt offers CPU cores with a higher clock speed, but we match
                the prices of providers that offer a lower clock speed. This is
                the more costly road ahead for Evoxt, but we believe in the long
                term and believe that is the best way to win our customer's
                hearts.
                <br />
                <br />
                You will get the best bang out for your bucks with Evoxt.
              </p>
              <br />
              <div className="img">
                <img src={imgFaster} />
              </div>
              <br />
              <p>
                Read more :
                <Link to="/cpu-clock-speed-vs-number-of-cpu-cores">
                  https://evoxt.com/cpu-clock-speed-vs-number-of-cpu-cores/
                </Link>
              </p>
            </div>
            <div id="header-2" className="data-safety">
              <h4>Data Safety</h4>
              <p>
                Your data is <strong>safe</strong> with Evoxt.
                <br />
                <br />
                All Evoxt's servers include <strong>free weekly backup.</strong>
                We believe backups are necessary hence we do not charge for
                weekly backups.
                <br />
                <br />
                Evoxt's backup management panel is also very intuitive and easy
                to use. You can easily view your current backups and restore
                them during an emergency.
              </p>
              <div className="img">
                <img src={imgDataSafety} />
              </div>
              <br />
              <p>
                Read more :
                <Link to="/weekly-offsite-backup">
                  https://evoxt.com/weekly-offsite-backup/
                </Link>
              </p>
            </div>
            <div id="header-3" className="oneClick-applications">
              <h4>One-click Applications</h4>
              <p>
                Want to try out several apps but are too lazy to manually
                install or don't know how to?
                <br />
                <br />
                Evoxt offers One-click applications that you can deploy with a
                <strong> single click.</strong>
                <br />
                <br />
                Best of all, it is free!
              </p>
              <div className="img">
                <img src={imgApplications} />
              </div>
              <br />
              <p>
                Here is a list of applications you can deploy with our One-click
                installation :
                <Link to="/">https://evoxt.com/applications/</Link>
              </p>
            </div>
            <div id="header-4" className="firewalls">
              <h4>Firewalls</h4>
              <p>
                Evoxt offers <strong>layer 3</strong> firewalls that you can
                easily manage in your virtual machine control panel.
                <br />
                <br />
                This is not a mere firewall that other provider offers. With a
                layer 3 firewall, you can block packets before it even reaches
                your server.
                <br />
                <br />
                This can save you a lot of resources, especially when you are
                under a heavy DDoS attack.
              </p>
              <div className="img">
                <img src={imgFirewalls} />
              </div>
              <br />
              <p>
                To read more about Evoxt's firewall features, click here :
                <Link to="/firewall"> https://evoxt.com/firewall/</Link>
              </p>
            </div>
            <div id="header-5" className="deployments">
              <h4>Quick deployments</h4>
              <p>
                In need of a server on short notice?
                <br />
                <br />
                It usually takes less than <strong>2.5 minutes</strong> for
                Evoxt to get a server deployed.
                <br />
                <br />
                The server will be up and running before you can even finish
                your coffee.
              </p>
            </div>
            <div id="header-6" className="isolated">
              <h4>Isolated</h4>
              <p>
                All our servers will be virtualized using
                <strong> KVM technology</strong> to ensure that the resources
                and data will be isolated for maximum security. There is no way
                another server can access and tamper with your server unless you
                authorize the access.
              </p>
              <p>
                Click here to learn more about KVM :
                <a href="https://www.redhat.com/en/topics/virtualization/what-is-KVM">
                  https://www.redhat.com/en/topics/virtualization/what-is-KVM
                </a>
              </p>
            </div>
            <div id="header-7" className="hardware">
              <h4>Enterprise grade hardware</h4>
              <p>
                Our servers come with enterprise-grade SSD that has
                <strong> high performance</strong> and reliability.
                <br />
                <br />
                Want your website to load faster? Your database query is
                starting to take time?
                <br />
                <br />
                Try hosting your website in Evoxt and feel the difference.
              </p>
            </div>
            <div id="header-8" className="ip-ranges">
              <h4>Clean IP ranges</h4>
              <p>
                We take extra measures to ensure that all our
                <strong> IPs will be clean.</strong>
                <br />
                <br />
                By default, port 25 is blocked, so spammers usually stay out
                from Evoxt.
                <br />
                <br />
                Our abuse team are also actively monitoring all reports that we
                receive and actively taking actions against bad users in this
                space that ruins our reputation with Evoxt's IP address.
                <br />
                <br />
                With all the measures in place, you can be assured to receive a
                clean IP that is not blocked and reachable to and from most
                networks when you deploy a server with Evoxt.
              </p>
            </div>
            <div id="header-9" className="future-ready">
              <h4>Future ready</h4>
              <p>
                Deploying your infrastructure with Evoxt means you are going
                <strong> future proof.</strong>
                <br />
                <br />
                Evoxt is a rapidly <strong> growing and expanding </strong>
                company. We are actively implementing and developing new
                technologies.
                <br />
                <br />
                With Evoxt, you will never stay behind on technologies. Things
                will get easier and easier for you as more technology is
                implemented.
              </p>
            </div>
            <div id="header-10" className="listen">
              <h4>We Listen from you</h4>
              <p>
                Believe it or not, we highly value your
                <strong> feedback</strong>
                <br />
                <br />
                We are always collecting your feedback from multiple places on
                our platform.
                <br />
                <br />
                We are actively trying to accommodate your feedback and
                complaints to make Evoxt your perfect hosting partner.
                <br />
                <br />
                Please do not hesitate to let us know when you are unhappy with
                our services. We will definitely change your 7 letter word
                "Unhappy" into 5 letter word "Happy"!
                <br />
                <br />
                All issues with Evoxt will get solved and there will be no
                unhappy customers with Evoxt.
                <br />
                If you have any feedback/ complaints, please send an email to
                <a href="mailto:feedback@evoxt.com"> feedback@evoxt.com</a>
              </p>
            </div>
            <div id="header-11" className="uptime">
              <h4>Uptime</h4>
              <p>
                We understand the criticality of your requirements because we
                are in the same position.
                <br />
                <br />
                Downtime with Evoxt is not tolerated and we will do our best to
                ensure your server gets <strong>100% uptime</strong> at all
                times.
                <br />
                <br />
                We are very transparent with our server's uptime, which can be
                viewed on <Link to="/status">https://status.evoxt.com</Link>
                <br />
                <br />
                Evoxt always attempts to achieve 100% uptime with our servers.
              </p>
              <div className="img">
                <img src={imgUptime} />
              </div>
            </div>
            <br />
            <div id="header-12" className="privacy">
              <h4>Privacy</h4>
              <p>
                We value your privacy and we
                <strong> do not collect more than we require.</strong>
                <br />
                <br />
                Evoxt is a <strong>privacy-focused</strong> company because we
                believe every human needs privacy and should value privacy.
                <br />
                <br />
                To create an account on Evoxt. We only require a name, your
                email and your password. We do not collect your address and
                credit card info to sign you up on Evoxt.
                <br />
                <br />
                Evoxt is very Cryptocurrency friendly, and we do not require any
                pieces of information from you when you pay with Cryptocurrency
                on Evoxt.
                <br />
                <br />
                Evoxt also promises not to hand out any of your information
                unless the law requires us to.
                <br />
                <br />
                Choose Evoxt to protect your privacy without losing any
                convenience.
              </p>
            </div>
            <div id="header-13" className="vnc">
              <h4>VNC</h4>
              <p>
                VNC access is implemented on all Evoxt servers. This will allow
                you to communicate with your servers through our host machines
                even if you bring your server's network down or when you disable
                SSH / RDP access on your servers.
                <br />
                <br />
                You can still control your server just like how you control your
                PC when you are <strong>physically there.</strong>
                <br />
                <div className="img">
                  <img src={imgVnc} />
                </div>
              </p>
            </div>
            <div id="header-14" className="customer-support">
              <h4>Customer support</h4>
              <p>
                How can we not mention this. Our customer support is top-notch,
                and we always receive compliments from our customers.
                <br />
                <br />
                Evoxt offers regular email and ticket support just like other
                providers.
                <br />
                <br />
                However, what sets us apart is that we understand ticketing and
                emailing can be troublesome. Hence we have a
                <strong>Discord</strong> contact and Telegram contact that
                customers can seek help there, quick and easily. As we believe
                that most of our customers are already using Discord and
                <strong> Telegram</strong>
              </p>
            </div>
            <div id="header-15" className="customer-satisfaction">
              <h4>Customer satisfaction</h4>
              <p>
                We care a lot about customer satisfaction. We even have a
                money-back guarantee with our services. If the services you
                receive are not to your liking, file a refund request within 7
                days, and we will get that processed for you.
              </p>
            </div>
            <div id="header-16" className="pricing">
              <h4>Pricing</h4>
              <p>
                Evoxt's pricing is <strong>transparent</strong>, you pay what
                you get on Evoxt, no extras.
                <br />
                <br />
                Take a look at our pricing page.
                <Link to="/pricing"> https://evoxt.com/pricing/</Link>
              </p>
            </div>
            <div id="header-17" className="scalability">
              <h4>Scalability</h4>
              <p>
                We understand that even the biggest corporations out there were
                once small companies.
                <br />
                <br />
                If your project currently does not require high performance, you
                can start with the smallest plan and
                <strong> scale up when needed </strong> in a few clicks. This
                can be done without requiring recreation of servers and transfer
                of data.
              </p>
            </div>
            <div id="header-18" className="address-management">
              <h4>IP address management</h4>
              <p>
                With Evoxt, you are not limited to just a single IP address on
                your server.
                <br />
                <br />
                We allow up to <strong> 5 extra IP addresses </strong> on each
                server and we also provide an easy to use and intuitive
                interface to manage your IP addresses.
              </p>
              <div className="img">
                <img src={imgAddressManagement} />
              </div>
            </div>
            <br />
            <div id="header-19" className="api">
              <h4>API</h4>
              <p>
                Evoxt also offers
                <strong>powerful and comprehensive APIs</strong> to manage your
                servers.
                <br />
                <br />
                With our APIs, you can even automate your actions on Evoxt
                without even needing to login into Evoxt.
                <br />
                <br />
                Our API is so comprehensive that we have multiple resellers that
                set up a reseller website with our API.
                <br />
                <br />
                Take a look at our API documentation here:
                <Link to="/status">https://api.evoxt.com</Link>
              </p>
              <div className="img">
                <img src={imgAddressManagement} />
              </div>
            </div>
            <br />
            <div id="header-20" className="passionate">
              <h4>We are passionate!</h4>
              <p>
                Hosting with a <strong>passionate</strong> host with a strong
                interest is very crucial. You wouldn't want to host or store
                your data with someone who is just in it for the money.
                <br />
                <br />
                You will never know when they want to sell or liquidate their
                company just for the money due to the lack of interest.
                <br />
                <br />
                When the company is sold, who knows what will be done to the
                company that got acquired.
                <br />
                <br />
                Will your data be sold? How about the service? What if the
                company is disassembled? This will never happen with Evoxt. F
                <br />
                <br />
                We will end this here. There are so much more reasons to choose
                Evoxt that are not listed here. Step into Evoxt and discover
                them yourself. We guarantee that you will not be disappointed.
                <br />
                <br />
                <Link to="/deploy/dashboard" target="_blank">
                  Deploy a server with Evoxt now!
                </Link>
              </p>
            </div>
            <br />
            <br />
            <br />
          </div>
          <div className="wrapper-right">
            <h3 className="title">High CPU Frequency Virtual Machines</h3>
            <p className="subtitle">Available Globally</p>
            <p className="price">
              Starting at <strong>$2.99</strong>
            </p>
            <button>
              <Link to="/deploy/dashboard">Deploy now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseEvoxt;
