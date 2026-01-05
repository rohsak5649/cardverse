import styles from "./credit.module.css";

export default function CreditPage() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.card}>
          <div className={styles.topRow}>
            <span className={styles.bank}>CARDVERSE BANK</span>
            <span className={styles.issuerTop}>CARDVERSE ISSUER</span>
          </div>

          <div className={styles.number}>
            5432&nbsp;1098&nbsp;7654&nbsp;3210
          </div>

          <div className={styles.footer}>
            <div>
              <span>Card Holder</span>
              <strong>ROHAN SAKHARE</strong>
            </div>
            <div className={styles.type}>CREDIT</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>
        {/* INTRO */}
        <div className={styles.block}>
          <h2>What is a Credit Card?</h2>
          <p>
            A credit card allows a customer to spend money using a predefined
            credit limit provided by the issuing bank. Unlike debit cards,
            transactions are not immediately debited from the customer’s bank
            account.
          </p>
          <p>
            Instead, the issuer bank pays the merchant on behalf of the customer,
            and the customer repays the bank later according to the billing
            cycle.
          </p>
        </div>

        {/* WHY CREDIT */}
        <div className={styles.block}>
          <h2>Why Banks Issue Credit Cards</h2>
          <ul>
            <li>Generate interest and fee-based revenue</li>
            <li>Enable short-term unsecured credit</li>
            <li>Increase customer spending power</li>
            <li>Build long-term customer relationships</li>
          </ul>
        </div>

        {/* KEY CONCEPTS */}
        <div className={styles.block}>
          <h2>Important Credit Card Concepts</h2>
          <ul>
            <li><strong>Credit Limit:</strong> Maximum spend allowed</li>
            <li><strong>Outstanding Amount:</strong> Amount currently owed</li>
            <li><strong>Billing Cycle:</strong> Monthly statement period</li>
            <li><strong>Due Date:</strong> Last date to repay without penalty</li>
            <li><strong>Minimum Due:</strong> Minimum payment required</li>
          </ul>
        </div>

        {/* PARTICIPANTS */}
        <div className={styles.block}>
          <h2>Entities Involved in a Credit Card Transaction</h2>
          <ul>
            <li><strong>Cardholder:</strong> Customer using the credit card</li>
            <li><strong>Merchant / POS:</strong> Where the transaction happens</li>
            <li><strong>Acquirer Bank:</strong> Bank of the merchant</li>
            <li><strong>Payment Switch:</strong> Routes transaction messages</li>
            <li><strong>Network:</strong> Routing & settlement layer</li>
            <li><strong>Issuer Bank:</strong> Bank providing credit</li>
            <li><strong>Card Management System:</strong> Credit account logic</li>
          </ul>
        </div>

        {/* AUTHORIZATION */}
        <div className={styles.block}>
          <h2>Authorization Phase (Credit Check)</h2>
          <p>
            During authorization, the issuer bank validates whether the
            transaction can be approved based on:
          </p>
          <ul>
            <li>Card validity and status</li>
            <li>Available credit limit</li>
            <li>Fraud rules and risk checks</li>
            <li>Transaction amount and merchant category</li>
          </ul>
        </div>

        {/* POS FLOW */}
        <div className={styles.block}>
          <h2>Credit Card POS Transaction – Step by Step</h2>

          <div className={styles.flow}>
            <span>Customer</span>
            <span>POS</span>
            <span>Acquirer</span>
            <span>Network</span>
            <span>Issuer</span>
          </div>

          <ol>
            <li>Customer taps or inserts credit card</li>
            <li>POS sends transaction to Acquirer Bank</li>
            <li>Acquirer routes transaction via Network</li>
            <li>Issuer checks credit limit and fraud rules</li>
            <li>Issuer sends approval or decline</li>
            <li>Merchant receives confirmation</li>
            <li>Transaction is recorded as outstanding</li>
          </ol>
        </div>

        {/* ONLINE FLOW */}
        <div className={styles.block}>
          <h2>Credit Card Online (E-Commerce) Transaction</h2>
          <ol>
            <li>Customer enters card details</li>
            <li>Merchant sends request to Payment Gateway</li>
            <li>Gateway forwards to Acquirer</li>
            <li>Network routes to Issuer</li>
            <li>Issuer triggers OTP / risk checks</li>
            <li>Issuer approves based on credit limit</li>
          </ol>
        </div>

        {/* BILLING */}
        <div className={styles.block}>
          <h2>Billing Cycle & Statement Generation</h2>
          <p>
            All approved credit card transactions are accumulated during the
            billing cycle. At the end of the cycle:
          </p>
          <ul>
            <li>Statement is generated</li>
            <li>Total outstanding is calculated</li>
            <li>Minimum due amount is defined</li>
            <li>Payment due date is communicated</li>
          </ul>
        </div>

        {/* PAYMENT */}
        <div className={styles.block}>
          <h2>Customer Repayment Flow</h2>
          <ul>
            <li>Customer pays full amount → No interest</li>
            <li>Customer pays minimum due → Interest applied</li>
            <li>Late payment → Penalty + interest</li>
          </ul>
        </div>

        {/* FAILURE CASES */}
        <div className={styles.block}>
          <h2>Common Credit Card Decline Reasons</h2>
          <ul>
            <li>Credit limit exceeded</li>
            <li>High fraud risk</li>
            <li>Card blocked or expired</li>
            <li>Incorrect authentication</li>
          </ul>
        </div>

        {/* SETTLEMENT */}
        <div className={styles.block}>
          <h2>Clearing and Settlement</h2>
          <p>
            After authorization, settlement happens between issuer and acquirer
            through the network. The issuer pays the acquirer, not the customer.
          </p>
          <ul>
            <li>Issuer settles with acquirer</li>
            <li>Customer repays issuer later</li>
            <li>Interchange and fees are applied</li>
          </ul>
        </div>

        {/* SUMMARY */}
        <div className={styles.block}>
          <h2>Summary</h2>
          <p>
            Credit cards introduce delayed payment, risk management, billing,
            and interest calculations, making them more complex than debit
            cards at both system and business levels.
          </p>
        </div>
      </section>
    </main>
  );
}
