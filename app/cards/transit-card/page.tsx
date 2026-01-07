import styles from "./transitCard.module.css";

export default function TransitCardPage() {
  return (
    <main className={styles.wrapper}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.card}>
          <div className={styles.topRow}>
            <span className={styles.bank}>CARDVERSE ISSUER</span>
            <span className={styles.issuer}>NFC / EMV</span>
          </div>

          <div className={styles.number}>
            6399&nbsp;21XX&nbsp;XXXX&nbsp;4806
          </div>

          <div className={styles.footer}>
            <div>
              <span>Cardholder</span>
              <strong>ROHAN SAKHARE</strong>
            </div>
            <div className={styles.type}>TRANSIT</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        {/* INTRO */}
        <div className={styles.block}>
          <h2>What is a Transit Card?</h2>
          <p>
            A Transit Card is a payment instrument designed specifically for
            public transportation systems such as metro trains, buses, trams,
            ferries, and suburban rail networks. It allows passengers to enter
            and exit transit systems quickly using tap-and-go technology.
          </p>
          <p>
            Transit cards prioritize speed, reliability, and offline capability
            over real-time authorization, making them fundamentally different
            from retail payment cards.
          </p>
        </div>

        {/* POSITIONING */}
        <div className={styles.block}>
          <h2>Transit Card Positioning</h2>
          <ul>
            <li><strong>Card Type:</strong> Usage-Based Card</li>
            <li><strong>Primary Use:</strong> Public transportation</li>
            <li><strong>Technology:</strong> NFC + EMV Contactless</li>
            <li><strong>Authorization Mode:</strong> Offline / Deferred</li>
            <li><strong>Risk Model:</strong> Controlled Offline Risk</li>
          </ul>
        </div>

        {/* ECOSYSTEM */}
        <div className={styles.block}>
          <h2>Entities in Transit Card Ecosystem</h2>
          <ul>
            <li><strong>Passenger (Cardholder):</strong> Transit user</li>
            <li><strong>Entry/Exit Gates:</strong> Turnstiles / validators</li>
            <li><strong>Transit Operator:</strong> Metro / bus authority</li>
            <li><strong>Acquirer / Transit Processor:</strong> Backend system</li>
            <li><strong>Issuer:</strong> Prepaid or bank issuer</li>
            <li><strong>Clearing System:</strong> Post-journey settlement</li>
          </ul>
        </div>

        {/* TYPES */}
        <div className={styles.block}>
          <h2>Types of Transit Cards</h2>
          <ul>
            <li>Closed-Loop Transit Card</li>
            <li>Open-Loop Transit Card (Bank Card Based)</li>
            <li>Stored-Value Transit Card</li>
            <li>Student / Senior Transit Card</li>
            <li>Tourist Transit Card</li>
          </ul>
        </div>

        {/* ISSUANCE */}
        <div className={styles.block}>
          <h2>Transit Card Issuance Flow</h2>
          <ol>
            <li>User applies or purchases transit card</li>
            <li>Card mapped to transit wallet or account</li>
            <li>Initial balance loaded</li>
            <li>Offline limits configured</li>
            <li>Card activated for gate usage</li>
          </ol>
        </div>

        {/* MAIN FLOW */}
        <div className={styles.block}>
          <h2>Transit Journey Transaction Flow (ENTRY → EXIT)</h2>

          <div className={styles.flow}>
            <span>Card</span>
            <span>Entry Gate</span>
            <span>Transit System</span>
            <span>Fare Engine</span>
            <span>Clearing System</span>
          </div>

          <ol>
            <li>Passenger taps card at entry gate</li>
            <li>Gate performs offline validation</li>
            <li>Temporary fare hold applied</li>
            <li>Passenger exits and taps again</li>
            <li>Actual fare calculated</li>
            <li>Balance adjusted in backend</li>
          </ol>
        </div>

        {/* OFFLINE */}
        <div className={styles.block}>
          <h2>Offline Authorization (CORE CONCEPT)</h2>
          <p>
            Transit systems cannot depend on real-time network connectivity.
            Therefore, most transit cards support offline approvals at gates.
          </p>
          <ul>
            <li>Offline transaction counters</li>
            <li>Maximum negative balance allowed</li>
            <li>Risk synchronized later</li>
            <li>Ensures smooth passenger flow</li>
          </ul>
        </div>

        {/* FARE */}
        <div className={styles.block}>
          <h2>Fare Calculation Logic</h2>
          <ul>
            <li>Distance-based fare</li>
            <li>Zone-based pricing</li>
            <li>Peak / off-peak pricing</li>
            <li>Daily / monthly fare capping</li>
          </ul>
        </div>

        {/* SECURITY */}
        <div className={styles.block}>
          <h2>Security & Anti-Fraud Controls</h2>
          <ul>
            <li>Secure element on card</li>
            <li>Cryptographic tap validation</li>
            <li>Velocity & misuse detection</li>
            <li>Blacklisting stolen cards</li>
          </ul>
        </div>

        {/* FAILURE */}
        <div className={styles.block}>
          <h2>Common Failure Scenarios</h2>
          <ul>
            <li>Insufficient balance</li>
            <li>Offline limit exceeded</li>
            <li>Card blacklisted</li>
            <li>Incomplete journey (missing exit tap)</li>
          </ul>
        </div>

        {/* SETTLEMENT */}
        <div className={styles.block}>
          <h2>Clearing & Settlement</h2>
          <p>
            Transit transactions are settled in batches after journeys are
            completed. Unlike retail payments, authorization and settlement
            may be separated by hours or days.
          </p>
        </div>

        {/* ADVANTAGES */}
        <div className={styles.block}>
          <h2>Advantages</h2>
          <ul>
            <li>Ultra-fast passenger movement</li>
            <li>Reduced cash handling</li>
            <li>Accurate fare enforcement</li>
            <li>Scalable for millions of daily users</li>
          </ul>
        </div>

        {/* LIMITATIONS */}
        <div className={styles.block}>
          <h2>Limitations & Risks</h2>
          <ul>
            <li>Complex backend systems</li>
            <li>Offline fraud exposure</li>
            <li>Dependency on gate hardware</li>
          </ul>
        </div>

        {/* SUMMARY */}
        <div className={styles.block}>
          <h2>Summary</h2>
          <p>
            Transit Cards form the backbone of modern urban mobility systems.
            By leveraging offline EMV, NFC, and deferred settlement, they
            enable high-speed, high-volume transportation networks while
            maintaining financial control and security.
          </p>
        </div>

      </section>
    </main>
  );
}
