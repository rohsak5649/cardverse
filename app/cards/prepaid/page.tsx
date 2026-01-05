import styles from "./prepaid.module.css";

export default function PrepaidPage() {
  return (
    <main className={styles.wrapper}>
      {/* HERO CARD */}
      <section className={styles.hero}>
        <div className={styles.card}>
          <div className={styles.topRow}>
            <span className={styles.bank}>CARDVERSE BANK</span>
            <span className={styles.issuer}>CARDVERSE ISSUER</span>
          </div>

          <div className={styles.number}>
            9876&nbsp;5432&nbsp;1098&nbsp;7654
          </div>

          <div className={styles.footer}>
            <div>
              <span>Card Holder</span>
              <strong>ROHAN SAKHARE</strong>
            </div>
            <div className={styles.type}>PREPAID</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>
        {/* INTRO */}
        <div className={styles.block}>
          <h2>What is a Prepaid Card?</h2>
          <p>
            A prepaid card is a payment instrument where the customer loads money
            in advance before using the card. Unlike debit or credit cards, a
            prepaid card is not directly linked to a bank account or credit line.
          </p>
          <p>
            Transactions are allowed only up to the available prepaid balance.
            Once the balance is exhausted, the card must be reloaded to continue
            usage.
          </p>
        </div>

        {/* WHY PREPAID */}
        <div className={styles.block}>
          <h2>Why Prepaid Cards Exist</h2>
          <ul>
            <li>Controlled spending (no overdraft or credit)</li>
            <li>Ideal for gifting, travel, and corporate usage</li>
            <li>No direct bank account exposure</li>
            <li>Lower risk compared to debit and credit cards</li>
            <li>Easy onboarding and fast issuance</li>
          </ul>
        </div>

        {/* TYPES */}
        <div className={styles.block}>
          <h2>Types of Prepaid Cards</h2>
          <ul>
            <li><strong>Closed Loop:</strong> Usable only with one merchant</li>
            <li><strong>Semi-Closed:</strong> Limited merchant network</li>
            <li><strong>Open Loop:</strong> Works like a regular card</li>
            <li><strong>Reloadable:</strong> Balance can be topped up</li>
            <li><strong>Non-Reloadable:</strong> One-time load</li>
          </ul>
        </div>

        {/* PARTICIPANTS */}
        <div className={styles.block}>
          <h2>Entities Involved in Prepaid Transactions</h2>
          <ul>
            <li><strong>Cardholder:</strong> End user</li>
            <li><strong>Merchant / POS:</strong> Payment acceptance point</li>
            <li><strong>Acquirer Bank:</strong> Merchant’s bank</li>
            <li><strong>Payment Switch:</strong> Routes transaction messages</li>
            <li><strong>Issuer / Wallet System:</strong> Maintains prepaid balance</li>
            <li><strong>Prepaid Ledger:</strong> Stores balance and limits</li>
          </ul>
        </div>

        {/* BALANCE MODEL */}
        <div className={styles.block}>
          <h2>How Prepaid Balance Works</h2>
          <p>
            Every prepaid card has a stored-value balance maintained in the
            issuer’s prepaid management system. This balance:
          </p>
          <ul>
            <li>Is loaded before usage</li>
            <li>Is reduced instantly after approval</li>
            <li>Cannot go negative</li>
            <li>May have daily or monthly limits</li>
          </ul>
        </div>

        {/* POS FLOW */}
        <div className={styles.block}>
          <h2>Prepaid Card POS Transaction – Step by Step</h2>

          <div className={styles.flow}>
            <span>Customer</span>
            <span>POS</span>
            <span>Acquirer</span>
            <span>Switch</span>
            <span>Prepaid System</span>
          </div>

          <ol>
            <li>Customer taps or swipes prepaid card</li>
            <li>POS sends transaction to Acquirer</li>
            <li>Acquirer routes request via Payment Switch</li>
            <li>Issuer checks available prepaid balance</li>
            <li>Balance sufficiency validation happens</li>
            <li>Amount is blocked and deducted</li>
            <li>Approval or decline is sent back</li>
          </ol>
        </div>

        {/* ONLINE */}
        <div className={styles.block}>
          <h2>Online (E-Commerce) Prepaid Transaction</h2>
          <ol>
            <li>Customer enters prepaid card details</li>
            <li>Merchant sends request to payment gateway</li>
            <li>Gateway forwards to acquirer</li>
            <li>Switch routes to prepaid issuer</li>
            <li>Issuer validates balance and risk rules</li>
            <li>Transaction is approved or declined</li>
          </ol>
        </div>

        {/* RELOAD */}
        <div className={styles.block}>
          <h2>Prepaid Card Reload / Top-Up Flow</h2>
          <ul>
            <li>Customer initiates reload via bank, UPI, or cash</li>
            <li>Issuer receives funds</li>
            <li>Prepaid ledger is credited</li>
            <li>Balance becomes available instantly</li>
          </ul>
        </div>

        {/* SECURITY */}
        <div className={styles.block}>
          <h2>Security & Risk Controls</h2>
          <ul>
            <li>PIN / OTP authentication</li>
            <li>Velocity and amount limits</li>
            <li>Merchant category restrictions</li>
            <li>Geographical controls</li>
          </ul>
        </div>

        {/* DECLINES */}
        <div className={styles.block}>
          <h2>Common Decline Reasons</h2>
          <ul>
            <li>Insufficient prepaid balance</li>
            <li>Transaction limit exceeded</li>
            <li>Card expired or blocked</li>
            <li>Restricted merchant category</li>
          </ul>
        </div>

        {/* SETTLEMENT */}
        <div className={styles.block}>
          <h2>Clearing and Settlement</h2>
          <p>
            Prepaid transactions are settled using prefunded balances held by
            the issuer. Since money is already loaded, settlement risk is lower
            than credit cards.
          </p>
          <ul>
            <li>Issuer settles with acquirer</li>
            <li>Customer balance already deducted</li>
            <li>No billing cycle involved</li>
          </ul>
        </div>

        {/* SUMMARY */}
        <div className={styles.block}>
          <h2>Summary</h2>
          <p>
            Prepaid cards combine simplicity, security, and control. They are
            ideal for users who want card functionality without exposing bank
            accounts or taking credit risk.
          </p>
        </div>
      </section>
    </main>
  );
}
