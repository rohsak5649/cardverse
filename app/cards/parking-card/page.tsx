import styles from "./parkingCard.module.css";

export default function ParkingCardPage() {
  return (
    <main className={styles.wrapper}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.card}>
          <div className={styles.topRow}>
            <span className={styles.bank}>CARDVERSE ISSUER</span>
            <span className={styles.issuer}>NFC / RFID / ANPR</span>
          </div>

          <div className={styles.number}>
            8452&nbsp;19XX&nbsp;XXXX&nbsp;3374
          </div>

          <div className={styles.footer}>
            <div>
              <span>Vehicle Owner</span>
              <strong>ROHAN SAKHARE</strong>
            </div>
            <div className={styles.type}>PARKING</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        {/* INTRO */}
        <div className={styles.block}>
          <h2>What is a Parking Card?</h2>
          <p>
            A Parking Card is a usage-based payment instrument designed to enable
            seamless, cashless parking payments in locations such as malls,
            airports, corporate campuses, hospitals, smart cities, and public
            parking zones.
          </p>
          <p>
            Parking cards automate entry, duration tracking, and exit payments
            without manual ticketing or cash handling.
          </p>
        </div>

        {/* POSITIONING */}
        <div className={styles.block}>
          <h2>Parking Card Positioning</h2>
          <ul>
            <li><strong>Card Type:</strong> Usage-Based Card</li>
            <li><strong>Primary Use:</strong> Vehicle parking payments</li>
            <li><strong>Technology:</strong> NFC / RFID / ANPR</li>
            <li><strong>Billing Model:</strong> Time-based / Slot-based</li>
            <li><strong>Risk Model:</strong> Low to Medium</li>
          </ul>
        </div>

        {/* ECOSYSTEM */}
        <div className={styles.block}>
          <h2>Entities in Parking Card Ecosystem</h2>
          <ul>
            <li><strong>Vehicle Owner:</strong> Cardholder</li>
            <li><strong>Parking Entry Gate:</strong> Access control</li>
            <li><strong>Parking Management System:</strong> Time tracking</li>
            <li><strong>Issuer / Wallet Provider:</strong> Balance & rules</li>
            <li><strong>Parking Operator:</strong> Facility owner</li>
            <li><strong>Clearing System:</strong> Settlement & reporting</li>
          </ul>
        </div>

        {/* TYPES */}
        <div className={styles.block}>
          <h2>Types of Parking Cards</h2>
          <ul>
            <li>Prepaid Parking Card</li>
            <li>Wallet-Linked Parking Card</li>
            <li>Residential Parking Card</li>
            <li>Corporate Campus Parking Card</li>
            <li>Visitor / Temporary Parking Card</li>
          </ul>
        </div>

        {/* ISSUANCE */}
        <div className={styles.block}>
          <h2>Parking Card Issuance Flow</h2>
          <ol>
            <li>User or vehicle registered</li>
            <li>Parking card or tag issued</li>
            <li>Vehicle mapped to card</li>
            <li>Tariff plan configured</li>
            <li>Card activated for parking usage</li>
          </ol>
        </div>

        {/* MAIN FLOW */}
        <div className={styles.block}>
          <h2>Parking Transaction Flow (ENTRY → EXIT)</h2>

          <div className={styles.flow}>
            <span>Vehicle</span>
            <span>Entry Gate</span>
            <span>Parking System</span>
            <span>Tariff Engine</span>
            <span>Issuer Wallet</span>
          </div>

          <ol>
            <li>Vehicle arrives at parking entry</li>
            <li>Card / tag / number plate detected</li>
            <li>Entry time recorded</li>
            <li>Vehicle parked for duration</li>
            <li>Exit gate calculates parking fee</li>
            <li>Amount debited automatically</li>
          </ol>
        </div>

        {/* BILLING */}
        <div className={styles.block}>
          <h2>Parking Billing & Tariff Logic</h2>
          <ul>
            <li>Hourly or slab-based pricing</li>
            <li>Flat rate for fixed duration</li>
            <li>Free parking thresholds</li>
            <li>Penalty for overstay</li>
            <li>Dynamic pricing for peak hours</li>
          </ul>
        </div>

        {/* OFFLINE */}
        <div className={styles.block}>
          <h2>Offline & Fail-Safe Handling</h2>
          <p>
            Parking systems must operate even during connectivity failures.
            Offline authorization ensures gates remain operational.
          </p>
          <ul>
            <li>Cached vehicle & card permissions</li>
            <li>Deferred debit posting</li>
            <li>Exit allowed with negative balance</li>
            <li>Post-event reconciliation</li>
          </ul>
        </div>

        {/* SECURITY */}
        <div className={styles.block}>
          <h2>Security & Misuse Prevention</h2>
          <ul>
            <li>Entry–exit correlation checks</li>
            <li>Vehicle number plate matching</li>
            <li>Duplicate entry prevention</li>
            <li>Blacklisting stolen cards</li>
          </ul>
        </div>

        {/* FAILURE */}
        <div className={styles.block}>
          <h2>Common Failure Scenarios</h2>
          <ul>
            <li>Insufficient balance</li>
            <li>Unreadable card or tag</li>
            <li>Missing exit scan</li>
            <li>System or gate malfunction</li>
          </ul>
        </div>

        {/* SETTLEMENT */}
        <div className={styles.block}>
          <h2>Clearing & Settlement</h2>
          <p>
            Parking transactions are settled periodically between the parking
            operator and issuer. Detailed reports include entry time, exit time,
            duration, and fee.
          </p>
        </div>

        {/* ADVANTAGES */}
        <div className={styles.block}>
          <h2>Advantages</h2>
          <ul>
            <li>Cashless parking experience</li>
            <li>Faster entry and exit</li>
            <li>Reduced manpower cost</li>
            <li>Accurate duration-based billing</li>
          </ul>
        </div>

        {/* LIMITATIONS */}
        <div className={styles.block}>
          <h2>Limitations & Risks</h2>
          <ul>
            <li>Infrastructure dependency</li>
            <li>Hardware maintenance</li>
            <li>Edge-case billing disputes</li>
          </ul>
        </div>

        {/* SUMMARY */}
        <div className={styles.block}>
          <h2>Summary</h2>
          <p>
            Parking Cards enable fully automated, smart parking ecosystems.
            By combining entry–exit tracking, time-based billing, and cashless
            payments, they significantly improve user experience and operational
            efficiency in urban environments.
          </p>
        </div>

      </section>
    </main>
  );
}
