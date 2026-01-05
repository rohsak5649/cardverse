import styles from "./credit.module.css";

export default function CreditCardPage() {
  return (
    <main className={styles.wrapper}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.card}>
          <div className={styles.topRow}>
            <span className={styles.bank}>CARDVERSE BANK</span>
            <span className={styles.issuer}>VISA / Mastercard</span>
          </div>

          <div className={styles.number}>
            5412&nbsp;34XX&nbsp;XXXX&nbsp;8890
          </div>

          <div className={styles.footer}>
            <div>
              <span>Cardholder</span>
              <strong>ROHAN SAKHARE</strong>
            </div>
            <div className={styles.type}>CREDIT</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        <div className={styles.block}>
          <h2>What is a Credit Card?</h2>
          <p>
            A Credit Card is a payment instrument that allows a customer to make
            purchases using funds provided temporarily by the issuing bank.
            Unlike debit cards, the money is not deducted immediately from a
            bank account.
          </p>
          <p>
            The bank assigns a predefined credit limit, and the cardholder can
            spend within this limit and repay later as per the billing cycle.
          </p>
        </div>

        <div className={styles.block}>
          <h2>Credit Card Positioning</h2>
          <ul>
            <li><strong>Card Type:</strong> Unsecured Lending Instrument</li>
            <li><strong>Funding Source:</strong> Issuer Bank Credit Line</li>
            <li><strong>Spending Limit:</strong> Credit Limit Assigned</li>
            <li><strong>Risk Model:</strong> Medium–High (Credit Risk)</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Entities Involved in Credit Card Ecosystem</h2>
          <ul>
            <li><strong>Cardholder:</strong> Customer using borrowed funds</li>
            <li><strong>Issuing Bank:</strong> Bank providing credit</li>
            <li><strong>Acquirer Bank:</strong> Merchant’s bank</li>
            <li><strong>Card Network:</strong> Visa / Mastercard / RuPay</li>
            <li><strong>Merchant:</strong> Seller of goods/services</li>
            <li><strong>Risk & Fraud Engine:</strong> Real-time monitoring systems</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Types of Credit Cards</h2>
          <ul>
            <li>Classic Credit Card</li>
            <li>Rewards Credit Card</li>
            <li>Cashback Credit Card</li>
            <li>Travel Credit Card</li>
            <li>Corporate Credit Card</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Credit Card Issuance Flow</h2>
          <ol>
            <li>Customer applies for credit card</li>
            <li>KYC and credit score evaluation</li>
            <li>Credit limit assigned</li>
            <li>Card personalization (PAN, CVV, expiry)</li>
            <li>Card delivered and activated</li>
          </ol>
        </div>

        <div className={styles.block}>
          <h2>POS Transaction Flow (MOST IMPORTANT)</h2>

          <div className={styles.flow}>
            <span>Cardholder</span>
            <span>POS</span>
            <span>Acquirer</span>
            <span>Network</span>
            <span>Issuer</span>
            <span>Risk Engine</span>
          </div>

          <ol>
            <li>Card presented at POS</li>
            <li>Transaction sent to acquirer</li>
            <li>Network routes to issuer</li>
            <li>Issuer checks credit limit & risk rules</li>
            <li>Amount authorized (limit reduced)</li>
            <li>Approval returned to merchant</li>
          </ol>
        </div>

        <div className={styles.block}>
          <h2>Billing Cycle & Statement Generation</h2>
          <ol>
            <li>Monthly billing cycle ends</li>
            <li>Statement generated with all transactions</li>
            <li>Total due and minimum due calculated</li>
            <li>Grace period provided (interest-free)</li>
          </ol>
        </div>

        <div className={styles.block}>
          <h2>Interest & Revolving Credit Model</h2>
          <ul>
            <li>Interest charged if full payment not done</li>
            <li>Minimum due avoids late fees</li>
            <li>Remaining balance revolves to next cycle</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Security & Fraud Protection</h2>
          <ul>
            <li>CVV & expiry validation</li>
            <li>OTP / 3D Secure</li>
            <li>Transaction velocity checks</li>
            <li>Chargeback mechanism</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Clearing & Settlement</h2>
          <p>
            Authorized transactions are cleared and settled between issuer and
            acquirer via the card network, usually on T+1 or T+2 basis.
          </p>
        </div>

        <div className={styles.block}>
          <h2>Advantages</h2>
          <ul>
            <li>Buy now, pay later convenience</li>
            <li>Build credit history</li>
            <li>Rewards, points, cashback</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Risks & Limitations</h2>
          <ul>
            <li>High interest if misused</li>
            <li>Overspending risk</li>
            <li>Late payment penalties</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Summary</h2>
          <p>
            Credit cards are powerful financial tools enabling short-term credit
            usage, but require disciplined repayment and responsible usage to
            avoid debt traps.
          </p>
        </div>

      </section>
    </main>
  );
}
