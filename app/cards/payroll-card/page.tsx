import styles from "./payroll.module.css";

export default function PayrollCardPage() {
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
            6060&nbsp;7070&nbsp;8080&nbsp;9090
          </div>

          <div className={styles.footer}>
            <div>
              <span>Employee</span>
              <strong>ROHAN SAKHARE</strong>
            </div>
            <div className={styles.type}>PAYROLL</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        {/* INTRO */}
        <div className={styles.block}>
          <h2>What is a Payroll Card?</h2>
          <p>
            A Payroll Card is a <strong>reloadable prepaid card</strong> issued
            to employees for receiving salaries and wages electronically,
            instead of direct bank account credit.
          </p>
          <p>
            The employer loads salary funds onto the card, and the employee can
            use the balance for ATM withdrawals, POS purchases, and online
            payments.
          </p>
        </div>

        {/* WHY */}
        <div className={styles.block}>
          <h2>Why Payroll Cards Exist</h2>
          <ul>
            <li>Serve employees without bank accounts</li>
            <li>Reduce cash and cheque handling</li>
            <li>Instant salary availability</li>
            <li>Lower operational cost for employers</li>
            <li>Regulatory-compliant salary disbursement</li>
          </ul>
        </div>

        {/* POSITIONING */}
        <div className={styles.block}>
          <h2>Payroll Card Positioning</h2>
          <ul>
            <li><strong>Type:</strong> Reloadable Open-Loop Prepaid Card</li>
            <li><strong>Funding:</strong> Employer → Issuer</li>
            <li><strong>Usage:</strong> ATM, POS, Online</li>
            <li><strong>No credit:</strong> Spend limited to salary balance</li>
          </ul>
        </div>

        {/* ENTITIES */}
        <div className={styles.block}>
          <h2>Entities Involved in Payroll Card Ecosystem</h2>
          <ul>
            <li><strong>Employer:</strong> Salary provider</li>
            <li><strong>Employee:</strong> Cardholder</li>
            <li><strong>Payroll System:</strong> Salary calculation</li>
            <li><strong>Issuer Bank:</strong> Card & prepaid system owner</li>
            <li><strong>Payment Switch:</strong> Transaction routing</li>
            <li><strong>Prepaid Ledger:</strong> Employee balance</li>
          </ul>
        </div>

        {/* ONBOARDING */}
        <div className={styles.block}>
          <h2>Employee Onboarding Flow</h2>
          <ol>
            <li>Employer signs agreement with issuer</li>
            <li>Employee details shared with issuer</li>
            <li>KYC performed (as per regulation)</li>
            <li>Payroll card issued & activated</li>
            <li>Card linked to employee prepaid ledger</li>
          </ol>
        </div>

        {/* SALARY LOAD FLOW */}
        <div className={styles.block}>
          <h2>Salary Credit / Load Flow (MOST IMPORTANT)</h2>

          <div className={styles.flow}>
            <span>Employer</span>
            <span>Payroll System</span>
            <span>Issuer Bank</span>
            <span>Prepaid Ledger</span>
          </div>

          <ol>
            <li>Payroll system calculates monthly salary</li>
            <li>Employer initiates salary file / API call</li>
            <li>Employer transfers funds to issuer</li>
            <li>Issuer validates employee records</li>
            <li>Salary amount credited to prepaid ledger</li>
            <li>Employee notified instantly</li>
          </ol>
        </div>

        {/* BALANCE MODEL */}
        <div className={styles.block}>
          <h2>Payroll Balance Model</h2>
          <ul>
            <li>Balance represents credited salary</li>
            <li>Reloaded monthly or weekly</li>
            <li>No overdraft allowed</li>
            <li>Balance available immediately</li>
          </ul>
        </div>

        {/* POS FLOW */}
        <div className={styles.block}>
          <h2>POS Transaction Flow</h2>
          <ol>
            <li>Employee uses card at merchant POS</li>
            <li>Transaction routed via acquirer & network</li>
            <li>Issuer checks prepaid balance</li>
            <li>Ledger debited instantly</li>
            <li>Approval returned to merchant</li>
          </ol>
        </div>

        {/* ATM FLOW */}
        <div className={styles.block}>
          <h2>ATM Cash Withdrawal Flow</h2>
          <ol>
            <li>Employee inserts payroll card at ATM</li>
            <li>PIN authentication</li>
            <li>Transaction routed to issuer</li>
            <li>Ledger balance checked</li>
            <li>Cash dispensed</li>
            <li>Balance reduced instantly</li>
          </ol>
        </div>

        {/* ONLINE */}
        <div className={styles.block}>
          <h2>Online / E-Commerce Flow</h2>
          <ol>
            <li>Employee enters card details online</li>
            <li>Merchant → Gateway → Network</li>
            <li>Issuer validates balance & risk</li>
            <li>Transaction approved or declined</li>
          </ol>
        </div>

        {/* CONTROLS */}
        <div className={styles.block}>
          <h2>Controls & Compliance</h2>
          <ul>
            <li>KYC-based balance limits</li>
            <li>ATM withdrawal caps</li>
            <li>Spending controls</li>
            <li>AML and transaction monitoring</li>
          </ul>
        </div>

        {/* FAILURES */}
        <div className={styles.block}>
          <h2>Common Failure Scenarios</h2>
          <ul>
            <li>Salary file mismatch</li>
            <li>Insufficient employer funding</li>
            <li>Employee KYC incomplete</li>
            <li>Insufficient balance</li>
          </ul>
        </div>

        {/* SETTLEMENT */}
        <div className={styles.block}>
          <h2>Clearing & Settlement</h2>
          <p>
            Payroll card transactions settle like open-loop prepaid cards.
            Issuer prefunds settlement using employer-loaded funds.
          </p>
          <ul>
            <li>Issuer settles with acquirer</li>
            <li>No credit risk</li>
            <li>Daily reconciliation</li>
          </ul>
        </div>

        {/* ADVANTAGES */}
        <div className={styles.block}>
          <h2>Advantages</h2>
          <ul>
            <li>Fast salary access</li>
            <li>No bank account required</li>
            <li>Lower employer cost</li>
            <li>Financial inclusion</li>
          </ul>
        </div>

        {/* LIMITATIONS */}
        <div className={styles.block}>
          <h2>Limitations</h2>
          <ul>
            <li>Limited features compared to bank accounts</li>
            <li>ATM fees may apply</li>
            <li>Dependent on issuer platform</li>
          </ul>
        </div>

        {/* SUMMARY */}
        <div className={styles.block}>
          <h2>Summary</h2>
          <p>
            Payroll Cards are a powerful financial inclusion tool, enabling
            digital salary payments while providing employees with secure,
            controlled access to their wages.
          </p>
        </div>

      </section>
    </main>
  );
}
