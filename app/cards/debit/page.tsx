import styles from "./debit.module.css";

export default function DebitPage() {
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
            4321&nbsp;5678&nbsp;9012&nbsp;3456
          </div>

          <div className={styles.footer}>
            <div>
              <span>Card Holder</span>
              <strong>ROHAN SAKHARE</strong>
            </div>
            <div className={styles.type}>DEBIT</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        {/* INTRO */}
        <div className={styles.block}>
          <h2>What is a Debit Card?</h2>
          <p>
            A debit card is a payment instrument directly linked to a customer’s
            bank account. Unlike credit cards, there is no credit line involved.
            Every transaction is authorized in real time based on the available
            balance in the account.
          </p>
          <p>
            Debit card transactions are <strong>authorization-based</strong>,
            meaning the issuer bank must explicitly approve each transaction
            before money is debited.
          </p>
        </div>

        {/* WHY BANKS USE IT */}
        <div className={styles.block}>
          <h2>Why Banks Issue Debit Cards</h2>
          <ul>
            <li>Enable cashless payments</li>
            <li>Reduce branch and cash handling load</li>
            <li>Provide 24×7 access to funds</li>
            <li>Integrate customers with digital payment networks</li>
          </ul>
        </div>

        {/* PARTICIPANTS */}
        <div className={styles.block}>
          <h2>Entities Involved in a Debit Card Transaction</h2>
          <ul>
            <li><strong>Cardholder:</strong> Customer who owns the debit card</li>
            <li><strong>ATM / POS:</strong> Transaction capture device</li>
            <li><strong>Acquirer Bank:</strong> Bank that owns the ATM or POS</li>
            <li><strong>Acquirer Switch:</strong> Routes transactions from terminals</li>
            <li><strong>Network:</strong> NPCI / internal network (demo)</li>
            <li><strong>Issuer Switch:</strong> Bank-side transaction processor</li>
            <li><strong>CBS:</strong> Core Banking System holding customer accounts</li>
          </ul>
        </div>

        {/* AUTHORIZATION */}
        <div className={styles.block}>
          <h2>Authorization Phase (Most Critical)</h2>
          <p>
            Authorization is the real-time decision-making phase. During this
            phase, the issuer bank verifies:
          </p>
          <ul>
            <li>Card validity</li>
            <li>PIN or authentication data</li>
            <li>Account status (active / blocked)</li>
            <li>Available balance</li>
            <li>Daily transaction limits</li>
          </ul>
        </div>

        {/* ATM FLOW */}
        <div className={styles.block}>
          <h2>ATM Debit Card Transaction – Complete Flow</h2>

          <div className={styles.flow}>
            <span>Customer</span>
            <span>ATM</span>
            <span>Acquirer Switch</span>
            <span>Network</span>
            <span>Issuer Switch</span>
            <span>CBS</span>
          </div>

          <ol>
            <li>Customer inserts card into ATM</li>
            <li>ATM reads chip / magnetic data</li>
            <li>Customer enters PIN</li>
            <li>ATM encrypts PIN and creates transaction request</li>
            <li>Request sent to Acquirer Switch</li>
            <li>Acquirer routes request to Network</li>
            <li>Network forwards request to Issuer Switch</li>
            <li>Issuer Switch validates message format</li>
            <li>Issuer Switch sends request to CBS</li>
            <li>CBS checks balance and account status</li>
            <li>CBS returns approval or decline</li>
            <li>Response flows back to ATM</li>
            <li>ATM dispenses cash if approved</li>
            <li>Customer account is debited instantly</li>
          </ol>
        </div>

        {/* POS FLOW */}
        <div className={styles.block}>
          <h2>POS Debit Card Transaction – Complete Flow</h2>
          <ol>
            <li>Customer taps or inserts card</li>
            <li>POS reads EMV data</li>
            <li>Transaction sent to Acquirer</li>
            <li>Acquirer routes to Network</li>
            <li>Network routes to Issuer</li>
            <li>Issuer validates PIN / CVV</li>
            <li>Issuer checks balance</li>
            <li>Approval or decline returned</li>
            <li>Receipt printed</li>
          </ol>
        </div>

        {/* ONLINE FLOW */}
        <div className={styles.block}>
          <h2>E-Commerce Debit Card Transaction</h2>
          <ol>
            <li>Customer enters card details</li>
            <li>Merchant sends data to Payment Gateway</li>
            <li>Gateway forwards to Acquirer</li>
            <li>Acquirer routes to Issuer</li>
            <li>Issuer triggers OTP / authentication</li>
            <li>Customer enters OTP</li>
            <li>Issuer validates OTP and balance</li>
            <li>Transaction approved or declined</li>
          </ol>
        </div>

        {/* FAILURE CASES */}
        <div className={styles.block}>
          <h2>Common Failure Scenarios</h2>
          <ul>
            <li>Insufficient balance</li>
            <li>Incorrect PIN</li>
            <li>Network timeout</li>
            <li>Issuer system down</li>
            <li>Daily limit exceeded</li>
          </ul>
        </div>

        {/* REVERSALS */}
        <div className={styles.block}>
          <h2>Reversals and Timeouts</h2>
          <p>
            If cash is not dispensed but the account is debited, a reversal
            process is triggered. Reversals can be:
          </p>
          <ul>
            <li>Auto-reversal (system driven)</li>
            <li>Manual reversal (bank initiated)</li>
            <li>Network-assisted reversal</li>
          </ul>
        </div>

        {/* SETTLEMENT */}
        <div className={styles.block}>
          <h2>Clearing and Settlement</h2>
          <p>
            Authorization happens in real time, but settlement happens later.
            Banks exchange transaction files, calculate net positions, and
            transfer funds accordingly.
          </p>
          <ul>
            <li>Transaction batching</li>
            <li>Net settlement calculation</li>
            <li>Interbank fund transfer</li>
            <li>Reconciliation and reporting</li>
          </ul>
        </div>

        {/* SUMMARY */}
        <div className={styles.block}>
          <h2>Summary</h2>
          <p>
            Debit card transactions involve multiple systems working together
            in milliseconds. From terminal capture to issuer authorization and
            final settlement, each step is critical for secure and reliable
            payments.
          </p>
        </div>

      </section>
    </main>
  );
}
