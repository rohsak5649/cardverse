import styles from "./tollCard.module.css";

export default function TollCardPage() {
  return (
    <main className={styles.wrapper}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.card}>
          <div className={styles.topRow}>
            <span className={styles.bank}>CARDVERSE ISSUER</span>
            <span className={styles.issuer}>RFID / NFC</span>
          </div>

          <div className={styles.number}>
            7845&nbsp;30XX&nbsp;XXXX&nbsp;6621
          </div>

          <div className={styles.footer}>
            <div>
              <span>Vehicle Owner</span>
              <strong>ROHAN SAKHARE</strong>
            </div>
            <div className={styles.type}>TOLL</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        {/* INTRO */}
        <div className={styles.block}>
          <h2>What is a Toll Card?</h2>
          <p>
            A Toll Card is a usage-based payment instrument designed specifically
            for automatic toll collection on highways, expressways, and bridges.
            It enables vehicles to pass through toll plazas without stopping,
            ensuring faster traffic movement and reduced congestion.
          </p>
          <p>
            Toll cards are typically linked to RFID tags or contactless
            identifiers and operate on prepaid or wallet-based models.
          </p>
        </div>

        {/* POSITIONING */}
        <div className={styles.block}>
          <h2>Toll Card Positioning</h2>
          <ul>
            <li><strong>Card Type:</strong> Usage-Based Card</li>
            <li><strong>Primary Use:</strong> Highway & bridge toll payments</li>
            <li><strong>Technology:</strong> RFID / NFC / ANPR</li>
            <li><strong>Authorization Mode:</strong> Semi-offline</li>
            <li><strong>Risk Model:</strong> Controlled offline exposure</li>
          </ul>
        </div>

        {/* ECOSYSTEM */}
        <div className={styles.block}>
          <h2>Entities in Toll Payment Ecosystem</h2>
          <ul>
            <li><strong>Vehicle Owner:</strong> Cardholder</li>
            <li><strong>RFID Tag / Toll Card:</strong> Vehicle identifier</li>
            <li><strong>Toll Plaza:</strong> Entry/exit collection point</li>
            <li><strong>Toll Operator:</strong> Highway authority</li>
            <li><strong>Issuer / Wallet Provider:</strong> Balance management</li>
            <li><strong>Clearing House:</strong> Reconciliation & settlement</li>
          </ul>
        </div>

        {/* TYPES */}
        <div className={styles.block}>
          <h2>Types of Toll Cards</h2>
          <ul>
            <li>Prepaid Toll Card</li>
            <li>Wallet-Linked Toll Card</li>
            <li>Vehicle-Specific Toll Card</li>
            <li>Fleet / Commercial Toll Card</li>
            <li>Hybrid RFID + Card Model</li>
          </ul>
        </div>

        {/* ISSUANCE */}
        <div className={styles.block}>
          <h2>Toll Card Issuance Flow</h2>
          <ol>
            <li>Vehicle registration & KYC</li>
            <li>Toll card or RFID tag issued</li>
            <li>Vehicle mapped to toll account</li>
            <li>Initial balance loaded</li>
            <li>Card activated for toll usage</li>
          </ol>
        </div>

        {/* MAIN FLOW */}
        <div className={styles.block}>
          <h2>Toll Transaction Flow (Barrier-Free)</h2>

          <div className={styles.flow}>
            <span>Vehicle</span>
            <span>Toll Reader</span>
            <span>Toll System</span>
            <span>Issuer Wallet</span>
            <span>Clearing</span>
          </div>

          <ol>
            <li>Vehicle approaches toll lane</li>
            <li>RFID/NFC tag detected</li>
            <li>Toll amount calculated</li>
            <li>Balance checked (online or cached)</li>
            <li>Gate opens automatically</li>
            <li>Amount debited from wallet</li>
          </ol>
        </div>

        {/* OFFLINE */}
        <div className={styles.block}>
          <h2>Offline & Deferred Authorization</h2>
          <p>
            Toll systems cannot afford delays. In low-connectivity scenarios,
            transactions may be allowed offline and reconciled later.
          </p>
          <ul>
            <li>Cached balance or trust limit</li>
            <li>Deferred debit processing</li>
            <li>Negative balance handling</li>
            <li>Blacklist enforcement</li>
          </ul>
        </div>

        {/* PRICING */}
        <div className={styles.block}>
          <h2>Toll Pricing & Vehicle Classification</h2>
          <ul>
            <li>Vehicle type based pricing</li>
            <li>Axle-based classification</li>
            <li>Distance or plaza-based toll</li>
            <li>Peak & off-peak pricing</li>
          </ul>
        </div>

        {/* SECURITY */}
        <div className={styles.block}>
          <h2>Security & Fraud Controls</h2>
          <ul>
            <li>Tag cloning prevention</li>
            <li>Vehicle number plate validation</li>
            <li>Velocity & misuse detection</li>
            <li>Stolen vehicle blacklisting</li>
          </ul>
        </div>

        {/* FAILURE */}
        <div className={styles.block}>
          <h2>Common Failure Scenarios</h2>
          <ul>
            <li>Insufficient balance</li>
            <li>Unreadable or damaged tag</li>
            <li>Vehicle mismatch</li>
            <li>Blacklisted account</li>
          </ul>
        </div>

        {/* SETTLEMENT */}
        <div className={styles.block}>
          <h2>Clearing & Settlement</h2>
          <p>
            Toll transactions are settled in batches between issuers and toll
            operators. Settlement cycles may be daily or weekly depending on
            agreements.
          </p>
        </div>

        {/* ADVANTAGES */}
        <div className={styles.block}>
          <h2>Advantages</h2>
          <ul>
            <li>Zero stopping at toll plazas</li>
            <li>Reduced traffic congestion</li>
            <li>Lower fuel consumption</li>
            <li>Accurate toll collection</li>
          </ul>
        </div>

        {/* LIMITATIONS */}
        <div className={styles.block}>
          <h2>Limitations & Risks</h2>
          <ul>
            <li>Tag dependency</li>
            <li>Offline fraud exposure</li>
            <li>Infrastructure maintenance cost</li>
          </ul>
        </div>

        {/* SUMMARY */}
        <div className={styles.block}>
          <h2>Summary</h2>
          <p>
            Toll Cards enable seamless, high-speed toll collection systems.
            By leveraging RFID, offline authorization, and deferred settlement,
            they form the backbone of modern intelligent transportation
            infrastructure.
          </p>
        </div>

      </section>
    </main>
  );
}
