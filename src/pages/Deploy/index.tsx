import "../../css/Deploy/style.scss";
import { ReactComponent as Icon1Region } from "../../assets/icons/Deploy/Regin/icon1.svg";
import { ReactComponent as Icon2Region } from "../../assets/icons/Deploy/Regin/icon1.svg";
import { ReactComponent as Icon3Region } from "../../assets/icons/Deploy/Regin/icon2.svg";
import { ReactComponent as Icon4Region } from "../../assets/icons/Deploy/Regin/icon3.svg";
import { ReactComponent as Icon5Region } from "../../assets/icons/Deploy/Regin/icon4.svg";
import { ReactComponent as Icon6Region } from "../../assets/icons/Deploy/Regin/icon4.svg";
import { ReactComponent as Icon7Region } from "../../assets/icons/Deploy/Regin/icon5.svg";
import { ReactComponent as Icon8Region } from "../../assets/icons/Deploy/Regin/icon6.svg";
import { ReactComponent as Icon9Region } from "../../assets/icons/Deploy/Regin/icon7.svg";
import { ReactComponent as Icon10Region } from "../../assets/icons/Deploy/Regin/icon7.svg";
import { ReactComponent as Icon11Region } from "../../assets/icons/Deploy/Regin/icon8.svg";
import { ReactComponent as Icon12Region } from "../../assets/icons/Deploy/Regin/icon9.svg";
import { ReactComponent as Icon13Region } from "../../assets/icons/Deploy/Regin/icon10.svg";
import { ReactComponent as Icon1Os } from "../../assets/icons/Deploy/Os/icon1.svg";
import { ReactComponent as Icon2Os } from "../../assets/icons/Deploy/Os/icon2.svg";
import { ReactComponent as Icon3Os } from "../../assets/icons/Deploy/Os/icon3.svg";
import { ReactComponent as Icon4Os } from "../../assets/icons/Deploy/Os/icon4.svg";
import { ReactComponent as Icon5Os } from "../../assets/icons/Deploy/Os/icon5.svg";
import { ReactComponent as Icon1Ap } from "../../assets/icons/Deploy/Ap/icon1.svg";
import { ReactComponent as Icon2Ap } from "../../assets/icons/Deploy/Ap/icon2.svg";
import { ReactComponent as Icon3Ap } from "../../assets/icons/Deploy/Ap/icon3.svg";
import { ReactComponent as Icon4Ap } from "../../assets/icons/Deploy/Ap/icon4.svg";
import { ReactComponent as Icon5Ap } from "../../assets/icons/Deploy/Ap/icon5.svg";
import { ReactComponent as Icon6Ap } from "../../assets/icons/Deploy/Ap/icon6.svg";
import { ReactComponent as Icon7Ap } from "../../assets/icons/Deploy/Ap/icon7.svg";
import { ReactComponent as Icon8Ap } from "../../assets/icons/Deploy/Ap/icon8.svg";
import { ReactComponent as Icon9Ap } from "../../assets/icons/Deploy/Ap/icon9.svg";
import { ReactComponent as Icon10Ap } from "../../assets/icons/Deploy/Ap/icon10.svg";
import { ReactComponent as Icon11Ap } from "../../assets/icons/Deploy/Ap/icon11.svg";
import { ReactComponent as Icon12Ap } from "../../assets/icons/Deploy/Ap/icon12.svg";
import { ReactComponent as Icon13Ap } from "../../assets/icons/Deploy/Ap/icon13.svg";
import { ReactComponent as Icon14Ap } from "../../assets/icons/Deploy/Ap/icon14.svg";
import { ReactComponent as Icon15Ap } from "../../assets/icons/Deploy/Ap/icon15.svg";
import { ReactComponent as Icon16Ap } from "../../assets/icons/Deploy/Ap/icon16.svg";
import { ReactComponent as Icon17Ap } from "../../assets/icons/Deploy/Ap/icon17.svg";
import { ReactComponent as IconGame } from "../../assets/icons/Deploy/Game/icon.svg";
import { ReactComponent as Icon1CP } from "../../assets/icons/Deploy/ControlPanel/icon1.svg";
import { ReactComponent as Icon2CP } from "../../assets/icons/Deploy/ControlPanel/icon2.svg";
import icon3CP from "../../assets/icons/Deploy/ControlPanel/icon3.png";
import icon4CP from "../../assets/icons/Deploy/ControlPanel/icon4.png";
import { ReactComponent as Icon1Sm } from "../../assets/icons/Deploy/Summary/icon1.svg";
import { ReactComponent as Icon2Sm } from "../../assets/icons/Deploy/Summary/icon2.svg";
import { ReactComponent as Icon3Sm } from "../../assets/icons/Deploy/Summary/icon3.svg";
import { ReactComponent as Icon4Sm } from "../../assets/icons/Deploy/Summary/icon4.svg";
import { ReactComponent as Icon5Sm } from "../../assets/icons/Deploy/Summary/icon5.svg";
import { ReactComponent as Icon6Sm } from "../../assets/icons/Deploy/Summary/icon6.svg";
import { ReactComponent as Icon7Sm } from "../../assets/icons/Deploy/Summary/icon7.svg";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const region = [
  {
    icon: <Icon1Region className="iconRegion" />,
    title: "New York, US",
  },
  {
    icon: <Icon2Region className="iconRegion" />,
    title: "Los Angeles, US",
  },
  {
    icon: <Icon3Region className="iconRegion" />,
    title: "United Kingdom",
  },
  {
    icon: <Icon4Region className="iconRegion" />,
    title: "Germany",
  },
  {
    icon: <Icon5Region className="iconRegion" />,
    title: "Poland",
  },
  {
    icon: <Icon6Region className="iconRegion" />,
    title: "Malaysia",
  },
  {
    icon: <Icon7Region className="iconRegion" />,
    title: "Malaysia",
  },
  {
    icon: <Icon8Region className="iconRegion" />,
    title: "Hong Kong",
  },
  {
    icon: <Icon9Region className="iconRegion" />,
    title: "Osaka, JP",
  },
  {
    icon: <Icon10Region className="iconRegion" />,
    title: "Tokyo, JP",
  },
  {
    icon: <Icon11Region className="iconRegion" />,
    title: "Amsterdam, NL",
  },
  {
    icon: <Icon12Region className="iconRegion" />,
    title: "Montreal, CA",
  },
  {
    icon: <Icon13Region className="iconRegion" />,
    title: "Sydney, AU",
  },
];
const specifications = [
  {
    title: "VM-0.5",
    infor: (
      <>
        <p className="infor">
          1 vCore <br />
          512 MB RAM <br />
          5 GB Storage <br />
          Weekly Backup
        </p>
        <hr />
      </>
    ),
    pricestatus: (
      <div className="pricestatus">
        <p className="price">$2.99</p>
        <div className="verticalline"></div>
        <p className="status">Available</p>
      </div>
    ),
  },
  {
    title: "VM-0.75",
    infor: (
      <>
        <p className="infor">
          1 vCore <br />
          1 GB RAM <br />
          10 GB Storage <br />
          Weekly Backup
        </p>
        <hr />
      </>
    ),
    pricestatus: (
      <div className="pricestatus">
        <p className="price">$4.99</p>
        <div className="verticalline"></div>
        <p className="status">Available</p>
      </div>
    ),
  },
  {
    title: "VM-1",
    infor: (
      <>
        <p className="infor">
          1 vCore <br />
          512 MB RAM <br />
          5 GB Storage <br />
          Weekly Backup
        </p>
        <hr />
      </>
    ),
    pricestatus: (
      <div className="pricestatus">
        <p className="price">$2.99</p>
        <div className="verticalline"></div>
        <p className="status">Available</p>
      </div>
    ),
  },
  {
    title: "VM-1.5",
    infor: (
      <>
        <p className="infor">
          1 vCore <br />
          512 MB RAM <br />
          5 GB Storage <br />
          Weekly Backup
        </p>
        <hr />
      </>
    ),
    pricestatus: (
      <div className="pricestatus">
        <p className="price">$2.99</p>
        <div className="verticalline"></div>
        <p className="status">Available</p>
      </div>
    ),
  },
  {
    title: "VM-2",
    infor: (
      <>
        <p className="infor">
          1 vCore <br />
          512 MB RAM <br />
          5 GB Storage <br />
          Weekly Backup
        </p>
        <hr />
      </>
    ),
    pricestatus: (
      <div className="pricestatus">
        <p className="price">$2.99</p>
        <div className="verticalline"></div>
        <p className="status">Available</p>
      </div>
    ),
  },
  {
    title: "VM-3",
    infor: (
      <>
        <p className="infor">
          1 vCore <br />
          512 MB RAM <br />
          5 GB Storage <br />
          Weekly Backup
        </p>
        <hr />
      </>
    ),
    pricestatus: (
      <div className="pricestatus">
        <p className="price">$2.99</p>
        <div className="verticalline"></div>
        <p className="status">Available</p>
      </div>
    ),
  },
  {
    title: "VM-4",
    infor: (
      <>
        <p className="infor">
          1 vCore <br />
          512 MB RAM <br />
          5 GB Storage <br />
          Weekly Backup
        </p>
        <hr />
      </>
    ),
    pricestatus: (
      <div className="pricestatus">
        <p className="price">$2.99</p>
        <div className="verticalline"></div>
        <p className="status">Available</p>
      </div>
    ),
  },
  {
    title: "VM-6",
    infor: (
      <>
        <p className="infor">
          1 vCore <br />
          512 MB RAM <br />
          5 GB Storage <br />
          Weekly Backup
        </p>
        <hr />
      </>
    ),
    pricestatus: (
      <div className="pricestatus">
        <p className="price">$2.99</p>
        <div className="verticalline"></div>
        <p className="status">Available</p>
      </div>
    ),
  },
  {
    title: "VM-8",
    infor: (
      <>
        <p className="infor">
          1 vCore <br />
          512 MB RAM <br />
          5 GB Storage <br />
          Weekly Backup
        </p>
        <hr />
      </>
    ),
    pricestatus: (
      <div className="pricestatus">
        <p className="price">$2.99</p>
        <div className="verticalline"></div>
        <p className="status">Available</p>
      </div>
    ),
  },
  {
    title: "VM-12",
    infor: (
      <>
        <p className="infor">
          1 vCore <br />
          512 MB RAM <br />
          5 GB Storage <br />
          Weekly Backup
        </p>
        <hr />
      </>
    ),
    pricestatus: (
      <div className="pricestatus">
        <p className="price">$2.99</p>
        <p className="status">Available</p>
      </div>
    ),
  },
  {
    title: "VM-16",
    infor: (
      <>
        <p className="infor">
          1 vCore <br />
          512 MB RAM <br />
          5 GB Storage <br />
          Weekly Backup
        </p>
        <hr />
      </>
    ),
    pricestatus: (
      <div className="pricestatus">
        <p className="price">$2.99</p>
        <p className="status">Available</p>
      </div>
    ),
  },
];
const listChoice = ["Operating System", "Application", "Game", "Control Panel"];
const os = [
  {
    icon: <Icon1Os className="iconOs" />,
    title: "Ubuntu",
    subTitle: (
      <p className="subTitle">
        min spec required <br /> VM-0.5 ~ VM-0.75
      </p>
    ),
    pricestatus: <p className="pricestatus">Ubuntu 24.04 x64</p>,
  },
  {
    icon: <Icon2Os className="iconOs" />,
    title: "Debian",
    subTitle: (
      <p className="subTitle">
        min spec required <br /> VM-0.5
      </p>
    ),
    pricestatus: <p className="pricestatus">Debian 12 x64</p>,
  },
  {
    icon: <Icon3Os className="iconOs" />,
    title: "AlmaLinux",
    subTitle: (
      <p className="subTitle">
        min spec required <br /> VM-0.5
      </p>
    ),
    pricestatus: <p className="pricestatus">AlmaLinux 9.4 x64</p>,
  },
  {
    icon: <Icon4Os className="iconOs" />,
    title: "Rocky Linux",
    subTitle: (
      <p className="subTitle">
        min spec required <br /> VM-0.5 ~ VM-0.75
      </p>
    ),
    pricestatus: <p className="pricestatus">Rocky Linux 9.3 x64</p>,
  },
  {
    icon: <Icon5Os className="iconOs" />,
    title: "Windows",
    subTitle: (
      <p className="subTitle">
        min spec required <br /> VM-1 ~ VM-3
      </p>
    ),
    pricestatus: <p className="pricestatus">Windows 2016 Datacenter</p>,
  },
];
const ap = [
  {
    icon: <Icon1Ap className="iconAp" />,
    title: "WordPress",
    subTitle: (
      <p className="subTitle">
        min spec required <br /> VM-0.5 ~ VM-0.75
      </p>
    ),
    pricestatus: <p className="pricestatus">WordPress</p>,
  },
  {
    icon: <Icon2Ap className="iconAp" />,
    title: "WordPress+Litespeed",
    subTitle: (
      <p className="subTitle">
        min spec required <br /> VM-0.5 ~ VM-0.75
      </p>
    ),
    pricestatus: <p className="pricestatus">WordPress+Litespeed</p>,
  },
  {
    icon: <Icon3Ap className="iconAp" />,
    title: "Magento",
    subTitle: (
      <p className="subTitle">
        min spec required <br /> VM-0.5 ~ VM-0.75
      </p>
    ),
    pricestatus: <p className="pricestatus">Magento</p>,
  },
  {
    icon: <Icon4Ap className="iconAp" />,
    title: "Drupal",
    subTitle: (
      <p className="subTitle">
        min spec required <br /> VM-0.5 ~ VM-0.75
      </p>
    ),
    pricestatus: <p className="pricestatus">Drupal</p>,
  },
  {
    icon: <Icon5Ap className="iconAp" />,
    title: "LAMP",
    subTitle: (
      <p className="subTitle">
        min spec required <br /> VM-0.5 ~ VM-0.75
      </p>
    ),
    pricestatus: <p className="pricestatus">LAMP</p>,
  },
  {
    icon: <Icon6Ap className="iconAp" />,
    title: "LEMP",
    subTitle: (
      <p className="subTitle">
        min spec required <br /> VM-0.5 ~ VM-0.75
      </p>
    ),
    pricestatus: <p className="pricestatus">LEMP</p>,
  },
  {
    icon: <Icon7Ap className="iconAp" />,
    title: "Joomla",
    subTitle: (
      <p className="subTitle">
        min spec required <br /> VM-0.5 ~ VM-0.75
      </p>
    ),
    pricestatus: <p className="pricestatus">Joomla</p>,
  },
  {
    icon: <Icon8Ap className="iconAp" />,
    title: "Prestashop",
    subTitle: (
      <p className="subTitle">
        min spec required <br /> VM-0.5 ~ VM-0.75
      </p>
    ),
    pricestatus: <p className="pricestatus">Prestashop</p>,
  },
  {
    icon: <Icon9Ap className="iconAp" />,
    title: "Chevereto",
    subTitle: (
      <p className="subTitle">
        min spec required <br /> VM-0.5 ~ VM-0.75
      </p>
    ),
    pricestatus: <p className="pricestatus">Chevereto</p>,
  },
  {
    icon: <Icon10Ap className="iconAp" />,
    title: "WordPress",
    subTitle: (
      <p className="subTitle">
        min spec required <br /> VM-0.5 ~ VM-0.75
      </p>
    ),
    pricestatus: <p className="pricestatus">WordPress</p>,
  },
  {
    icon: <Icon11Ap className="iconAp" />,
    title: "Nextcloud",
    subTitle: (
      <p className="subTitle">
        min spec required <br /> VM-0.5 ~ VM-0.75
      </p>
    ),
    pricestatus: <p className="pricestatus">Nextcloud</p>,
  },
  {
    icon: <Icon12Ap className="iconAp" />,
    title: "Docker",
    subTitle: (
      <p className="subTitle">
        min spec required <br /> VM-0.5 ~ VM-0.75
      </p>
    ),
    pricestatus: <p className="pricestatus">Docker</p>,
  },
  {
    icon: <Icon13Ap className="iconAp" />,
    title: "Gitlab",
    subTitle: (
      <p className="subTitle">
        min spec required <br /> VM-0.5 ~ VM-0.75
      </p>
    ),
    pricestatus: <p className="pricestatus">Gitlab</p>,
  },
  {
    icon: <Icon14Ap className="iconAp" />,
    title: "OpenLiteSpeed",
    subTitle: (
      <p className="subTitle">
        min spec required <br /> VM-0.5 ~ VM-0.75
      </p>
    ),
    pricestatus: <p className="pricestatus">OpenLiteSpeed</p>,
  },
  {
    icon: <Icon15Ap className="iconAp" />,
    title: "Pritunl",
    subTitle: (
      <p className="subTitle">
        min spec required <br /> VM-0.5 ~ VM-0.75
      </p>
    ),
    pricestatus: <p className="pricestatus">Pritunl</p>,
  },
  {
    icon: <Icon16Ap className="iconAp" />,
    title: "Bitwarden",
    subTitle: (
      <p className="subTitle">
        min spec required <br /> VM-0.5 ~ VM-0.75
      </p>
    ),
    pricestatus: <p className="pricestatus">Bitwarden</p>,
  },
  {
    icon: <Icon17Ap className="iconAp" />,
    title: "OpenVPN",
    subTitle: (
      <p className="subTitle">
        min spec required <br /> VM-0.5 ~ VM-0.75
      </p>
    ),
    pricestatus: <p className="pricestatus">OpenVPN</p>,
  },
];

const game = [
  {
    icon: <IconGame className="iconGame" />,
    title: "Minecraft",
    subTitle: (
      <p className="subTitle">
        min spec required <br /> VM-0.5 ~ VM-0.75
      </p>
    ),
    pricestatus: <p className="pricestatus">Minecraft</p>,
  },
];

const cp = [
  {
    icon: <Icon1CP className="iconCp" />,
    title: "CyberPanel",
    subTitle: (
      <p className="subTitle">
        min spec required <br /> VM-0.5 ~ VM-0.75
      </p>
    ),
    pricestatus: <p className="pricestatus">CyberPanel</p>,
  },
  {
    icon: <Icon2CP className="iconCp" />,
    title: "cPanel",
    subTitle: (
      <p className="subTitle">
        min spec required <br /> VM-0.5 ~ VM-0.75
      </p>
    ),
    pricestatus: <p className="pricestatus">cPanel</p>,
  },
  {
    icon: icon3CP,
    title: "VestaCP",
    subTitle: (
      <p className="subTitle">
        min spec required <br /> VM-0.5 ~ VM-0.75
      </p>
    ),
    pricestatus: <p className="pricestatus">VestaCP</p>,
  },
  {
    icon: icon4CP,
    title: "HestiaCP",
    subTitle: (
      <p className="subTitle">
        min spec required <br /> VM-0.5 ~ VM-0.75
      </p>
    ),
    pricestatus: <p className="pricestatus">HestiaCP</p>,
  },
];

const bc = [
  "Monthly",
  "Quarterly",
  "Semi-Annually",
  "Semi-Annually (-5%)",
  "Annually (-10%)",
];

const sm = [
  <Icon1Sm className="iconW140Sm" />,
  <Icon2Sm className="iconW30Sm" />,
  <Icon3Sm className="iconW30Sm" />,
  <Icon4Sm className="iconW140Sm" />,
  <Icon5Sm className="iconW140Sm" />,
  <Icon6Sm className="iconW140Sm" />,
  <Icon7Sm className="iconW140Sm" />,
];
const smright = [
  { title: "Region", content: "Los Angeles, US" },
  { title: "Server Specifications", content: "VM-1.5" },
  { title: "Operating System", content: "minecraft" },
  { title: "Server Price", content: "$6.95" },
  { title: "Billing Plan", content: "Monthly" },
  { title: "Quantity", content: "1" },
  { title: "Subtotal", content: "$6.95" },
  { title: "Discount", content: "-$0.00" },
  { title: "Total", content: "$6.95" },
];
const Deploy = () => {
  const [isTab, setTab] = useState("Operating System");
  return (
    <div className="deployPage">
      <div className="container">
        <div className="table">
          <h1>Deploy a Server</h1>
          <div className="region">
            <h2>Region</h2>
            <div className="region-list">
              {region.map((e, index) => (
                <div
                  className={`region-element region-element-${index}`}
                  key={index}
                  tabIndex={0}
                >
                  {e.title === "New York, US" && (
                    <div className="region-label-outOfStock">
                      Temporary out of stock
                    </div>
                  )}
                  <div>{e.icon}</div>
                  <p className="region-title">{e.title}</p>
                  {(e.title === "Malaysia" ||
                    e.title === "Hong Kong" ||
                    e.title === "Osaka, JP") && (
                    <div className="region-label-premium">Premium Net</div>
                  )}
                  {(e.title === "Amsterdam, NL" ||
                    e.title === "Montreal, CA" ||
                    e.title === "Sydney, AU") && (
                    <div className="region-label-new">NEW</div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="specifications">
            <h2>Specifications</h2>
            <div className="specifications-list">
              {specifications.map((e, index) => (
                <div
                  className="specifications-element"
                  key={index}
                  tabIndex={0}
                >
                  <p className="title">{e.title}</p>
                  {e.infor}
                  {e.pricestatus}
                </div>
              ))}
            </div>
          </div>
          <div className="operatingSystem">
            <div className="overflow-x">
              <div className="listChoice">
                {listChoice.map((e, index) => (
                  <button
                    className={`${e === isTab ? "button-active" : ""}`}
                    onClick={() => setTab(e)}
                    key={index}
                  >
                    {e}
                  </button>
                ))}
              </div>
            </div>
            {isTab === "Operating System" && (
              <div className="os">
                {os.map((e, index) => (
                  <div className="os-element" key={index} tabIndex={0}>
                    <div className="os-element-top">
                      <div className="img">
                        {e.icon}
                        <p className="title">{e.title}</p>
                      </div>
                      {e.subTitle}
                    </div>
                    <hr />
                    <div className="os-element-bottom">
                      {e.pricestatus} <IoIosArrowDown />
                    </div>
                  </div>
                ))}
              </div>
            )}
            {isTab === "Application" && (
              <div className="ap">
                {ap.map((e, index) => (
                  <div className="ap-element" key={index} tabIndex={0}>
                    <div className="ap-element-top">
                      <div className="img">
                        {e.icon}
                        <p className="title">{e.title}</p>
                      </div>
                      {e.subTitle}
                    </div>
                    <hr />
                    <div className="ap-element-bottom">{e.pricestatus}</div>
                  </div>
                ))}
              </div>
            )}
            {isTab === "Game" && (
              <div className="game">
                {game.map((e, index) => (
                  <div className="game-element" key={index} tabIndex={0}>
                    <div className="game-element-top">
                      <div className="img">
                        {e.icon}
                        <p className="title">{e.title}</p>
                      </div>
                      {e.subTitle}
                    </div>
                    <hr />
                    <div className="game-element-bottom">{e.pricestatus}</div>
                  </div>
                ))}
              </div>
            )}
            {isTab === "Control Panel" && (
              <div className="cp">
                {cp.map((e, index) => (
                  <div className="cp-element" key={index} tabIndex={0}>
                    <div className="cp-element-top">
                      <div className="img">
                        {e.title === "CyberPanel" || e.title === "cPanel" ? (
                          <>{e.icon}</>
                        ) : (
                          <>
                            <img
                              src={typeof e.icon === "string" ? e.icon : ""}
                            />
                          </>
                        )}
                        <p className="title">{e.title}</p>
                      </div>
                      {e.subTitle}
                    </div>
                    <hr />
                    <div className="cp-element-bottom">{e.pricestatus}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="quantity">
            <h2>Quantity</h2>
            <div className="quantity-count">
              <button className="quantity-count-minus">-</button>
              <input type="number" name="quantity" value={1} min={1} max={50} />
              <button className="quantity-count-add">+</button>
            </div>
          </div>
          <div className="hostname">
            <h2>Hostname</h2>
            <div className="hostname-content">
              <div className="hostname-content-title">
                Choose a unique name that will make it simple to identify your
                service.
                <br />
                Your server name can only contain alphanumeric characters,
                dashes, and periods.
              </div>
              <div className="hostname-content-inner">
                <p className="serverlabel-inner">Server 1</p>
                <input type="text" placeholder="tai-rsih-01.evoxt.com" />
              </div>
            </div>
          </div>
          <div className="sshkey">
            <h2>SSH Key (Optional)</h2>
            <div className="sshkey-content">
              <div className="sshkey-select">
                None <IoIosArrowDown />
              </div>
              <div className="sshkey-add">+ Add SSH Key</div>
            </div>
          </div>
          <div className="startup">
            <h2>Start-up Script (Optional)</h2>
            <div className="startup-content">
              <p className="startup-content-title">
                Scripts to execute on initial VM deployment (Linux only)
              </p>
              <textarea
                className="startup-content-textarea"
                rows={6}
                placeholder="#!/bin/bash"
              />
            </div>
          </div>
          <div className="settings">
            <h2>Settings</h2>
            <div className="settings-content">
              <div className="settings-option">
                <p>Disable IPv6</p>
                <input type="checkbox" />
              </div>
              <p className="settings-infor">
                For those that are done with future-proofing because IPv6 has so
                many issues
              </p>
            </div>
          </div>
          <div className="billingcycle">
            <h2>Billing Cycle</h2>
            <div className="billingcycle-content">
              {bc.map((e, index) => (
                <label tabIndex={0} key={index}>
                  {e}
                </label>
              ))}
            </div>
          </div>
          <div className="summary">
            <h2>Summary</h2>
            <div className="summary-content">
              <div className="summary-content-left">
                <p className="summary-content-left-titleTime">
                  Estimated Deployment Time <strong>&lt; 3 mins</strong>
                </p>
                <p className="summary-content-left-titlePayment">
                  Choose a Payment Method
                </p>
                <div className="summary-content-left-choosePayment">
                  {sm.map((e, index) => (
                    <div className="box" key={index}>
                      <div>{e}</div>
                      {index === 1 && (
                        <p className="credit">Credit Card/ Debit Card</p>
                      )}
                      {index === 2 && <p className="tether">Tether</p>}
                    </div>
                  ))}
                </div>
                <div className="summary-content-left-affiliate">
                  <p className="summary-content-left-affiliate-title">
                    Affiliate Code
                  </p>
                  <div className="summary-content-left-affiliate-apply">
                    <input placeholder="Optional" />
                    <button>Apply</button>
                  </div>
                </div>
              </div>
              <div className="summary-content-right">
                <div className="summary-content-right-top">
                  <h4>Summary</h4>
                  {smright.map((e, index) => (
                    <div className={`wrap wrap-${index}`} key={index}>
                      <p className="title">{e.title}</p>
                      <p className="content">{e.content}</p>
                    </div>
                  ))}
                </div>
                <div className="summary-content-right-bottom">
                  <button>Deploy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deploy;
