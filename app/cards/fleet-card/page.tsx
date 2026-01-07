import styles from "./fleetCard.module.css";

export default function FleetCardPage() {
  return (
    <main className={styles.wrapper}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.card}>
          <div className={styles.topRow}>
            <span className={styles.bank}>CARDVERSE ISSUER</span>
            <span className={styles.issuer}>FLEET / LOGISTICS</span>
          </div>

          <div className={styles.number}>
            6632&nbsp;74XX&nbsp;XXXX&nbsp;9085
          </div>

          <div className={styles.footer}>
            <div>
              <span>Vehicle / Driver</span>
              <strong>ROHAN SAKHARE</strong>
            </div>
            <div className={styles.type}>FLEET</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        {/* INTRO */}
        <div className={styles.block}>
          <h2>What is a Fleet Card?</h2>
          <p>
            A Fleet Card is a specialized corporate payment card issued to
            companies that operate multiple vehicles. It is designed to manage,
            control, and monitor expenses related to fuel, maintenance, tolls,
            parking, repairs, and other vehicle-related costs.
          </p>
          <p>
            Fleet cards provide granular control at the vehicle or driver level,
            enabling organizations to optimize operational efficiency and
            eliminate expense misuse.
          </p>
        </div>

        {/* POSITIONING */}
        <div className={styles.block}>
          <h2>Fleet Card Positioning</h2>
          <ul>
            <li><strong>Card Type:</strong> Corporate & Business Card</li>
            <li><strong>Primary Use:</strong> Fleet & logistics expenses</li>
            <li><strong>Funding Model:</strong> Company-funded / credit-based</li>
            <li><strong>Risk Model:</strong> Rule-driven & monitored</li>
            <li><strong>Key Feature:</strong> Vehicle-level spend control</li>
          </ul>
        </div>

        {/* ECOSYSTEM */}
        <div className={styles.block}>
          <h2>Entities in Fleet Card Ecosystem</h2>
          <ul>
            <li><strong>Fleet Owner (Company):</strong> Policy owner</li>
            <li><strong>Driver:</strong> Authorized user</li>
            <li><strong>Vehicle:</strong> Expense mapping entity</li>
            <li><strong>Issuer / Program Manager:</strong> Rule engine</li>
            <li><strong>Merchant Network:</strong> Fuel, service & toll vendors</li>
            <li><strong>Analytics Platform:</strong> Spend insights & reporting</li>
          </ul>
        </div>

        {/* TYPES */}
        <div className={styles.block}>
          <h2>Types of Fleet Cards</h2>
          <ul>
            <li>Vehicle-Based Fleet Card</li>
            <li>Driver-Based Fleet Card</li>
            <li>Hybrid Fleet Card (Driver + Vehicle)</li>
            <li>Open-Loop Fleet Card</li>
            <li>Closed-Loop Fleet Card</li>
          </ul>
        </div>

        {/* ISSUANCE */}
        <div className={styles.block}>
          <h2>Fleet Card Issuance Flow</h2>
          <ol>
            <li>Fleet/company onboarding</li>
            <li>Vehicle & driver registration</li>
            <li>Spend rules & categories defined</li>
            <li>Card issued to vehicle or driver</li>
            <li>Security credentials (PIN/ID) set</li>
          </ol>
        </div>

        {/* MAIN FLOW */}
        <div className={styles.block}>
          <h2>Fleet Transaction Flow (Fuel / Service)</h2>

          <div className={styles.flow}>
            <span>Driver</span>
            <span>Merchant</span>
            <span>Fleet Processor</span>
            <span>Rule Engine</span>
            <span>Issuer</span>
          </div>

          <ol>
            <li>Driver initiates transaction</li>
            <li>Vehicle & driver authentication</li>
            <li>Spend category & limits validated</li>
            <li>Authorization approved or declined</li>
            <li>Expense logged to fleet system</li>
          </ol>
        </div>

        {/* CONTROLS */}
        <div className={styles.block}>
          <h2>Advanced Controls & Rules</h2>
          <ul>
            <li>Fuel-only or service-only usage</li>
            <li>Vehicle-type based restrictions</li>
            <li>Odometer & usage validation</li>
            <li>Time & geo-based controls</li>
            <li>Daily, weekly & monthly limits</li>
          </ul>
        </div>

        {/* TELEMATICS */}
        <div className={styles.block}>
          <h2>Telematics & Data Integration</h2>
          <ul>
            <li>Vehicle tracking integration</li>
            <li>Fuel efficiency analytics</li>
            <li>Route & idle time correlation</li>
            <li>Preventive maintenance alerts</li>
          </ul>
        </div>

        {/* FRAUD */}
        <div className={styles.block}>
          <h2>Fraud & Misuse Prevention</h2>
          <ul>
            <li>Duplicate fueling detection</li>
            <li>Driver misuse alerts</li>
            <li>Unauthorized merchant blocking</li>
            <li>Behavioral analytics</li>
          </ul>
        </div>

        {/* FAILURE */}
        <div className={styles.block}>
          <h2>Common Decline Scenarios</h2>
          <ul>
            <li>Limit exceeded</li>
            <li>Invalid spend category</li>
            <li>Driver/vehicle mismatch</li>
            <li>Inactive or blocked card</li>
          </ul>
        </div>

        {/* SETTLEMENT */}
        <div className={styles.block}>
          <h2>Clearing & Settlement</h2>
          <p>
            Fleet transactions are settled in consolidated cycles. Detailed
            transaction-level reports support fleet accounting, audits, and
            vendor reconciliation.
          </p>
        </div>

        {/* ADVANTAGES */}
        <div className={styles.block}>
          <h2>Advantages</h2>
          <ul>
            <li>Complete fleet expense visibility</li>
            <li>Reduced fuel & service fraud</li>
            <li>Operational efficiency gains</li>
            <li>Data-driven decision making</li>
          </ul>
        </div>

        {/* LIMITATIONS */}
        <div className={styles.block}>
          <h2>Limitations & Risks</h2>
          <ul>
            <li>Complex configuration</li>
            <li>Hardware & integration dependency</li>
            <li>Driver training requirements</li>
          </ul>
        </div>

        {/* SUMMARY */}
        <div className={styles.block}>
          <h2>Summary</h2>
          <p>
            Fleet Cards are essential for modern logistics and transportation
            businesses. By combining strict controls, analytics, and real-time
            monitoring, they enable organizations to manage fleet expenses with
            precision, transparency, and efficiency.
          </p>
        </div>

      </section>
    </main>
  );
}
