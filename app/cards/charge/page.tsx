import styles from "./charge.module.css";

export default function ChargePage() {
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
            3712&nbsp;9801&nbsp;2345&nbsp;678
          </div>

          <div className={styles.footer}>
            <div>
              <span>Card Holder</span>
              <strong>ROHAN SAKHARE</strong>
            </div>
            <div className={styles.type}>CHARGE</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        {/* INTRO */}
        <div className={styles.block}>
          <h2>What is a Charge Card?</h2>
          <p>
            A charge card is a payment card that allows the cardholder to spend
            money without a predefined credit limit, but with a strict
            requirement that the full outstanding amount must be paid at the
            end of each billing cycle.
          </p>
          <p>
            Unlike credit cards, charge cards do <strong>not</strong> allow
            revolving credit. There is no concept of minimum due or interest.
            The entire balance must be settled in full.
          </p>
        </div>

        {/* WHY IT EXISTS */}
        <div className={styles.block}>
          <h2>Why Charge Cards Exist</h2>
          <ul>
            <li>High-spending customers with strong credit profiles</li>
            <li>Corporate and executive expense management</li>
            <li>Zero revolving credit risk for issuer</li>
            <li>Predictable settlement behavior</li>
          </ul>
        </div>

        {/* CORE DIFFERENCE */}
        <div className={styles.block}>
          <h2>Charge Card vs Credit Card (Core Difference)</h2>
          <ul>
            <li>Charge card → Full payment mandatory</li>
            <li>Credit card → Partial payment allowed</li>
            <li>No interest on charge cards</li>
            <li>Strict penalty on non-payment</li>
          </ul>
        </div>

        {/* ENTITIES */}
        <div className={styles.block}>
          <h2>Entities Involved in Charge Card Transactions</h2>
          <ul>
            <li><strong>Cardholder:</strong> High-value customer</li>
            <li><strong>Merchant / POS:</strong> Transaction origin</li>
            <li><strong>Acquirer Bank:</strong> Merchant’s bank</li>
            <li><strong>Payment Switch:</strong> Transaction routing</li>
            <li><strong>Network:</strong> CardVerse Network (Demo)</li>
            <li><strong>Issuer Bank:</strong> Extends short-term credit</li>
            <li><strong>Charge Ledger System:</strong> Tracks outstanding usage</li>
          </ul>
        </div>

        {/* AUTHORIZATION */}
        <div className={styles.block}>
          <h2>Authorization Logic (Dynamic Spend Control)</h2>
          <p>
            Charge cards do not have a fixed credit limit. Instead, issuers
            calculate a <strong>dynamic spending capacity</strong> based on:
          </p>
          <ul>
            <li>Customer income & assets</li>
            <li>Spending history</li>
            <li>Repayment discipline</li>
            <li>Risk & fraud score</li>
          </ul>
        </div>

        {/* POS FLOW */}
        <div className={styles.block}>
          <h2>Charge Card POS Transaction – Full Flow</h2>

          <div className={styles.flow}>
            <span>Customer</span>
            <span>POS</span>
            <span>Acquirer</span>
            <span>Switch</span>
            <span>Issuer</span>
            <span>Charge Ledger</span>
          </div>

          <ol>
            <li>Customer taps or inserts charge card</li>
            <li>POS sends transaction to Acquirer</li>
            <li>Acquirer routes to Network</li>
            <li>Issuer performs dynamic spend check</li>
            <li>Fraud & behavior rules applied</li>
            <li>Approval or decline decision made</li>
            <li>Transaction recorded as outstanding</li>
          </ol>
        </div>

        {/* ONLINE */}
        <div className={styles.block}>
          <h2>Online (E-Commerce) Charge Card Flow</h2>
          <ol>
            <li>Customer enters card details</li>
            <li>Merchant sends to gateway</li>
            <li>Gateway → Acquirer → Network</li>
            <li>Issuer performs risk scoring</li>
            <li>OTP / step-up authentication</li>
            <li>Transaction approved</li>
          </ol>
        </div>

        {/* BILLING */}
        <div className={styles.block}>
          <h2>Billing Cycle & Statement</h2>
          <p>
            At the end of the billing cycle, the issuer generates a statement
            containing the <strong>total outstanding amount</strong>.
          </p>
          <ul>
            <li>No minimum due</li>
            <li>No interest calculation</li>
            <li>Single full payment required</li>
          </ul>
        </div>

        {/* PAYMENT */}
        <div className={styles.block}>
          <h2>Customer Repayment Flow</h2>
          <ol>
            <li>Statement generated</li>
            <li>Customer pays full outstanding</li>
            <li>Charge ledger cleared</li>
            <li>Spending capacity restored</li>
          </ol>
        </div>

        {/* FAILURE */}
        <div className={styles.block}>
          <h2>Non-Payment Consequences</h2>
          <ul>
            <li>Immediate card suspension</li>
            <li>Late payment penalties</li>
            <li>Account closure</li>
            <li>Credit score impact</li>
          </ul>
        </div>

        {/* SETTLEMENT */}
        <div className={styles.block}>
          <h2>Clearing & Settlement</h2>
          <p>
            Charge card settlement works like credit cards. The issuer pays the
            acquirer first, then recovers funds from the customer.
          </p>
          <ul>
            <li>Issuer settles with acquirer</li>
            <li>Customer repays issuer later</li>
            <li>No revolving balance</li>
          </ul>
        </div>

        {/* SUMMARY */}
        <div className={styles.block}>
          <h2>Summary</h2>
          <p>
            Charge cards are premium financial instruments designed for
            disciplined, high-spending customers. They combine flexible
            spending with strict repayment discipline, making them low-risk
            and high-value products for issuers.
          </p>
        </div>

      </section>
    </main>
  );
}
