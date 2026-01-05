import styles from "./nonReloadable.module.css";

export default function NonReloadablePrepaidPage() {
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
            8888&nbsp;1111&nbsp;2222&nbsp;3333
          </div>

          <div className={styles.footer}>
            <div>
              <span>Card Holder</span>
              <strong>ROHAN SAKHARE</strong>
            </div>
            <div className={styles.type}>NON-RELOADABLE</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        {/* INTRO */}
        <div className={styles.block}>
          <h2>What is a Non-Reloadable Prepaid Card?</h2>
          <p>
            A Non-Reloadable Prepaid Card is a prepaid payment instrument that is
            loaded with money <strong>only once</strong> at the time of issuance.
            After the balance is fully used, the card becomes unusable.
          </p>
          <p>
            Unlike reloadable prepaid cards, the balance on a non-reloadable
            card <strong>cannot be topped up</strong> again under any condition.
          </p>
        </div>

        {/* WHY IT EXISTS */}
        <div className={styles.block}>
          <h2>Why Non-Reloadable Prepaid Cards Exist</h2>
          <ul>
            <li>One-time controlled spending</li>
            <li>Gift, voucher, and incentive programs</li>
            <li>Lower fraud exposure</li>
            <li>Simple lifecycle management</li>
            <li>No long-term account maintenance</li>
          </ul>
        </div>

        {/* REAL USE CASES */}
        <div className={styles.block}>
          <h2>Real-World Use Cases</h2>
          <ul>
            <li>Gift cards (physical or digital)</li>
            <li>Promotional reward cards</li>
            <li>Cashback payout cards</li>
            <li>Festival or campaign vouchers</li>
            <li>One-time expense reimbursement cards</li>
          </ul>
        </div>

        {/* POSITIONING */}
        <div className={styles.block}>
          <h2>Positioning Among Prepaid Cards</h2>
          <ul>
            <li><strong>Non-Reloadable:</strong> Single load, finite life</li>
            <li><strong>Reloadable:</strong> Multiple loads allowed</li>
            <li><strong>Closed-Loop:</strong> Merchant restricted</li>
            <li><strong>Open-Loop:</strong> Universal acceptance</li>
          </ul>
        </div>

        {/* ENTITIES */}
        <div className={styles.block}>
          <h2>Entities Involved</h2>
          <ul>
            <li><strong>Cardholder:</strong> End beneficiary</li>
            <li><strong>Merchant / POS / Online Platform:</strong> Acceptance point</li>
            <li><strong>Acquirer:</strong> Merchant acquiring system</li>
            <li><strong>Payment Switch:</strong> Routes transaction</li>
            <li><strong>Issuer System:</strong> Manages prepaid logic</li>
            <li><strong>Prepaid Ledger:</strong> Stores one-time balance</li>
          </ul>
        </div>

        {/* BALANCE MODEL */}
        <div className={styles.block}>
          <h2>Balance & Lifecycle Model</h2>
          <p>
            Non-reloadable prepaid cards operate on a
            <strong> one-time funded ledger model</strong>.
          </p>
          <ul>
            <li>Balance loaded once during issuance</li>
            <li>No further credits allowed</li>
            <li>Balance decreases with every transaction</li>
            <li>Card expires after balance reaches zero</li>
          </ul>
        </div>

        {/* ISSUANCE */}
        <div className={styles.block}>
          <h2>Card Issuance Flow</h2>
          <ol>
            <li>Issuer defines card value (e.g. ₹1000)</li>
            <li>Funds are prefunded by issuer or sponsor</li>
            <li>Card record created in prepaid system</li>
            <li>Initial balance set in ledger</li>
            <li>Card distributed to end user</li>
          </ol>
        </div>

        {/* POS FLOW */}
        <div className={styles.block}>
          <h2>POS Transaction Flow</h2>

          <div className={styles.flow}>
            <span>Customer</span>
            <span>POS</span>
            <span>Acquirer</span>
            <span>Network</span>
            <span>Issuer</span>
            <span>Prepaid Ledger</span>
          </div>

          <ol>
            <li>Card presented at POS</li>
            <li>Transaction routed via acquirer and network</li>
            <li>Issuer validates card status</li>
            <li>Ledger balance checked</li>
            <li>Amount deducted instantly</li>
            <li>Approval returned to merchant</li>
          </ol>
        </div>

        {/* ONLINE FLOW */}
        <div className={styles.block}>
          <h2>E-Commerce Transaction Flow</h2>
          <ol>
            <li>Card details entered online</li>
            <li>Merchant → Gateway → Network</li>
            <li>Issuer validates balance</li>
            <li>Transaction approved or declined</li>
            <li>Balance reduced permanently</li>
          </ol>
        </div>

        {/* FAILURE */}
        <div className={styles.block}>
          <h2>Common Decline Scenarios</h2>
          <ul>
            <li>Insufficient remaining balance</li>
            <li>Card already exhausted</li>
            <li>Card expired</li>
            <li>Merchant restriction (if semi-closed)</li>
          </ul>
        </div>

        {/* EXPIRY */}
        <div className={styles.block}>
          <h2>Expiry & End-of-Life</h2>
          <p>
            Non-reloadable cards typically have a fixed expiry date. Any unused
            balance after expiry may:
          </p>
          <ul>
            <li>Expire permanently</li>
            <li>Be reclaimed by issuer</li>
            <li>Be refunded based on regulations</li>
          </ul>
        </div>

        {/* SETTLEMENT */}
        <div className={styles.block}>
          <h2>Clearing & Settlement</h2>
          <p>
            Settlement happens similarly to debit or open-loop prepaid cards,
            but funds are already prefunded.
          </p>
          <ul>
            <li>Issuer settles with acquirer</li>
            <li>No credit risk</li>
            <li>Simple reconciliation</li>
          </ul>
        </div>

        {/* ADVANTAGES */}
        <div className={styles.block}>
          <h2>Advantages</h2>
          <ul>
            <li>Very low fraud exposure</li>
            <li>Simple compliance</li>
            <li>No account maintenance</li>
            <li>Perfect for mass distribution</li>
          </ul>
        </div>

        {/* LIMITATIONS */}
        <div className={styles.block}>
          <h2>Limitations</h2>
          <ul>
            <li>No reload option</li>
            <li>Limited long-term usability</li>
            <li>Balance wastage risk</li>
          </ul>
        </div>

        {/* SUMMARY */}
        <div className={styles.block}>
          <h2>Summary</h2>
          <p>
            Non-Reloadable Prepaid Cards are simple, secure, and ideal for
            one-time value distribution. They reduce operational complexity
            while offering controlled spending and minimal risk.
          </p>
        </div>

      </section>
    </main>
  );
}
