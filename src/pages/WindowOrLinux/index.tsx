import "../../css/WindowOrLinux/style.scss";
import img1 from "../../assets/images/GUI/img1.png";
import img2 from "../../assets/images/GUI/img2.png";
import img3 from "../../assets/images/GUI/img3.jpg";
import img4 from "../../assets/images/GUI/img4.jpg";
import { Link } from "react-router-dom";
const WindowOrLinux = () => {
  return (
    <div className="windowOrLinuxPage">
      <div className="container">
        <div className="wrap">
          <h1>Windows Server or Linux Server?</h1>
          <p>
            Should I deploy a Windows server or a Linux server?
            <br />
            <br />
            Let's compare the two operating systems for servers' needs.
          </p>
          <br />
          <br />
          <strong>GUI – Graphical User Interface</strong>
          <p>
            Windows OS has easy to use graphical user interface. While Linux OS
            usually does not comes with GUI to control and manage your servers.
          </p>
          <br />
          <p>
            This will look like Windows OS is a plus. However, Windows OS will
            have to sacrifice some performance because of the easy to use GUI
            while Linux will run at a better performance because of the lack of
            GUI.
          </p>
          <div className="gui">
            <div className="gui-left">
              <img src={img1} />
              <p>An example of Windows Server 2016 graphical user interface.</p>
            </div>
            <div className="gui-right">
              <img src={img2} />
              <p>
                Linux OS does not have any graphical user interface. The above
                shows AlmaLinux command-line interface connected using the PuTTY
                client.
              </p>
            </div>
          </div>
          <br />
          <strong>Protocols / Client</strong>
          <br />
          <p>
            Windows OS mainly uses RDP ( Remote Desktop Protocols ) that
            Microsoft develops, while Linux OS mainly uses SSH ( Secure Shell )
            to connect.
          </p>
          <div className="protocols">
            <div className="protocols-left">
              <img src={img3} />
              <p>
                Above shows Remote Desktop Client that utilizes remote desktop
                protocol to connect and control Windows OS-based servers.
              </p>
            </div>
            <div className="protocols-right">
              <img src={img4} />
              <p>
                Above shows PuTTY, one of the most popular SSH client that are
                used to connect and control Linux OS based servers.
              </p>
            </div>
          </div>
          <strong>Speed</strong>
          <br />
          <p>
            Linux servers are generally well optimized and known to run well
            even on lower spec servers, while Windows servers are known to get
            slower as the server ages. Windows servers also hog many resources
            just by being idle, while Linux servers barely use any resources.
          </p>
          <br />
          <strong>Reliability</strong>
          <br />
          <p>
            Linux servers are all open-sourced, and the code can be reviewed by
            every developer in the world and applying vulnerability fixes
            instantly, making it very secure and reliable. Linux servers are
            also known to be very reliable and power most of the currently
            running servers. There is also almost no malware for Linux servers
            which makes Linux servers very secure. Unlike Windows Server,
            Windows OS is closed sourced, and if there is any vulnerability,
            developers have to wait for Microsoft to fix and patch the
            vulnerability. Windows are also prone to malware as users can be
            easily tricked into downloading malware.
          </p>
          <br />
          <strong>Program support</strong>
          <br />
          <p>
            One upside Windows server has over Linux server is that Windows
            servers support .exe executable file extensions, which are the most
            popular file extensions that Microsoft supports to run programs
            easily while Linux server does not. One of the biggest reasons users
            deploy a Windows server over a Linux server is because of this.
          </p>
          <br />
          <strong>Hardware Requirement</strong>
          <br />
          <p>
            Linux servers do not require powerful hardware to run due to being
            speed optimized and lacking a graphical user interface, enabling
            Linux to run smoothly on the smallest server, such as a single core
            server with 256 MB rams. Windows servers require at least a single
            core with at least a 3.2 GHz clock and 2 GB ram to run smoothly from
            our testing.
          </p>
          <br />
          <strong>When should I choose this over the other?</strong>
          <br />
          <p>
            This depends on your use case, does the program you are going to run
            supports Linux OS? If that is the case, we strongly recommend
            deploying a Linux server as it is faster, more reliable, and secure
            than Windows OS. Linux OS also uses fewer resources which will save
            a lot of cost in the long term.
            <Link to="/deploy/dashboard">Deploy a server</Link>
            now!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WindowOrLinux;
