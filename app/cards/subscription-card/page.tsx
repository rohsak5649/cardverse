import styles from "./subscriptionCard.module.css";

export default function SubscriptionCardPage() {
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
            4762&nbsp;55XX&nbsp;XXXX&nbsp;9024
          </div>

          <div className={styles.footer}>
            <div>
              <span>Cardholder</span>
              <strong>ROHAN SAKHARE</strong>
            </div>
            <div className={styles.type}>SUBSCRIPTION</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        {/* INTRO */}
        <div className={styles.block}>
          <h2>What is a Subscription Card?</h2>
          <p>
            A Subscription Card is a payment card configured specifically for
            recurring, automated payments where a merchant charges the customer
            at regular intervals without requiring manual approval every time.
          </p>
          <p>
            Subscription cards are commonly used for OTT platforms, SaaS tools,
            cloud services, utilities, insurance premiums, memberships, and
            digital services.
          </p>
        </div>

        {/* POSITIONING */}
        <div className={styles.block}>
          <h2>Subscription Card Positioning</h2>
          <ul>
            <li><strong>Card Type:</strong> Usage-Based Card</li>
            <li><strong>Transaction Nature:</strong> Recurring / Merchant-Initiated</li>
            <li><strong>Primary Channel:</strong> Card-Not-Present (CNP)</li>
            <li><strong>Risk Model:</strong> Medium (Controlled recurrence)</li>
            <li><strong>Key Feature:</strong> Mandate-based authorization</li>
          </ul>
        </div>

        {/* ECOSYSTEM */}
        <div className={styles.block}>
          <h2>Entities Involved in Subscription Ecosystem</h2>
          <ul>
            <li><strong>Cardholder:</strong> Subscriber</li>
            <li><strong>Merchant:</strong> Subscription service provider</li>
            <li><strong>Payment Gateway:</strong> Recurring billing engine</li>
            <li><strong>Acquirer Bank:</strong> Merchant’s acquiring bank</li>
            <li><strong>Card Network:</strong> Visa / Mastercard</li>
            <li><strong>Issuer Bank:</strong> Card issuing bank</li>
            <li><strong>Mandate System:</strong> Consent & control layer</li>
          </ul>
        </div>

        {/* TYPES */}
        <div className={styles.block}>
          <h2>Types of Subscription Cards</h2>
          <ul>
            <li>OTT Subscription Card</li>
            <li>SaaS Billing Card</li>
            <li>Utility Auto-Debit Card</li>
            <li>Membership Renewal Card</li>
            <li>Merchant-Locked Subscription Card</li>
          </ul>
        </div>

        {/* MANDATE */}
        <div className={styles.block}>
          <h2>Mandate & Consent Model</h2>
          <p>
            Subscription payments operate using a mandate or consent mechanism
            where the cardholder authorizes the merchant to debit the card
            automatically as per agreed frequency and amount.
          </p>
          <ul>
            <li>One-time customer authentication</li>
            <li>Mandate amount & frequency defined</li>
            <li>Customer can pause or cancel anytime</li>
            <li>Mandatory notifications before debit</li>
          </ul>
        </div>

        {/* ISSUANCE */}
        <div className={styles.block}>
          <h2>Subscription Setup Flow</h2>
          <ol>
            <li>User enters card details on merchant platform</li>
            <li>Initial authentication (OTP / 3DS)</li>
            <li>Mandate registered with issuer</li>
            <li>Subscription activated</li>
            <li>Recurring billing scheduled</li>
          </ol>
        </div>

        {/* MAIN FLOW */}
        <div className={styles.block}>
          <h2>Recurring Transaction Flow (DEEP DIVE)</h2>

          <div className={styles.flow}>
            <span>Merchant</span>
            <span>Gateway</span>
            <span>Acquirer</span>
            <span>Network</span>
            <span>Issuer</span>
            <span>Mandate Engine</span>
          </div>

          <ol>
            <li>Merchant triggers scheduled charge</li>
            <li>Gateway creates merchant-initiated transaction</li>
            <li>Acquirer forwards transaction</li>
            <li>Issuer validates mandate rules</li>
            <li>Risk & limit checks applied</li>
            <li>Transaction approved or declined</li>
          </ol>
        </div>

        {/* TOKENIZATION */}
        <div className={styles.block}>
          <h2>Tokenization in Subscription Payments</h2>
          <ul>
            <li>Actual card number replaced with network token</li>
            <li>Token remains valid even if card expires</li>
            <li>Improves approval rates</li>
            <li>Reduces data breach risk</li>
          </ul>
        </div>

        {/* RETRY */}
        <div className={styles.block}>
          <h2>Retry Logic & Dunning Management</h2>
          <ul>
            <li>Automatic retries on failure</li>
            <li>Smart retry schedules</li>
            <li>Customer notification before retry</li>
            <li>Account suspension after repeated failure</li>
          </ul>
        </div>

        {/* FAILURE */}
        <div className={styles.block}>
          <h2>Common Failure Scenarios</h2>
          <ul>
            <li>Insufficient funds</li>
            <li>Expired or blocked card</li>
            <li>Mandate revoked</li>
            <li>Exceeded mandate amount</li>
            <li>Risk or compliance decline</li>
          </ul>
        </div>

        {/* REFUNDS */}
        <div className={styles.block}>
          <h2>Refunds, Cancellations & Chargebacks</h2>
          <p>
            Customers can cancel subscriptions at any time. Refunds and
            chargebacks follow card network rules and may involve dispute
            resolution processes.
          </p>
          <ul>
            <li>Prorated refunds</li>
            <li>Chargeback reason codes</li>
            <li>Issuer-led dispute handling</li>
          </ul>
        </div>

        {/* SETTLEMENT */}
        <div className={styles.block}>
          <h2>Clearing & Settlement</h2>
          <p>
            Subscription transactions are settled like standard card payments,
            but with higher approval optimization due to tokenization and
            merchant trust history.
          </p>
        </div>

        {/* ADVANTAGES */}
        <div className={styles.block}>
          <h2>Advantages</h2>
          <ul>
            <li>Seamless recurring payments</li>
            <li>No manual intervention</li>
            <li>High merchant revenue predictability</li>
            <li>Improved customer experience</li>
          </ul>
        </div>

        {/* LIMITATIONS */}
        <div className={styles.block}>
          <h2>Limitations & Risks</h2>
          <ul>
            <li>Risk of unnoticed charges</li>
            <li>Dependency on mandate compliance</li>
            <li>Higher dispute sensitivity</li>
          </ul>
        </div>

        {/* SUMMARY */}
        <div className={styles.block}>
          <h2>Summary</h2>
          <p>
            Subscription Cards are the backbone of modern digital economies.
            With mandates, tokenization, and smart retry logic, they enable
            frictionless recurring payments while maintaining security and
            customer control.
          </p>
        </div>

      </section>
    </main>
  );
}
