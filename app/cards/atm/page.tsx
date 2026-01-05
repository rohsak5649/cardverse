import styles from "./atm.module.css";

export default function ATMCardPage() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.card}>
          <div className={styles.topRow}>
            <span className={styles.bank}>CARDVERSE BANK</span>
            <span className={styles.issuer}>CARDVERSE ISSUER</span>
          </div>

          <div className={styles.number}>
            6011&nbsp;8899&nbsp;4433&nbsp;2211
          </div>

          <div className={styles.footer}>
            <div>
              <span>Card Holder</span>
              <strong>ROHAN SAKHARE</strong>
            </div>
            <div className={styles.type}>ATM</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        {/* INTRO */}
        <div className={styles.block}>
          <h2>What is an ATM Card?</h2>
          <p>
            An ATM Card is a bank-issued card primarily designed for cash
            withdrawals and basic banking transactions through Automated Teller
            Machines (ATMs). Unlike debit cards, traditional ATM cards may not
            support POS or online transactions.
          </p>
          <p>
            ATM cards are directly linked to a customer’s bank account and rely
            heavily on PIN-based authentication.
          </p>
        </div>

        {/* WHY ATM CARDS */}
        <div className={styles.block}>
          <h2>Why ATM Cards Exist</h2>
          <ul>
            <li>Provide 24×7 cash access without branch dependency</li>
            <li>Reduce manual teller workload</li>
            <li>Enable basic self-service banking</li>
            <li>Lower risk compared to full debit cards</li>
          </ul>
        </div>

        {/* CAPABILITIES */}
        <div className={styles.block}>
          <h2>What an ATM Card Can Do</h2>
          <ul>
            <li>Cash withdrawal</li>
            <li>Balance enquiry</li>
            <li>Mini statement generation</li>
            <li>PIN change</li>
            <li>Fund transfer (limited banks)</li>
          </ul>
        </div>

        {/* LIMITATIONS */}
        <div className={styles.block}>
          <h2>Limitations of ATM Cards</h2>
          <ul>
            <li>Cannot be used for POS purchases (traditional ATM cards)</li>
            <li>No online or e-commerce usage</li>
            <li>Limited transaction types</li>
            <li>Strict dependency on ATM infrastructure</li>
          </ul>
        </div>

        {/* PARTICIPANTS */}
        <div className={styles.block}>
          <h2>Entities Involved in ATM Transactions</h2>
          <ul>
            <li><strong>Customer:</strong> Cardholder</li>
            <li><strong>ATM Terminal:</strong> Transaction capture device</li>
            <li><strong>Acquirer Bank:</strong> Bank owning the ATM</li>
            <li><strong>ATM Switch:</strong> Routes ATM transactions</li>
            <li><strong>Network:</strong> NPCI / interbank network</li>
            <li><strong>Issuer Bank:</strong> Card issuing bank</li>
            <li><strong>Core Banking System (CBS):</strong> Account management</li>
          </ul>
        </div>

        {/* ATM FLOW */}
        <div className={styles.block}>
          <h2>ATM Cash Withdrawal – Complete Technical Flow</h2>

          <div className={styles.flow}>
            <span>Customer</span>
            <span>ATM</span>
            <span>Acquirer ATM Switch</span>
            <span>Network</span>
            <span>Issuer Switch</span>
            <span>CBS</span>
          </div>

          <ol>
            <li>Customer inserts ATM card</li>
            <li>ATM reads magnetic stripe / chip data</li>
            <li>Customer enters PIN</li>
            <li>PIN is encrypted using HSM</li>
            <li>Transaction request is created (ISO 8583)</li>
            <li>Request sent to Acquirer ATM Switch</li>
            <li>Switch routes request to Network</li>
            <li>Network forwards to Issuer Bank</li>
            <li>Issuer validates PIN and account status</li>
            <li>CBS checks balance and withdrawal limits</li>
            <li>Approval or decline is generated</li>
            <li>Response travels back to ATM</li>
            <li>ATM dispenses cash if approved</li>
            <li>Customer account is debited instantly</li>
          </ol>
        </div>

        {/* ON-US OFF-US */}
        <div className={styles.block}>
          <h2>ON-US vs OFF-US ATM Transactions</h2>
          <p>
            <strong>ON-US:</strong> ATM and card belong to the same bank.
            No network routing required.
          </p>
          <p>
            <strong>OFF-US:</strong> ATM and card belong to different banks.
            Network and interbank settlement required.
          </p>
        </div>

        {/* ISO */}
        <div className={styles.block}>
          <h2>ISO 8583 in ATM Transactions</h2>
          <ul>
            <li>MTI identifies financial transaction</li>
            <li>DE2 – Primary Account Number</li>
            <li>DE3 – Processing Code</li>
            <li>DE4 – Transaction Amount</li>
            <li>DE52 – Encrypted PIN Block</li>
            <li>DE39 – Response Code</li>
          </ul>
        </div>

        {/* FAILURE */}
        <div className={styles.block}>
          <h2>Common ATM Failure Scenarios</h2>
          <ul>
            <li>Incorrect PIN</li>
            <li>Insufficient balance</li>
            <li>Cash not dispensed</li>
            <li>Network timeout</li>
            <li>ATM out of service</li>
          </ul>
        </div>

        {/* REVERSAL */}
        <div className={styles.block}>
          <h2>ATM Reversals & Disputes</h2>
          <p>
            If cash is not dispensed but the account is debited, an automatic
            reversal process is triggered. Reversals may occur through:
          </p>
          <ul>
            <li>Auto-reversal by issuer</li>
            <li>Network-assisted reconciliation</li>
            <li>Manual dispute handling</li>
          </ul>
        </div>

        {/* SETTLEMENT */}
        <div className={styles.block}>
          <h2>Clearing & Settlement</h2>
          <p>
            ATM transactions are settled between banks in batches through the
            network. Settlement includes interchange fees and reconciliation.
          </p>
          <ul>
            <li>Daily transaction batching</li>
            <li>Net settlement calculation</li>
            <li>Interbank fund transfer</li>
            <li>Chargeback handling</li>
          </ul>
        </div>

        {/* SUMMARY */}
        <div className={styles.block}>
          <h2>Summary</h2>
          <p>
            ATM cards are the foundation of modern self-service banking. Though
            limited in functionality, they are critical for cash access,
            interbank switching, and core banking integration.
          </p>
        </div>

      </section>
    </main>
  );
}
