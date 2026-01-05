import styles from "./reloadable.module.css";

export default function ReloadablePrepaidPage() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.card}>
          <div className={styles.topRow}>
            <span className={styles.bank}>CARDVERSE BANK</span>
            <span className={styles.issuer}>CARDVERSE ISSUER</span>
          </div>

          <div className={styles.number}>
            7007&nbsp;9090&nbsp;1212&nbsp;3434
          </div>

          <div className={styles.footer}>
            <div>
              <span>Card Holder</span>
              <strong>ROHAN SAKHARE</strong>
            </div>
            <div className={styles.type}>RELOADABLE PREPAID</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        {/* INTRO */}
        <div className={styles.block}>
          <h2>What is a Reloadable Prepaid Card?</h2>
          <p>
            A Reloadable Prepaid Card is a prepaid payment card that allows the
            cardholder to <strong>add money multiple times</strong> and use the
            available balance for transactions until the card expires.
          </p>
          <p>
            Unlike non-reloadable prepaid cards (one-time use), reloadable cards
            support continuous funding and long-term usage.
          </p>
        </div>

        {/* WHY IT EXISTS */}
        <div className={styles.block}>
          <h2>Why Reloadable Prepaid Cards Exist</h2>
          <ul>
            <li>Serve users without traditional bank accounts</li>
            <li>Support repeated spending without credit risk</li>
            <li>Ideal for salary, allowance, travel, and wallet use cases</li>
            <li>Safer alternative to debit cards</li>
            <li>Easy lifecycle management</li>
          </ul>
        </div>

        {/* USE CASES */}
        <div className={styles.block}>
          <h2>Common Real-World Use Cases</h2>
          <ul>
            <li>Payroll & salary cards</li>
            <li>Neo-bank prepaid cards</li>
            <li>Travel & forex cards</li>
            <li>Teen / allowance cards</li>
            <li>Wallet-linked physical cards</li>
          </ul>
        </div>

        {/* POSITIONING */}
        <div className={styles.block}>
          <h2>Positioning Among Prepaid Cards</h2>
          <ul>
            <li><strong>Non-Reloadable:</strong> One-time load only</li>
            <li><strong>Reloadable:</strong> Multiple loads allowed</li>
            <li><strong>Open-Loop Reloadable:</strong> POS + ATM + Online</li>
            <li><strong>Semi-Closed Reloadable:</strong> Merchant-restricted</li>
          </ul>
        </div>

        {/* ENTITIES */}
        <div className={styles.block}>
          <h2>Entities Involved</h2>
          <ul>
            <li><strong>Cardholder:</strong> End user</li>
            <li><strong>Merchant / ATM / POS:</strong> Acceptance channel</li>
            <li><strong>Acquirer:</strong> Merchant or ATM bank</li>
            <li><strong>Payment Switch:</strong> Transaction routing</li>
            <li><strong>Issuer System:</strong> Prepaid platform</li>
            <li><strong>Prepaid Ledger:</strong> Stores reloadable balance</li>
          </ul>
        </div>

        {/* BALANCE */}
        <div className={styles.block}>
          <h2>Reloadable Balance Model</h2>
          <p>
            Reloadable prepaid cards operate on a <strong>stored-value ledger</strong>
            where funds are credited and debited in real time.
          </p>
          <ul>
            <li>Balance must be pre-funded</li>
            <li>No overdraft allowed</li>
            <li>Real-time debit on spend</li>
            <li>Issuer-controlled limits</li>
          </ul>
        </div>

        {/* RELOAD FLOW */}
        <div className={styles.block}>
          <h2>Reload / Top-Up Flow (Step-by-Step)</h2>

          <div className={styles.flow}>
            <span>User</span>
            <span>Reload Channel</span>
            <span>Issuer System</span>
            <span>Prepaid Ledger</span>
          </div>

          <ol>
            <li>User initiates reload (UPI / bank / cash)</li>
            <li>Funds received by issuer</li>
            <li>Issuer validates KYC & limits</li>
            <li>Ledger balance credited</li>
            <li>Balance becomes available instantly</li>
          </ol>
        </div>

        {/* POS FLOW */}
        <div className={styles.block}>
          <h2>POS Transaction Flow</h2>

          <ol>
            <li>Card presented at POS</li>
            <li>Transaction routed via acquirer & network</li>
            <li>Issuer validates card status</li>
            <li>Ledger balance checked</li>
            <li>Amount deducted instantly</li>
            <li>Approval returned to merchant</li>
          </ol>
        </div>

        {/* ATM FLOW */}
        <div className={styles.block}>
          <h2>ATM Cash Withdrawal Flow</h2>
          <ol>
            <li>Card inserted at ATM</li>
            <li>PIN authentication</li>
            <li>Issuer checks prepaid balance</li>
            <li>Cash dispensed</li>
            <li>Ledger debited</li>
          </ol>
        </div>

        {/* ONLINE */}
        <div className={styles.block}>
          <h2>E-Commerce Transaction Flow</h2>
          <ol>
            <li>Card details entered online</li>
            <li>Merchant → Gateway → Network</li>
            <li>Issuer validates balance & risk</li>
            <li>Transaction approved or declined</li>
          </ol>
        </div>

        {/* CONTROLS */}
        <div className={styles.block}>
          <h2>Risk Controls & Compliance</h2>
          <ul>
            <li>KYC-based balance caps</li>
            <li>Daily / monthly reload limits</li>
            <li>Transaction velocity rules</li>
            <li>Geographic & merchant controls</li>
          </ul>
        </div>

        {/* DECLINES */}
        <div className={styles.block}>
          <h2>Common Decline Scenarios</h2>
          <ul>
            <li>Insufficient balance</li>
            <li>Reload limit exceeded</li>
            <li>KYC restrictions</li>
            <li>Card blocked or expired</li>
          </ul>
        </div>

        {/* SETTLEMENT */}
        <div className={styles.block}>
          <h2>Clearing & Settlement</h2>
          <p>
            Reloadable prepaid cards settle like debit cards, but funds are
            already prefunded by the issuer, reducing settlement risk.
          </p>
          <ul>
            <li>Issuer settles with acquirer</li>
            <li>No credit exposure</li>
            <li>Daily reconciliation</li>
          </ul>
        </div>

        {/* SUMMARY */}
        <div className={styles.block}>
          <h2>Summary</h2>
          <p>
            Reloadable Prepaid Cards are flexible, safe, and scalable payment
            instruments. They combine the control of prepaid systems with the
            convenience of repeated usage, making them ideal for fintech and
            modern digital banking.
          </p>
        </div>

      </section>
    </main>
  );
}
