import "../../css/Weekly/Section5/style.scss";
const Section5 = () => {
  return (
    <div className="weeklyPage">
      <div className="section__5">
        <div className="container">
          <h3>FAQ</h3>
          <ul>
            <li>
              Can I get other backup cycles instead of just weekly backup?
            </li>
            – Yes, we offer paid backup plans which take daily backups with an
            extra manual backup when required.
            <li>Can I have more backup copies stored instead of just one?</li>–
            Yes, we offer paid backup plans which have 5 backup rotation copies.
            <li>How long does it take to restore the backup?</li>– Due to the
            backup files being stored 100% offsite, restoring your backup
            usually takes around 5 mins for every 20 GB of disk space.
            <li>Does the backup count towards my disk space?</li>– No. They are
            isolated and do not count toward your VM disk space.
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section5;
