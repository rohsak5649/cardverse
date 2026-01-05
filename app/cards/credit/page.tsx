import styles from "./credit.module.css";

export default function CreditCardPage() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroCard}>
          <p className={styles.issuer}>CARDVERSE ISSUER</p>
          <h1 className={styles.cardNumber}>4321 9876 5678 1234</h1>
          <div className={styles.cardFooter}>
            <span>ROHAN SAKHARE</span>
            <span className={styles.type}>CREDIT</span>
          </div>
        </div>

        <h1 className={styles.title}>Credit Card</h1>
        <p className={styles.subtitle}>
          Spend now, pay later. A complete deep-dive into credit card working,
          transaction flow, settlement, billing cycles, risks and controls.
        </p>

        <p className={styles.disclaimer}>
          ⚠️ Disclaimer: CardVerse is NOT a real bank or issuer. This website is
          created only for educational purposes to explain card concepts and
          transaction flows.
        </p>

        <p className={styles.author}>Developed by Rohan Sakhare</p>
      </section>

      {/* WHAT IS CREDIT CARD */}
      <section className={styles.section}>
        <h2>What is a Credit Card?</h2>
        <p>
          A credit card is a payment instrument that allows a customer to make
          purchases using money provided temporarily by the issuing bank.
          Unlike a debit card, the amount is NOT deducted immediately from your
          bank account.
        </p>

        <p>
          Instead, the bank gives you a <b>credit limit</b>. You can spend within
          this limit and repay the amount later, either fully or partially,
          based on the billing cycle.
        </p>
      </section>

      {/* KEY COMPONENTS */}
      <section className={styles.section}>
        <h2>Key Components of a Credit Card</h2>
        <ul>
          <li><b>Cardholder:</b> Customer using the credit card</li>
          <li><b>Issuer Bank:</b> Bank that issues the card</li>
          <li><b>Card Network:</b> Visa / Mastercard / RuPay / Amex</li>
          <li><b>Merchant:</b> Shop or website accepting card payment</li>
          <li><b>Acquirer Bank:</b> Merchant’s bank</li>
          <li><b>Credit Limit:</b> Maximum amount allowed to spend</li>
        </ul>
      </section>

      {/* TRANSACTION FLOW */}
      <section className={styles.section}>
        <h2>Credit Card Transaction Flow (Step-by-Step)</h2>

        <div className={styles.flow}>
          <p><b>Step 1:</b> Cardholder swipes / taps / enters card details</p>
          <p><b>Step 2:</b> Merchant sends transaction to Acquirer Bank</p>
          <p><b>Step 3:</b> Acquirer forwards request to Card Network</p>
          <p><b>Step 4:</b> Network routes request to Issuer Bank</p>
          <p><b>Step 5:</b> Issuer checks credit limit, fraud rules, CVV, expiry</p>
          <p><b>Step 6:</b> Issuer approves or declines transaction</p>
          <p><b>Step 7:</b> Response travels back to merchant</p>
        </div>
      </section>

      {/* AUTHORIZATION VS SETTLEMENT */}
      <section className={styles.section}>
        <h2>Authorization vs Settlement</h2>
        <p>
          <b>Authorization</b> means the bank blocks the amount from your credit
          limit but does not take money yet.
        </p>
        <p>
          <b>Settlement</b> happens later when merchant submits transactions in
          batch and money is transferred between banks.
        </p>
      </section>

      {/* BILLING CYCLE */}
      <section className={styles.section}>
        <h2>Billing Cycle & Due Date</h2>
        <p>
          Credit cards work on a monthly billing cycle (usually 30 days). All
          transactions during this period are added to your statement.
        </p>
        <p>
          After the statement is generated, you get a <b>grace period</b> (15–20
          days) to pay without interest.
        </p>
      </section>

      {/* INTEREST */}
      <section className={styles.section}>
        <h2>Interest & Minimum Due</h2>
        <p>
          If full payment is not done before due date, interest is charged on
          outstanding amount. Interest rates are usually high.
        </p>
        <p>
          Paying only <b>minimum due</b> avoids late fees but interest continues
          on remaining balance.
        </p>
      </section>

      {/* SECURITY */}
      <section className={styles.section}>
        <h2>Security & Fraud Protection</h2>
        <ul>
          <li>CVV & Expiry validation</li>
          <li>OTP / 3-D Secure</li>
          <li>Velocity & risk checks</li>
          <li>Tokenization</li>
          <li>Chargeback mechanism</li>
        </ul>
      </section>

      {/* ADVANTAGES */}
      <section className={styles.section}>
        <h2>Advantages of Credit Cards</h2>
        <ul>
          <li>Buy now, pay later convenience</li>
          <li>Build credit score</li>
          <li>Rewards & cashback</li>
          <li>Purchase protection</li>
        </ul>
      </section>

      {/* RISKS */}
      <section className={styles.section}>
        <h2>Risks & Responsible Usage</h2>
        <ul>
          <li>Overspending</li>
          <li>High interest debt</li>
          <li>Late payment penalties</li>
        </ul>
      </section>

      {/* SUMMARY */}
      <section className={styles.section}>
        <h2>Summary</h2>
        <p>
          Credit cards are powerful financial tools when used responsibly. They
          involve complex backend systems but provide simple and fast user
          experience at the front.
        </p>
      </section>
    </main>
  );
}
