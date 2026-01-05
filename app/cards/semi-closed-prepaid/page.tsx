import styles from "./semiClosed.module.css";

export default function SemiClosedPrepaidPage() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.card}>
          <div className={styles.topRow}>
            <span className={styles.bank}>CARDVERSE SYSTEM</span>
            <span className={styles.issuer}>CARDVERSE ISSUER</span>
          </div>

          <div className={styles.number}>
            5555&nbsp;4444&nbsp;3333&nbsp;2222
          </div>

          <div className={styles.footer}>
            <div>
              <span>Card Holder</span>
              <strong>ROHAN SAKHARE</strong>
            </div>
            <div className={styles.type}>SEMI-CLOSED</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        {/* INTRO */}
        <div className={styles.block}>
          <h2>What is a Semi-Closed Prepaid Card?</h2>
          <p>
            A Semi-Closed Prepaid Card is a prepaid payment instrument that can
            be used at a <strong>defined group of merchants</strong> or service
            providers, but <strong>cannot be used for cash withdrawal</strong>.
          </p>
          <p>
            These cards sit between closed-loop and open-loop cards, offering
            wider acceptance than closed-loop cards while still maintaining
            strong control for the issuer.
          </p>
        </div>

        {/* WHY IT EXISTS */}
        <div className={styles.block}>
          <h2>Why Semi-Closed Prepaid Cards Exist</h2>
          <ul>
            <li>Controlled digital payments without cash risk</li>
            <li>Wider merchant acceptance than closed-loop</li>
            <li>Regulatory compliance with prepaid guidelines</li>
            <li>Ideal for wallets, gift programs, and fintech apps</li>
          </ul>
        </div>

        {/* REAL USE CASES */}
        <div className={styles.block}>
          <h2>Real-World Use Cases</h2>
          <ul>
            <li>Wallet-based prepaid cards</li>
            <li>Gift cards usable across partner merchants</li>
            <li>Corporate employee benefit cards</li>
            <li>Food & lifestyle prepaid programs</li>
            <li>Fintech neo-bank prepaid cards (limited)</li>
          </ul>
        </div>

        {/* KEY DIFFERENCE */}
        <div className={styles.block}>
          <h2>Semi-Closed vs Closed-Loop vs Open-Loop</h2>
          <ul>
            <li><strong>Closed-Loop:</strong> Single merchant only</li>
            <li><strong>Semi-Closed:</strong> Multiple partner merchants</li>
            <li><strong>Open-Loop:</strong> Works everywhere (POS, ATM, online)</li>
            <li>No ATM cash withdrawal in semi-closed</li>
          </ul>
        </div>

        {/* PARTICIPANTS */}
        <div className={styles.block}>
          <h2>Entities Involved in Semi-Closed Transactions</h2>
          <ul>
            <li><strong>Cardholder:</strong> End user</li>
            <li><strong>Merchant POS:</strong> Approved partner merchant</li>
            <li><strong>Acquirer:</strong> Merchant acquiring system</li>
            <li><strong>Semi-Closed Switch:</strong> Routes prepaid transactions</li>
            <li><strong>Prepaid Issuer System:</strong> Balance & rules engine</li>
            <li><strong>Prepaid Ledger:</strong> Stores customer balance</li>
          </ul>
        </div>

        {/* BALANCE MODEL */}
        <div className={styles.block}>
          <h2>Prepaid Balance & Control Model</h2>
          <p>
            Semi-closed cards operate on a <strong>stored-value ledger</strong>.
            Funds must be loaded before usage and cannot exceed the available
            balance.
          </p>
          <ul>
            <li>Prefunded balance</li>
            <li>Instant debit on approval</li>
            <li>No negative balance allowed</li>
            <li>Merchant and category restrictions</li>
          </ul>
        </div>

        {/* POS FLOW */}
        <div className={styles.block}>
          <h2>Semi-Closed POS Transaction – Full Flow</h2>

          <div className={styles.flow}>
            <span>Customer</span>
            <span>Merchant POS</span>
            <span>Acquirer</span>
            <span>Semi-Closed Switch</span>
            <span>Prepaid Ledger</span>
          </div>

          <ol>
            <li>Customer taps or swipes prepaid card</li>
            <li>POS sends transaction to acquirer</li>
            <li>Acquirer routes request to semi-closed switch</li>
            <li>Issuer validates merchant eligibility</li>
            <li>Balance and limits are checked</li>
            <li>Amount is deducted from prepaid ledger</li>
            <li>Approval sent back to POS</li>
          </ol>
        </div>

        {/* ONLINE FLOW */}
        <div className={styles.block}>
          <h2>Semi-Closed Online Transaction Flow</h2>
          <ol>
            <li>Customer selects prepaid card in app or website</li>
            <li>Merchant validates eligibility</li>
            <li>Transaction routed to prepaid issuer</li>
            <li>Balance and risk checks applied</li>
            <li>Amount debited instantly</li>
          </ol>
        </div>

        {/* RELOAD */}
        <div className={styles.block}>
          <h2>Reload / Top-Up Flow</h2>
          <ul>
            <li>Customer loads money via UPI, bank transfer, or card</li>
            <li>Funds received by issuer</li>
            <li>Prepaid ledger credited</li>
            <li>Balance updated in real time</li>
          </ul>
        </div>

        {/* SECURITY */}
        <div className={styles.block}>
          <h2>Security & Risk Controls</h2>
          <ul>
            <li>PIN or app-based authentication</li>
            <li>Merchant whitelisting</li>
            <li>Transaction velocity limits</li>
            <li>Daily / monthly spend caps</li>
          </ul>
        </div>

        {/* DECLINES */}
        <div className={styles.block}>
          <h2>Common Decline Scenarios</h2>
          <ul>
            <li>Merchant not part of approved network</li>
            <li>Insufficient prepaid balance</li>
            <li>Transaction limit exceeded</li>
            <li>Card inactive or expired</li>
          </ul>
        </div>

        {/* SETTLEMENT */}
        <div className={styles.block}>
          <h2>Settlement & Reconciliation</h2>
          <p>
            Settlement in semi-closed systems usually happens between the issuer
            and participating merchants without full interbank clearing.
          </p>
          <ul>
            <li>Issuer settles with merchant partners</li>
            <li>No ATM or cash settlement</li>
            <li>Internal reconciliation reports</li>
          </ul>
        </div>

        {/* ADVANTAGES */}
        <div className={styles.block}>
          <h2>Advantages of Semi-Closed Prepaid Cards</h2>
          <ul>
            <li>Better acceptance than closed-loop</li>
            <li>Lower cost than open-loop cards</li>
            <li>High control and compliance</li>
            <li>Ideal for fintech ecosystems</li>
          </ul>
        </div>

        {/* LIMITATIONS */}
        <div className={styles.block}>
          <h2>Limitations</h2>
          <ul>
            <li>No cash withdrawal</li>
            <li>Restricted merchant network</li>
            <li>Limited international usage</li>
          </ul>
        </div>

        {/* SUMMARY */}
        <div className={styles.block}>
          <h2>Summary</h2>
          <p>
            Semi-Closed Prepaid Cards balance flexibility and control. They are
            widely used in fintech wallets and prepaid ecosystems where cash
            access is restricted but digital acceptance is required.
          </p>
        </div>

      </section>
    </main>
  );
}
