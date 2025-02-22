import "../../css/AccountUser/style.scss";
import { ReactComponent as Icon } from "../../assets/icons/AccountUser/icon.svg";
import { FaShield } from "react-icons/fa6";
import React, { useState } from "react";

const thead = ["Email Address", "Role", "2FA", "Actions"];
const choosePermissions = [
  "Modify Master Account Profile-Access and modify the client profile information",
  "View & Manage Contacts-Access and manage contacts",
  "View Products & Services-View access to products, services and addons",
  "Perform Single Sign-On-Allow single sign-on into services",
  "View Domains-View access to domain registrations",
];
const tabs = [
  {
    title: "Grant All Permissions",
    small: "*Danger*",
  },
  {
    title: "Choose Permissions",
    small: "*Recommended*",
  },
];
const AccountUser = () => {
  const [isTab, setTab] = useState("Grant All Permissions");
  return (
    <div className="AccountUserPage">
      <div className="container">
        <h1>User Management</h1>
        <div className="table">
          <p className="infor">
            Below are the users on your Evoxt Account. After adding a new user,
            you will be able to choose the permission you'd like your new user
            to have. Once you add the user, Evoxt will send them an email
            invitation. They must accept the invitation to have access to your
            Account.
          </p>
          <h2>1 Users</h2>
          <table>
            <thead>
              <tr>
                {thead.map((e, index) => (
                  <th className={`th-${index}`} key={index}>
                    {e}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="td-0">
                  <div className="emailAddress">
                    <div className="img">
                      <Icon className="imgIcon" />
                    </div>
                    <div className="email">
                      <p className="email-infor">trantai09032003@gmail.com</p>
                      <p className="email-time">Last Login: 4 hours ago</p>
                    </div>
                  </div>
                </td>
                <td className="td-1">
                  <p className="role">Owner</p>
                </td>
                <td className="td-2">
                  <p className="twofa">
                    <FaShield />
                    Disabled
                  </p>
                </td>
                <td className="td-3">
                  <p className="actions">
                    <button className="manage-permissions">
                      Manage Permissions
                    </button>
                    <button className="remove-access">Remove Access</button>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="notice">
            * Account owners always have full permissions over a client account.
          </p>
          <h2>Invite New User</h2>
          <p className="invite-infor">
            Inviting a new user allows you to invite a new user to your account.
            If the invitee already has an existing user account, they will be
            able to access your account using their existing login credentials.
            If the user does not yet have a user account, they will be able to
            create one.
          </p>
          <input
            className="input-invite"
            type="text"
            placeholder="johndoe@evoxt.com"
          />
          <div className="tabs">
            {tabs.map((e, index) => (
              <React.Fragment key={index}>
                <p
                  className={`tab ${e.title === isTab ? `tab-${index}` : ""}`}
                  onClick={() => setTab(e.title)}
                >
                  {e.title} <small>{e.small}</small>
                </p>
              </React.Fragment>
            ))}
          </div>
          {isTab === "Choose Permissions" && (
            <div className="choose-permissions">
              {choosePermissions.map((element, ind) => (
                <div key={ind} className="element">
                  <input type="checkbox" />
                  <p>{element}</p>
                </div>
              ))}
            </div>
          )}
          <div className="button">
            <button>Send Invite</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountUser;
