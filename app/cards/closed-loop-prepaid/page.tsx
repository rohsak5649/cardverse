import styles from "./closedLoop.module.css";

export default function ClosedLoopPrepaidPage() {
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
            9999&nbsp;8888&nbsp;7777&nbsp;6666
          </div>

          <div className={styles.footer}>
            <div>
              <span>Card Holder</span>
              <strong>ROHAN SAKHARE</strong>
            </div>
            <div className={styles.type}>CLOSED LOOP</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        {/* INTRO */}
        <div className={styles.block}>
          <h2>What is a Closed-Loop Prepaid Card?</h2>
          <p>
            A Closed-Loop Prepaid Card is a type of prepaid card that can be used
            <strong> only within a specific merchant ecosystem</strong>. Unlike
            open-loop cards, it does not work across multiple banks or networks.
          </p>
          <p>
            These cards are typically issued by merchants, brands, or service
            providers and are accepted only at their own stores or platforms.
          </p>
        </div>

        {/* WHY CLOSED LOOP */}
        <div className={styles.block}>
          <h2>Why Closed-Loop Prepaid Cards Exist</h2>
          <ul>
            <li>Customer loyalty and retention</li>
            <li>Controlled spending within a brand</li>
            <li>No dependency on card networks</li>
            <li>Lower operational and settlement cost</li>
            <li>Fast onboarding and issuance</li>
          </ul>
        </div>

        {/* EXAMPLES */}
        <div className={styles.block}>
          <h2>Real-World Examples</h2>
          <ul>
            <li>Retail store gift cards</li>
            <li>Food chain prepaid cards</li>
            <li>Metro or transit cards</li>
            <li>Corporate cafeteria cards</li>
            <li>Campus or employee cards</li>
          </ul>
        </div>

        {/* KEY DIFFERENCE */}
        <div className={styles.block}>
          <h2>Closed-Loop vs Open-Loop (Core Difference)</h2>
          <ul>
            <li>Closed-Loop → Single merchant or ecosystem</li>
            <li>Open-Loop → Multiple merchants and banks</li>
            <li>No Visa / Mastercard / NPCI involved</li>
            <li>Issuer and merchant are often the same entity</li>
          </ul>
        </div>

        {/* PARTICIPANTS */}
        <div className={styles.block}>
          <h2>Entities Involved in Closed-Loop Transactions</h2>
          <ul>
            <li><strong>Cardholder:</strong> End user</li>
            <li><strong>Merchant POS:</strong> Brand’s payment terminal</li>
            <li><strong>Closed-Loop Processor:</strong> Internal transaction engine</li>
            <li><strong>Prepaid Ledger:</strong> Stores balance</li>
            <li><strong>Merchant Settlement System:</strong> Internal reconciliation</li>
          </ul>
        </div>

        {/* BALANCE MODEL */}
        <div className={styles.block}>
          <h2>How the Prepaid Balance Works</h2>
          <p>
            In a closed-loop system, customer funds are stored in a
            <strong> prepaid ledger</strong> managed directly by the issuer or
            merchant.
          </p>
          <ul>
            <li>Balance is loaded before usage</li>
            <li>Balance is deducted instantly on purchase</li>
            <li>No overdraft or credit allowed</li>
            <li>Limits can be enforced at merchant level</li>
          </ul>
        </div>

        {/* POS FLOW */}
        <div className={styles.block}>
          <h2>Closed-Loop POS Transaction – Complete Flow</h2>

          <div className={styles.flow}>
            <span>Customer</span>
            <span>Merchant POS</span>
            <span>Closed-Loop Engine</span>
            <span>Prepaid Ledger</span>
          </div>

          <ol>
            <li>Customer presents closed-loop card</li>
            <li>POS identifies card as closed-loop</li>
            <li>Transaction sent to closed-loop processor</li>
            <li>Processor checks available prepaid balance</li>
            <li>Business rules and limits applied</li>
            <li>Balance is deducted</li>
            <li>Approval sent back to POS</li>
          </ol>
        </div>

        {/* ONLINE FLOW */}
        <div className={styles.block}>
          <h2>Closed-Loop Online Transaction Flow</h2>
          <ol>
            <li>Customer logs into merchant app or website</li>
            <li>Closed-loop card selected as payment method</li>
            <li>System validates prepaid balance</li>
            <li>Amount deducted from ledger</li>
            <li>Order confirmation generated</li>
          </ol>
        </div>

        {/* RELOAD */}
        <div className={styles.block}>
          <h2>Reload / Top-Up Mechanism</h2>
          <ul>
            <li>Customer loads money via cash, UPI, or bank transfer</li>
            <li>Funds received by merchant</li>
            <li>Prepaid ledger is credited</li>
            <li>Balance available instantly</li>
          </ul>
        </div>

        {/* SECURITY */}
        <div className={styles.block}>
          <h2>Security & Risk Controls</h2>
          <ul>
            <li>PIN or app-based authentication</li>
            <li>Merchant-restricted usage</li>
            <li>Velocity and amount limits</li>
            <li>Fraud monitoring at merchant level</li>
          </ul>
        </div>

        {/* DECLINES */}
        <div className={styles.block}>
          <h2>Common Decline Scenarios</h2>
          <ul>
            <li>Insufficient prepaid balance</li>
            <li>Card expired or inactive</li>
            <li>Merchant system unavailable</li>
            <li>Transaction limit exceeded</li>
          </ul>
        </div>

        {/* SETTLEMENT */}
        <div className={styles.block}>
          <h2>Settlement & Reconciliation</h2>
          <p>
            Closed-loop systems do not require interbank settlement. All
            transactions are settled internally within the merchant’s system.
          </p>
          <ul>
            <li>No network fees</li>
            <li>No interchange</li>
            <li>Internal ledger reconciliation</li>
            <li>Daily reporting and audits</li>
          </ul>
        </div>

        {/* ADVANTAGES */}
        <div className={styles.block}>
          <h2>Advantages of Closed-Loop Cards</h2>
          <ul>
            <li>Low cost of operation</li>
            <li>High transaction speed</li>
            <li>Strong customer loyalty</li>
            <li>Full control by issuer</li>
          </ul>
        </div>

        {/* LIMITATIONS */}
        <div className={styles.block}>
          <h2>Limitations</h2>
          <ul>
            <li>Limited acceptance</li>
            <li>No interoperability</li>
            <li>Funds locked to one merchant</li>
          </ul>
        </div>

        {/* SUMMARY */}
        <div className={styles.block}>
          <h2>Summary</h2>
          <p>
            Closed-Loop Prepaid Cards are simple, controlled, and cost-effective
            payment instruments. They are ideal for merchant-centric ecosystems
            where speed, control, and loyalty matter more than universal
            acceptance.
          </p>
        </div>

      </section>
    </main>
  );
}
