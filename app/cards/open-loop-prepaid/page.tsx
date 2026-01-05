import styles from "./openLoop.module.css";

export default function OpenLoopPrepaidPage() {
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
            4111&nbsp;2222&nbsp;3333&nbsp;4444
          </div>

          <div className={styles.footer}>
            <div>
              <span>Card Holder</span>
              <strong>ROHAN SAKHARE</strong>
            </div>
            <div className={styles.type}>OPEN-LOOP PREPAID</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        {/* INTRO */}
        <div className={styles.block}>
          <h2>What is an Open-Loop Prepaid Card?</h2>
          <p>
            An Open-Loop Prepaid Card is a prepaid card that can be used
            <strong> across multiple merchants, POS terminals, online platforms,
            and even ATMs</strong>, similar to a debit card.
          </p>
          <p>
            However, unlike debit cards, open-loop prepaid cards are
            <strong>not linked to a bank account</strong>. Instead, they operate
            on a <strong>stored-value prepaid ledger</strong> maintained by the
            issuer.
          </p>
        </div>

        {/* WHY IT EXISTS */}
        <div className={styles.block}>
          <h2>Why Open-Loop Prepaid Cards Exist</h2>
          <ul>
            <li>Universal acceptance without bank account linkage</li>
            <li>Safer alternative to debit cards</li>
            <li>Ideal for unbanked or underbanked users</li>
            <li>Supports ATM, POS, and online payments</li>
            <li>Used heavily in fintech and neo-bank ecosystems</li>
          </ul>
        </div>

        {/* POSITIONING */}
        <div className={styles.block}>
          <h2>Positioning Among Card Types</h2>
          <ul>
            <li><strong>Closed-Loop:</strong> Single merchant</li>
            <li><strong>Semi-Closed:</strong> Limited merchants, no ATM</li>
            <li><strong>Open-Loop:</strong> Universal acceptance</li>
            <li><strong>Debit:</strong> Linked to bank account (CBS)</li>
          </ul>
        </div>

        {/* PARTICIPANTS */}
        <div className={styles.block}>
          <h2>Entities Involved in Open-Loop Prepaid Transactions</h2>
          <ul>
            <li><strong>Cardholder:</strong> End user</li>
            <li><strong>ATM / POS / Merchant:</strong> Acceptance point</li>
            <li><strong>Acquirer Bank:</strong> Owns ATM or POS</li>
            <li><strong>Payment Switch:</strong> Routes transactions</li>
            <li><strong>Network:</strong> Domestic / international network</li>
            <li><strong>Prepaid Issuer:</strong> Maintains prepaid system</li>
            <li><strong>Prepaid Ledger:</strong> Stores balance & limits</li>
          </ul>
        </div>

        {/* BALANCE MODEL */}
        <div className={styles.block}>
          <h2>Prepaid Ledger & Balance Model</h2>
          <p>
            Open-loop prepaid cards rely on a <strong>central prepaid ledger</strong>,
            not on a Core Banking System.
          </p>
          <ul>
            <li>Balance must be loaded in advance</li>
            <li>Real-time debit on every transaction</li>
            <li>No overdraft or negative balance</li>
            <li>Issuer controls limits and rules</li>
          </ul>
        </div>

        {/* POS FLOW */}
        <div className={styles.block}>
          <h2>POS Transaction Flow (Open-Loop Prepaid)</h2>

          <div className={styles.flow}>
            <span>Customer</span>
            <span>POS</span>
            <span>Acquirer</span>
            <span>Network</span>
            <span>Issuer Switch</span>
            <span>Prepaid Ledger</span>
          </div>

          <ol>
            <li>Customer taps or inserts prepaid card</li>
            <li>POS sends transaction to acquirer</li>
            <li>Acquirer routes request to network</li>
            <li>Network forwards to issuer switch</li>
            <li>Issuer validates card and balance</li>
            <li>Ledger is debited instantly</li>
            <li>Approval returned to merchant</li>
          </ol>
        </div>

        {/* ATM FLOW */}
        <div className={styles.block}>
          <h2>ATM Cash Withdrawal Flow</h2>

          <ol>
            <li>Customer inserts prepaid card</li>
            <li>PIN authentication at ATM</li>
            <li>Transaction routed via network</li>
            <li>Issuer checks prepaid balance</li>
            <li>Cash dispensed if balance allows</li>
            <li>Ledger debited instantly</li>
          </ol>
        </div>

        {/* ONLINE FLOW */}
        <div className={styles.block}>
          <h2>E-Commerce Transaction Flow</h2>
          <ol>
            <li>Customer enters card details</li>
            <li>Merchant sends to payment gateway</li>
            <li>Gateway → Acquirer → Network</li>
            <li>Issuer validates prepaid balance</li>
            <li>Transaction approved or declined</li>
          </ol>
        </div>

        {/* RELOAD */}
        <div className={styles.block}>
          <h2>Reload / Top-Up Mechanism</h2>
          <ul>
            <li>UPI, bank transfer, or cash load</li>
            <li>Issuer receives funds</li>
            <li>Prepaid ledger credited</li>
            <li>Balance available instantly</li>
          </ul>
        </div>

        {/* CONTROLS */}
        <div className={styles.block}>
          <h2>Risk Controls & Compliance</h2>
          <ul>
            <li>KYC-based balance limits</li>
            <li>Velocity & transaction caps</li>
            <li>Geographic restrictions</li>
            <li>Merchant category controls</li>
          </ul>
        </div>

        {/* DECLINES */}
        <div className={styles.block}>
          <h2>Common Decline Reasons</h2>
          <ul>
            <li>Insufficient prepaid balance</li>
            <li>Transaction limit exceeded</li>
            <li>Invalid PIN or authentication</li>
            <li>Regulatory or KYC restriction</li>
          </ul>
        </div>

        {/* SETTLEMENT */}
        <div className={styles.block}>
          <h2>Clearing & Settlement</h2>
          <p>
            Open-loop prepaid cards require interbank settlement similar to
            debit cards, but funds are prefunded by the issuer.
          </p>
          <ul>
            <li>Issuer settles with acquirer</li>
            <li>Customer funds already held</li>
            <li>Lower settlement risk</li>
          </ul>
        </div>

        {/* ADVANTAGES */}
        <div className={styles.block}>
          <h2>Advantages</h2>
          <ul>
            <li>Wide acceptance</li>
            <li>No bank account required</li>
            <li>Lower fraud exposure</li>
            <li>Ideal for fintech scale</li>
          </ul>
        </div>

        {/* LIMITATIONS */}
        <div className={styles.block}>
          <h2>Limitations</h2>
          <ul>
            <li>Balance limits enforced</li>
            <li>No credit facility</li>
            <li>Reload dependency</li>
          </ul>
        </div>

        {/* SUMMARY */}
        <div className={styles.block}>
          <h2>Summary</h2>
          <p>
            Open-Loop Prepaid Cards combine the acceptance of debit cards with
            the safety and control of prepaid systems, making them a cornerstone
            of modern fintech and wallet ecosystems.
          </p>
        </div>

      </section>
    </main>
  );
}
