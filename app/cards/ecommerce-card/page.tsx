import styles from "./ecommerceCard.module.css";

export default function EcommerceCardPage() {
  return (
    <main className={styles.wrapper}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.card}>
          <div className={styles.topRow}>
            <span className={styles.bank}>CARDVERSE ISSUER</span>
            <span className={styles.issuer}>VISA / Mastercard</span>
          </div>

          <div className={styles.number}>
            4987&nbsp;63XX&nbsp;XXXX&nbsp;4419
          </div>

          <div className={styles.footer}>
            <div>
              <span>Cardholder</span>
              <strong>ROHAN SAKHARE</strong>
            </div>
            <div className={styles.type}>E-COMMERCE</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        {/* INTRO */}
        <div className={styles.block}>
          <h2>What is an E-Commerce Card?</h2>
          <p>
            An E-Commerce Card is a payment card optimized specifically for
            online and digital transactions where the physical card is not
            presented at the time of payment. These transactions are known as
            <b> Card-Not-Present (CNP)</b> transactions.
          </p>
          <p>
            E-commerce cards may be physical or virtual, but they are enabled
            primarily for online usage such as shopping websites, mobile apps,
            subscriptions, digital services, and international online payments.
          </p>
        </div>

        {/* POSITIONING */}
        <div className={styles.block}>
          <h2>E-Commerce Card Positioning</h2>
          <ul>
            <li><strong>Card Type:</strong> Usage-Based Card</li>
            <li><strong>Transaction Mode:</strong> Card-Not-Present (CNP)</li>
            <li><strong>Primary Channel:</strong> Web, Mobile Apps, APIs</li>
            <li><strong>Risk Model:</strong> High (No physical verification)</li>
            <li><strong>Security Dependency:</strong> OTP, 3DS, Tokenization</li>
          </ul>
        </div>

        {/* ECOSYSTEM */}
        <div className={styles.block}>
          <h2>Entities Involved in E-Commerce Payments</h2>
          <ul>
            <li><strong>Cardholder:</strong> Customer making online purchase</li>
            <li><strong>Merchant Website/App:</strong> Online storefront</li>
            <li><strong>Payment Gateway:</strong> Checkout & encryption layer</li>
            <li><strong>Acquirer Bank:</strong> Merchant’s acquiring bank</li>
            <li><strong>Card Network:</strong> Visa / Mastercard / RuPay</li>
            <li><strong>Issuer Bank:</strong> Customer’s issuing bank</li>
            <li><strong>Fraud & Risk Engine:</strong> Real-time decision system</li>
          </ul>
        </div>

        {/* TYPES */}
        <div className={styles.block}>
          <h2>Types of E-Commerce Cards</h2>
          <ul>
            <li>Virtual-Only E-Commerce Card</li>
            <li>Online-Enabled Debit Card</li>
            <li>Online-Enabled Credit Card</li>
            <li>Subscription-Locked Card</li>
            <li>International E-Commerce Card</li>
          </ul>
        </div>

        {/* ISSUANCE */}
        <div className={styles.block}>
          <h2>Enablement & Issuance Flow</h2>
          <ol>
            <li>Card issued (physical or virtual)</li>
            <li>E-commerce channel enabled by issuer</li>
            <li>Transaction limits configured</li>
            <li>OTP / 3DS activated</li>
            <li>Card ready for online use</li>
          </ol>
        </div>

        {/* MAIN FLOW */}
        <div className={styles.block}>
          <h2>E-Commerce Transaction Flow (END-TO-END)</h2>

          <div className={styles.flow}>
            <span>User</span>
            <span>Website/App</span>
            <span>Gateway</span>
            <span>Acquirer</span>
            <span>Network</span>
            <span>Issuer</span>
            <span>Risk Engine</span>
          </div>

          <ol>
            <li>User enters card details (PAN, expiry, CVV)</li>
            <li>Payment gateway encrypts data</li>
            <li>Transaction sent to acquirer bank</li>
            <li>Routed via card network</li>
            <li>Issuer validates card, balance & limits</li>
            <li>OTP / 3DS authentication triggered</li>
            <li>Risk engine evaluates fraud signals</li>
            <li>Approval or decline returned to merchant</li>
          </ol>
        </div>

        {/* 3DS */}
        <div className={styles.block}>
          <h2>3-D Secure (3DS) Authentication</h2>
          <ul>
            <li>Additional authentication for CNP transactions</li>
            <li>OTP / app-based approval</li>
            <li>Shifts fraud liability to issuer</li>
            <li>Mandatory in many regions</li>
          </ul>
        </div>

        {/* TOKENIZATION */}
        <div className={styles.block}>
          <h2>Tokenization in E-Commerce</h2>
          <ul>
            <li>Actual card number replaced with token</li>
            <li>Merchant never stores real PAN</li>
            <li>Token bound to merchant or device</li>
            <li>Reduces data breach impact</li>
          </ul>
        </div>

        {/* FAILURE */}
        <div className={styles.block}>
          <h2>Common Decline & Failure Scenarios</h2>
          <ul>
            <li>Incorrect CVV or expiry</li>
            <li>OTP failure or timeout</li>
            <li>Insufficient funds / credit</li>
            <li>International usage disabled</li>
            <li>High-risk merchant or country</li>
          </ul>
        </div>

        {/* REFUNDS */}
        <div className={styles.block}>
          <h2>Refunds, Reversals & Chargebacks</h2>
          <p>
            In e-commerce, refunds are initiated by merchants and routed back
            through the same acquiring and network channels. Chargebacks may
            occur if customers dispute unauthorized or failed transactions.
          </p>
          <ul>
            <li>Refunds take T+3 to T+7 days</li>
            <li>Chargebacks involve dispute evidence</li>
            <li>Issuer temporarily credits customer</li>
          </ul>
        </div>

        {/* SETTLEMENT */}
        <div className={styles.block}>
          <h2>Clearing & Settlement</h2>
          <p>
            Although authorization happens instantly, actual fund movement
            occurs during clearing and settlement cycles between acquirer and
            issuer via card networks.
          </p>
          <ul>
            <li>T+1 / T+2 settlement</li>
            <li>Merchant paid post settlement</li>
            <li>Fees deducted during settlement</li>
          </ul>
        </div>

        {/* ADVANTAGES */}
        <div className={styles.block}>
          <h2>Advantages</h2>
          <ul>
            <li>Convenient global shopping</li>
            <li>Instant digital payments</li>
            <li>Supports subscriptions & digital services</li>
          </ul>
        </div>

        {/* LIMITATIONS */}
        <div className={styles.block}>
          <h2>Limitations & Risks</h2>
          <ul>
            <li>Higher fraud exposure</li>
            <li>Dependency on internet & OTP</li>
            <li>Chargeback complexity</li>
          </ul>
        </div>

        {/* SUMMARY */}
        <div className={styles.block}>
          <h2>Summary</h2>
          <p>
            E-Commerce Cards power the backbone of global digital commerce.
            While they introduce higher fraud risk due to non-physical usage,
            modern security layers like 3DS, tokenization, and real-time risk
            engines make them safe, scalable, and essential.
          </p>
        </div>

      </section>
    </main>
  );
}
