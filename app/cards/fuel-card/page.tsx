import styles from "./fuelCard.module.css";

export default function FuelCardPage() {
  return (
    <main className={styles.wrapper}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.card}>
          <div className={styles.topRow}>
            <span className={styles.bank}>CARDVERSE ISSUER</span>
            <span className={styles.issuer}>MCC / FLEET</span>
          </div>

          <div className={styles.number}>
            7012&nbsp;88XX&nbsp;XXXX&nbsp;4590
          </div>

          <div className={styles.footer}>
            <div>
              <span>Vehicle / Driver</span>
              <strong>ROHAN SAKHARE</strong>
            </div>
            <div className={styles.type}>FUEL</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        {/* INTRO */}
        <div className={styles.block}>
          <h2>What is a Fuel Card?</h2>
          <p>
            A Fuel Card is a usage-based payment instrument designed exclusively
            for purchasing fuel and related vehicle services at authorized fuel
            stations. It is widely used by logistics companies, fleet operators,
            transport businesses, and corporate vehicle programs.
          </p>
          <p>
            Fuel cards restrict spending to fuel merchants and often include
            advanced controls such as vehicle mapping, driver identification,
            quantity limits, and time-based rules.
          </p>
        </div>

        {/* POSITIONING */}
        <div className={styles.block}>
          <h2>Fuel Card Positioning</h2>
          <ul>
            <li><strong>Card Type:</strong> Usage-Based Card</li>
            <li><strong>Primary Use:</strong> Fuel & vehicle services</li>
            <li><strong>Technology:</strong> Card / RFID / PIN / Odometer input</li>
            <li><strong>Authorization Mode:</strong> Online + Semi-offline</li>
            <li><strong>Risk Model:</strong> Controlled (Rule-based)</li>
          </ul>
        </div>

        {/* ECOSYSTEM */}
        <div className={styles.block}>
          <h2>Entities in Fuel Card Ecosystem</h2>
          <ul>
            <li><strong>Fleet Owner / Company:</strong> Funds & policies</li>
            <li><strong>Driver / Vehicle:</strong> End user</li>
            <li><strong>Fuel Station:</strong> Merchant acceptance</li>
            <li><strong>Acquirer / Fuel Processor:</strong> Transaction routing</li>
            <li><strong>Issuer / Program Manager:</strong> Card & rule engine</li>
            <li><strong>Clearing House:</strong> Reconciliation & settlement</li>
          </ul>
        </div>

        {/* TYPES */}
        <div className={styles.block}>
          <h2>Types of Fuel Cards</h2>
          <ul>
            <li>Closed-Loop Fuel Card (Brand-specific)</li>
            <li>Open-Loop Fuel Card (Visa / Mastercard)</li>
            <li>Fleet Fuel Card</li>
            <li>Driver-Based Fuel Card</li>
            <li>Vehicle-Specific Fuel Card</li>
          </ul>
        </div>

        {/* ISSUANCE */}
        <div className={styles.block}>
          <h2>Fuel Card Issuance Flow</h2>
          <ol>
            <li>Fleet/company onboarding & KYC</li>
            <li>Vehicle and driver mapping</li>
            <li>Fuel rules & limits configured</li>
            <li>Card issued to vehicle or driver</li>
            <li>PIN & security setup completed</li>
          </ol>
        </div>

        {/* MAIN FLOW */}
        <div className={styles.block}>
          <h2>Fuel Purchase Transaction Flow</h2>

          <div className={styles.flow}>
            <span>Driver</span>
            <span>Fuel POS</span>
            <span>Fuel Processor</span>
            <span>Rule Engine</span>
            <span>Issuer Wallet</span>
          </div>

          <ol>
            <li>Driver presents fuel card at station</li>
            <li>PIN / vehicle ID validated</li>
            <li>Fuel quantity & type entered</li>
            <li>Rules checked (MCC, fuel type, limits)</li>
            <li>Authorization approved or declined</li>
            <li>Fuel dispensed & amount debited</li>
          </ol>
        </div>

        {/* MCC */}
        <div className={styles.block}>
          <h2>Merchant Category Code (MCC) Control</h2>
          <ul>
            <li>Only fuel station MCCs allowed</li>
            <li>Non-fuel merchants automatically blocked</li>
            <li>Prevents card misuse</li>
          </ul>
        </div>

        {/* RULES */}
        <div className={styles.block}>
          <h2>Advanced Fuel Rules & Controls</h2>
          <ul>
            <li>Daily / weekly fuel limits</li>
            <li>Fuel type restriction (petrol/diesel/CNG)</li>
            <li>Odometer-based validation</li>
            <li>Time-of-day usage control</li>
            <li>Geo-fencing for stations</li>
          </ul>
        </div>

        {/* OFFLINE */}
        <div className={styles.block}>
          <h2>Offline & Semi-Offline Transactions</h2>
          <p>
            In remote locations, fuel transactions may be authorized with cached
            limits and reconciled later to ensure uninterrupted operations.
          </p>
          <ul>
            <li>Cached balance or trust limit</li>
            <li>Deferred posting</li>
            <li>Post-transaction risk review</li>
          </ul>
        </div>

        {/* FRAUD */}
        <div className={styles.block}>
          <h2>Fraud & Misuse Prevention</h2>
          <ul>
            <li>Driver-PIN mismatch detection</li>
            <li>Abnormal fuel quantity alerts</li>
            <li>Duplicate fueling detection</li>
            <li>Vehicle misuse analytics</li>
          </ul>
        </div>

        {/* FAILURE */}
        <div className={styles.block}>
          <h2>Common Failure Scenarios</h2>
          <ul>
            <li>Limit exceeded</li>
            <li>Invalid fuel type</li>
            <li>Unauthorized station</li>
            <li>PIN failure</li>
          </ul>
        </div>

        {/* SETTLEMENT */}
        <div className={styles.block}>
          <h2>Clearing & Settlement</h2>
          <p>
            Fuel transactions are settled in batches between fuel stations,
            processors, and issuers. Detailed transaction reports are provided
            for fleet reconciliation.
          </p>
        </div>

        {/* ADVANTAGES */}
        <div className={styles.block}>
          <h2>Advantages</h2>
          <ul>
            <li>Eliminates fuel expense fraud</li>
            <li>Centralized fleet control</li>
            <li>Detailed fuel analytics</li>
            <li>Cashless fuel purchases</li>
          </ul>
        </div>

        {/* LIMITATIONS */}
        <div className={styles.block}>
          <h2>Limitations & Risks</h2>
          <ul>
            <li>Limited merchant acceptance</li>
            <li>Dependency on correct data entry</li>
            <li>Operational complexity</li>
          </ul>
        </div>

        {/* SUMMARY */}
        <div className={styles.block}>
          <h2>Summary</h2>
          <p>
            Fuel Cards are critical tools for fleet and logistics operations.
            By combining MCC restriction, rule-based authorization, and detailed
            reporting, they ensure fuel expense control, transparency, and
            operational efficiency.
          </p>
        </div>

      </section>
    </main>
  );
}
