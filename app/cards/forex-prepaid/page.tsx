import styles from "./forexPrepaid.module.css";

export default function ForexPrepaidCardPage() {
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
            5124&nbsp;88XX&nbsp;XXXX&nbsp;9031
          </div>

          <div className={styles.footer}>
            <div>
              <span>Cardholder</span>
              <strong>ROHAN SAKHARE</strong>
            </div>
            <div className={styles.type}>FOREX PREPAID</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        <div className={styles.block}>
          <h2>What is a Forex Prepaid Card?</h2>
          <p>
            A Forex Prepaid Card is a prepaid payment instrument specifically
            designed for handling foreign currency transactions. Users preload
            one or more foreign currencies into the card and use it for spending
            abroad or for international online transactions.
          </p>
          <p>
            Unlike debit or credit cards, a forex prepaid card isolates foreign
            currency spending from domestic bank accounts, protecting users from
            fluctuating exchange rates and fraud exposure.
          </p>
        </div>

        <div className={styles.block}>
          <h2>Forex Prepaid Card Positioning</h2>
          <ul>
            <li><strong>Card Type:</strong> Open-Loop Prepaid Card</li>
            <li><strong>Funding Source:</strong> Preloaded Foreign Currency</li>
            <li><strong>Primary Use:</strong> International Spending & FX Control</li>
            <li><strong>Risk Model:</strong> Very Low (Prepaid, No Credit)</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Entities Involved in Forex Prepaid Ecosystem</h2>
          <ul>
            <li><strong>Cardholder:</strong> International traveler / global user</li>
            <li><strong>Issuing Bank:</strong> Authorized forex prepaid issuer</li>
            <li><strong>Program Manager:</strong> Manages prepaid wallet & limits</li>
            <li><strong>Card Network:</strong> Visa / Mastercard</li>
            <li><strong>FX Engine:</strong> Currency conversion & rate locking</li>
            <li><strong>Foreign Merchant / ATM:</strong> Acceptance points</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Types of Forex Prepaid Cards</h2>
          <ul>
            <li>Single Currency Forex Card</li>
            <li>Multi-Currency Forex Card</li>
            <li>Student Forex Card</li>
            <li>Corporate Forex Card</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Forex Prepaid Card Issuance Flow</h2>
          <ol>
            <li>Customer applies for forex prepaid card</li>
            <li>KYC & passport verification</li>
            <li>Selection of foreign currencies</li>
            <li>Funds loaded at locked exchange rates</li>
            <li>Card issued and activated</li>
          </ol>
        </div>

        <div className={styles.block}>
          <h2>International POS Transaction Flow</h2>

          <div className={styles.flow}>
            <span>Cardholder</span>
            <span>Foreign POS</span>
            <span>Acquirer</span>
            <span>Network</span>
            <span>Issuer</span>
            <span>Forex Wallet</span>
          </div>

          <ol>
            <li>Card used at international merchant</li>
            <li>Transaction routed through card network</li>
            <li>Issuer identifies transaction currency</li>
            <li>Matching currency wallet debited</li>
            <li>FX conversion applied if wallet not available</li>
            <li>Approval sent back to merchant</li>
          </ol>
        </div>

        <div className={styles.block}>
          <h2>ATM Cash Withdrawal Flow (Foreign)</h2>
          <ol>
            <li>Card inserted into international ATM</li>
            <li>PIN authentication</li>
            <li>Issuer validates forex wallet balance</li>
            <li>FX conversion applied if required</li>
            <li>Cash dispensed in local currency</li>
            <li>Wallet balance updated instantly</li>
          </ol>
        </div>

        <div className={styles.block}>
          <h2>Foreign Exchange (FX) Handling</h2>
          <ul>
            <li>Locked-in exchange rates at load time</li>
            <li>Multiple currency wallets supported</li>
            <li>Minimal FX markup</li>
            <li>No dynamic conversion surprises</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Security & Controls</h2>
          <ul>
            <li>PIN-based authentication</li>
            <li>Country-level usage restrictions</li>
            <li>Daily spend & ATM withdrawal limits</li>
            <li>Instant card blocking on loss</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Clearing & Settlement</h2>
          <p>
            Forex prepaid transactions are cleared via international card
            networks. While wallet balances update instantly, actual interbank
            settlements occur later as per network settlement cycles.
          </p>
        </div>

        <div className={styles.block}>
          <h2>Advantages</h2>
          <ul>
            <li>Protection from FX rate fluctuation</li>
            <li>Budget control during foreign travel</li>
            <li>Safer than carrying foreign cash</li>
            <li>No exposure of bank account</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Limitations</h2>
          <ul>
            <li>Preload required</li>
            <li>Reload may require documentation</li>
            <li>Unused balance conversion charges</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Summary</h2>
          <p>
            Forex Prepaid Cards are ideal tools for managing international
            spending with predictable costs, strong security, and minimal FX
            risk, making them highly suitable for frequent travelers and
            overseas payments.
          </p>
        </div>

      </section>
    </main>
  );
}
