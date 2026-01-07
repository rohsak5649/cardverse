import styles from "./travelPrepaid.module.css";

export default function TravelPrepaidCardPage() {
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
            4098&nbsp;76XX&nbsp;XXXX&nbsp;5521
          </div>

          <div className={styles.footer}>
            <div>
              <span>Cardholder</span>
              <strong>ROHAN SAKHARE</strong>
            </div>
            <div className={styles.type}>TRAVEL PREPAID</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        <div className={styles.block}>
          <h2>What is a Travel Prepaid Card?</h2>
          <p>
            A Travel Prepaid Card is a prepaid payment instrument designed
            specifically for international travel. Users load money into the
            card in advance and spend only the loaded amount while traveling
            abroad.
          </p>
          <p>
            Unlike debit or credit cards, a travel prepaid card is not linked
            to a bank account or credit line, making it safer and easier to
            control expenses during foreign travel.
          </p>
        </div>

        <div className={styles.block}>
          <h2>Travel Prepaid Card Positioning</h2>
          <ul>
            <li><strong>Card Type:</strong> Open-Loop Prepaid Card</li>
            <li><strong>Funding Source:</strong> Preloaded Customer Funds</li>
            <li><strong>Usage Geography:</strong> International</li>
            <li><strong>Risk Model:</strong> Low (No credit, limited balance)</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Entities Involved in Travel Prepaid Ecosystem</h2>
          <ul>
            <li><strong>Cardholder:</strong> International traveler</li>
            <li><strong>Issuing Bank:</strong> Authorized prepaid issuer</li>
            <li><strong>Program Manager:</strong> Prepaid card management</li>
            <li><strong>Card Network:</strong> Visa / Mastercard</li>
            <li><strong>Foreign Merchant / ATM:</strong> Acceptance point</li>
            <li><strong>FX Engine:</strong> Currency conversion system</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Types of Travel Prepaid Cards</h2>
          <ul>
            <li>Single-Currency Travel Card</li>
            <li>Multi-Currency Travel Card</li>
            <li>Virtual Travel Card</li>
            <li>Student Travel Card</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Travel Prepaid Card Issuance Flow</h2>
          <ol>
            <li>Customer applies for travel prepaid card</li>
            <li>KYC and passport verification</li>
            <li>Currency selection (USD, EUR, GBP, etc.)</li>
            <li>Funds loaded into prepaid wallet</li>
            <li>Card issued and activated</li>
          </ol>
        </div>

        <div className={styles.block}>
          <h2>POS Transaction Flow (International)</h2>

          <div className={styles.flow}>
            <span>Cardholder</span>
            <span>Foreign POS</span>
            <span>Acquirer</span>
            <span>Network</span>
            <span>Issuer</span>
            <span>Prepaid Wallet</span>
          </div>

          <ol>
            <li>Card presented at international merchant</li>
            <li>Transaction routed via global card network</li>
            <li>Issuer checks prepaid balance</li>
            <li>FX conversion applied if needed</li>
            <li>Amount debited from prepaid wallet</li>
            <li>Approval returned to merchant</li>
          </ol>
        </div>

        <div className={styles.block}>
          <h2>ATM Cash Withdrawal Abroad</h2>
          <ol>
            <li>Card inserted at foreign ATM</li>
            <li>PIN authentication</li>
            <li>ATM request routed internationally</li>
            <li>Issuer validates balance</li>
            <li>Cash dispensed in local currency</li>
            <li>Balance updated after FX conversion</li>
          </ol>
        </div>

        <div className={styles.block}>
          <h2>Foreign Exchange (FX) Handling</h2>
          <ul>
            <li>Preloaded foreign currency wallets</li>
            <li>Locked-in exchange rates</li>
            <li>Reduced FX markup compared to debit cards</li>
            <li>Network-based FX for unsupported currencies</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Security & Controls</h2>
          <ul>
            <li>PIN-based authentication</li>
            <li>Geographic usage control</li>
            <li>Daily spend & ATM limits</li>
            <li>Card freeze/unfreeze</li>
            <li>Lost card protection</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Clearing & Settlement</h2>
          <p>
            Transactions are cleared and settled via international card
            networks. The prepaid wallet balance is adjusted immediately,
            while interbank settlement occurs later.
          </p>
        </div>

        <div className={styles.block}>
          <h2>Advantages</h2>
          <ul>
            <li>Controlled spending</li>
            <li>Lower FX charges</li>
            <li>Safer than carrying cash</li>
            <li>No impact on bank account</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Limitations</h2>
          <ul>
            <li>Preload required</li>
            <li>Limited domestic usage</li>
            <li>Reload may require issuer approval</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Summary</h2>
          <p>
            Travel Prepaid Cards are ideal companions for international travel,
            offering secure, controlled, and cost-effective access to foreign
            currency without exposing bank accounts or credit lines.
          </p>
        </div>

      </section>
    </main>
  );
}
