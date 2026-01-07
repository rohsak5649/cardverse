import styles from "./contactlessCard.module.css";

export default function ContactlessCardPage() {
  return (
    <main className={styles.wrapper}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.card}>
          <div className={styles.topRow}>
            <span className={styles.bank}>CARDVERSE ISSUER</span>
            <span className={styles.issuer}>VISA / Mastercard / RuPay</span>
          </div>

          <div className={styles.number}>
            5198&nbsp;44XX&nbsp;XXXX&nbsp;1107
          </div>

          <div className={styles.footer}>
            <div>
              <span>Cardholder</span>
              <strong>ROHAN SAKHARE</strong>
            </div>
            <div className={styles.type}>CONTACTLESS</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        {/* INTRO */}
        <div className={styles.block}>
          <h2>What is a Contactless Card?</h2>
          <p>
            A Contactless Card is a payment card enabled with Near Field
            Communication (NFC) technology that allows users to make payments
            by simply tapping the card on a compatible POS terminal.
          </p>
          <p>
            The card does not need to be inserted or swiped. Communication
            happens wirelessly over a very short distance, typically less than
            4 centimeters.
          </p>
        </div>

        {/* POSITIONING */}
        <div className={styles.block}>
          <h2>Contactless Card Positioning</h2>
          <ul>
            <li><strong>Card Type:</strong> Usage-Based Card</li>
            <li><strong>Technology:</strong> NFC + EMV Contactless</li>
            <li><strong>Transaction Speed:</strong> Very Fast (&lt; 500 ms)</li>
            <li><strong>Primary Use:</strong> Retail, transit, quick payments</li>
            <li><strong>Risk Model:</strong> Medium (Offline + Low-value auth)</li>
          </ul>
        </div>

        {/* ECOSYSTEM */}
        <div className={styles.block}>
          <h2>Entities Involved in Contactless Ecosystem</h2>
          <ul>
            <li><strong>Cardholder:</strong> End user</li>
            <li><strong>Contactless POS:</strong> NFC-enabled terminal</li>
            <li><strong>Acquirer Bank:</strong> Merchant’s bank</li>
            <li><strong>Card Network:</strong> Visa / Mastercard / RuPay</li>
            <li><strong>Issuer Bank:</strong> Card issuing bank</li>
            <li><strong>Risk Engine:</strong> Velocity & fraud checks</li>
          </ul>
        </div>

        {/* TYPES */}
        <div className={styles.block}>
          <h2>Types of Contactless Cards</h2>
          <ul>
            <li>Contactless Debit Card</li>
            <li>Contactless Credit Card</li>
            <li>Prepaid Contactless Card</li>
            <li>Transit Contactless Card</li>
            <li>Dual-Interface Card (Chip + NFC)</li>
          </ul>
        </div>

        {/* ISSUANCE */}
        <div className={styles.block}>
          <h2>Contactless Card Issuance</h2>
          <ol>
            <li>Customer receives EMV chip card with NFC antenna</li>
            <li>Contactless profile enabled by issuer</li>
            <li>Tap limits configured (no-PIN threshold)</li>
            <li>Risk rules & counters initialized</li>
            <li>Card activated for contactless usage</li>
          </ol>
        </div>

        {/* MAIN FLOW */}
        <div className={styles.block}>
          <h2>Contactless Transaction Flow (TAP-TO-PAY)</h2>

          <div className={styles.flow}>
            <span>Card</span>
            <span>NFC POS</span>
            <span>Acquirer</span>
            <span>Network</span>
            <span>Issuer</span>
            <span>Risk Engine</span>
          </div>

          <ol>
            <li>Card tapped near NFC POS</li>
            <li>Card & terminal exchange cryptographic data</li>
            <li>Transaction sent to acquirer</li>
            <li>Routed via card network</li>
            <li>Issuer validates limits & counters</li>
            <li>Transaction approved or declined</li>
          </ol>
        </div>

        {/* OFFLINE */}
        <div className={styles.block}>
          <h2>Offline Authorization (Critical Concept)</h2>
          <p>
            For low-value transactions, contactless cards may approve
            transactions offline without contacting the issuer immediately.
          </p>
          <ul>
            <li>Offline amount limit defined</li>
            <li>Transaction counters maintained on chip</li>
            <li>Issuer syncs data during next online transaction</li>
            <li>Improves speed in transit & retail</li>
          </ul>
        </div>

        {/* LIMITS */}
        <div className={styles.block}>
          <h2>Tap Limits & Risk Counters</h2>
          <ul>
            <li>Per-transaction no-PIN limit</li>
            <li>Maximum cumulative offline amount</li>
            <li>Maximum consecutive offline transactions</li>
            <li>Mandatory PIN after threshold breach</li>
          </ul>
        </div>

        {/* SECURITY */}
        <div className={styles.block}>
          <h2>Security Architecture</h2>
          <ul>
            <li>Dynamic cryptograms per transaction</li>
            <li>No static card data exposed</li>
            <li>Short NFC range prevents skimming</li>
            <li>Issuer-side real-time monitoring</li>
          </ul>
        </div>

        {/* FAILURE */}
        <div className={styles.block}>
          <h2>Common Failure Scenarios</h2>
          <ul>
            <li>Tap limit exceeded (PIN required)</li>
            <li>Offline counters exceeded</li>
            <li>Card blocked or expired</li>
            <li>NFC antenna damage</li>
            <li>Terminal incompatibility</li>
          </ul>
        </div>

        {/* SETTLEMENT */}
        <div className={styles.block}>
          <h2>Clearing & Settlement</h2>
          <p>
            Contactless transactions follow standard EMV clearing and
            settlement cycles. Offline approvals are later reconciled during
            batch settlement.
          </p>
        </div>

        {/* ADVANTAGES */}
        <div className={styles.block}>
          <h2>Advantages</h2>
          <ul>
            <li>Ultra-fast payments</li>
            <li>No physical contact required</li>
            <li>Ideal for high-volume merchants</li>
            <li>Reduced wear on cards & terminals</li>
          </ul>
        </div>

        {/* LIMITATIONS */}
        <div className={styles.block}>
          <h2>Limitations & Risks</h2>
          <ul>
            <li>Limited offline amount</li>
            <li>Higher fraud exposure if stolen</li>
            <li>Requires NFC-enabled terminals</li>
          </ul>
        </div>

        {/* SUMMARY */}
        <div className={styles.block}>
          <h2>Summary</h2>
          <p>
            Contactless Cards redefine speed and convenience in payments.
            By combining EMV security, NFC technology, and smart risk controls,
            they enable seamless low-value transactions while maintaining a
            strong security posture.
          </p>
        </div>

      </section>
    </main>
  );
}
