import styles from "./virtualCard.module.css";

export default function VirtualCardPage() {
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
            5234&nbsp;91XX&nbsp;XXXX&nbsp;7742
          </div>

          <div className={styles.footer}>
            <div>
              <span>Cardholder</span>
              <strong>ROHAN SAKHARE</strong>
            </div>
            <div className={styles.type}>VIRTUAL CARD</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        {/* INTRO */}
        <div className={styles.block}>
          <h2>What is a Virtual Card?</h2>
          <p>
            A Virtual Card is a digital-only payment card that exists entirely in
            electronic form. It has a card number (PAN), expiry date, and CVV,
            just like a physical card, but it is never printed or issued in
            plastic form.
          </p>
          <p>
            Virtual cards are primarily used for online, in-app, and subscription
            payments, offering enhanced security, control, and flexibility
            compared to traditional physical cards.
          </p>
        </div>

        {/* POSITIONING */}
        <div className={styles.block}>
          <h2>Virtual Card Positioning</h2>
          <ul>
            <li><strong>Card Type:</strong> Usage-Based Digital Card</li>
            <li><strong>Form Factor:</strong> Fully Digital (No Plastic)</li>
            <li><strong>Funding Source:</strong> Debit / Credit / Prepaid Account</li>
            <li><strong>Primary Use:</strong> Online & In-App Transactions</li>
            <li><strong>Risk Model:</strong> Very Low (Controlled + Tokenized)</li>
          </ul>
        </div>

        {/* ECOSYSTEM */}
        <div className={styles.block}>
          <h2>Entities Involved in Virtual Card Ecosystem</h2>
          <ul>
            <li><strong>Cardholder:</strong> End user (consumer or business)</li>
            <li><strong>Issuing Bank:</strong> Card issuer</li>
            <li><strong>Program Manager:</strong> Virtual card lifecycle control</li>
            <li><strong>Card Network:</strong> Visa / Mastercard / RuPay</li>
            <li><strong>Token Service Provider:</strong> PAN tokenization engine</li>
            <li><strong>Merchant:</strong> Online platform / app</li>
            <li><strong>Risk Engine:</strong> Fraud & anomaly detection</li>
          </ul>
        </div>

        {/* TYPES */}
        <div className={styles.block}>
          <h2>Types of Virtual Cards</h2>
          <ul>
            <li>Single-Use Virtual Card</li>
            <li>Multi-Use Virtual Card</li>
            <li>Subscription-Locked Virtual Card</li>
            <li>Merchant-Locked Virtual Card</li>
            <li>Corporate Virtual Card</li>
            <li>On-Demand Disposable Virtual Card</li>
          </ul>
        </div>

        {/* ISSUANCE */}
        <div className={styles.block}>
          <h2>Virtual Card Issuance & Lifecycle</h2>
          <ol>
            <li>User requests virtual card via app or API</li>
            <li>Issuer generates PAN, expiry, CVV digitally</li>
            <li>Card mapped to funding source</li>
            <li>Tokenization applied for secure usage</li>
            <li>Usage rules configured (limit, merchant, expiry)</li>
            <li>Card activated instantly</li>
            <li>Card auto-expires or can be deleted anytime</li>
          </ol>
        </div>

        {/* ONLINE FLOW */}
        <div className={styles.block}>
          <h2>Online Transaction Flow (MOST IMPORTANT)</h2>

          <div className={styles.flow}>
            <span>User</span>
            <span>Website/App</span>
            <span>Acquirer</span>
            <span>Network</span>
            <span>Token Service</span>
            <span>Issuer</span>
          </div>

          <ol>
            <li>User enters virtual card details online</li>
            <li>Merchant sends transaction to acquirer</li>
            <li>Network routes transaction</li>
            <li>Token mapped to real PAN</li>
            <li>Issuer validates rules & balance</li>
            <li>Transaction approved or declined</li>
          </ol>
        </div>

        {/* TOKENIZATION */}
        <div className={styles.block}>
          <h2>Tokenization & Security Architecture</h2>
          <ul>
            <li>Real PAN never shared with merchant</li>
            <li>Unique token generated per merchant/device</li>
            <li>Token useless outside allowed context</li>
            <li>Reduces card-not-present fraud drastically</li>
          </ul>
        </div>

        {/* CONTROL */}
        <div className={styles.block}>
          <h2>Advanced Controls & Restrictions</h2>
          <ul>
            <li>Spend limit per transaction</li>
            <li>Daily / monthly caps</li>
            <li>Merchant or MCC restriction</li>
            <li>Country & channel restrictions</li>
            <li>Auto-disable after first use</li>
          </ul>
        </div>

        {/* CORPORATE */}
        <div className={styles.block}>
          <h2>Corporate & Enterprise Usage</h2>
          <ul>
            <li>Employee expense management</li>
            <li>Vendor-specific cards</li>
            <li>Subscription management</li>
            <li>API-driven card creation</li>
            <li>Real-time expense tracking</li>
          </ul>
        </div>

        {/* FAILURE */}
        <div className={styles.block}>
          <h2>Common Failure Scenarios</h2>
          <ul>
            <li>Exceeded spend limit</li>
            <li>Merchant not allowed</li>
            <li>Expired or deleted card</li>
            <li>Token mismatch</li>
            <li>Insufficient funds</li>
          </ul>
        </div>

        {/* SETTLEMENT */}
        <div className={styles.block}>
          <h2>Clearing & Settlement</h2>
          <p>
            Virtual card transactions follow the same clearing and settlement
            cycles as physical cards. Authorization is real-time, while settlement
            happens later via the card network.
          </p>
        </div>

        {/* ADVANTAGES */}
        <div className={styles.block}>
          <h2>Advantages</h2>
          <ul>
            <li>Maximum security</li>
            <li>No physical card risk</li>
            <li>Instant issuance</li>
            <li>Fine-grained spending control</li>
            <li>Ideal for online payments</li>
          </ul>
        </div>

        {/* LIMITATIONS */}
        <div className={styles.block}>
          <h2>Limitations</h2>
          <ul>
            <li>Not usable at physical POS (unless tokenized)</li>
            <li>Dependent on digital infrastructure</li>
            <li>Merchant compatibility required</li>
          </ul>
        </div>

        {/* SUMMARY */}
        <div className={styles.block}>
          <h2>Summary</h2>
          <p>
            Virtual Cards represent the future of secure digital payments. By
            combining tokenization, real-time controls, and instant issuance,
            they significantly reduce fraud while increasing flexibility for
            both consumers and enterprises.
          </p>
        </div>

      </section>
    </main>
  );
}
