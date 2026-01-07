import styles from "./corporateCard.module.css";

export default function CorporateCardPage() {
  return (
    <main className={styles.wrapper}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.card}>
          <div className={styles.topRow}>
            <span className={styles.bank}>CARDVERSE ISSUER</span>
            <span className={styles.issuer}>ENTERPRISE</span>
          </div>

          <div className={styles.number}>
            5483&nbsp;90XX&nbsp;XXXX&nbsp;2716
          </div>

          <div className={styles.footer}>
            <div>
              <span>Company User</span>
              <strong>ROHAN SAKHARE</strong>
            </div>
            <div className={styles.type}>CORPORATE</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        {/* INTRO */}
        <div className={styles.block}>
          <h2>What is a Corporate Card?</h2>
          <p>
            A Corporate Card is a business-focused payment card issued to
            employees of an organization to manage official expenses such as
            travel, lodging, meals, client entertainment, software purchases,
            and operational spending.
          </p>
          <p>
            Unlike personal cards, corporate cards operate under predefined
            company policies, approval workflows, and accounting controls.
          </p>
        </div>

        {/* POSITIONING */}
        <div className={styles.block}>
          <h2>Corporate Card Positioning</h2>
          <ul>
            <li><strong>Card Type:</strong> Corporate & Business Card</li>
            <li><strong>Primary Use:</strong> Business & employee expenses</li>
            <li><strong>Funding Model:</strong> Company-funded / Credit line</li>
            <li><strong>Risk Model:</strong> Policy-driven controlled risk</li>
            <li><strong>Key Feature:</strong> Expense governance</li>
          </ul>
        </div>

        {/* ECOSYSTEM */}
        <div className={styles.block}>
          <h2>Entities in Corporate Card Ecosystem</h2>
          <ul>
            <li><strong>Company (Employer):</strong> Card owner & policy setter</li>
            <li><strong>Employee (Cardholder):</strong> Authorized spender</li>
            <li><strong>Issuing Bank:</strong> Card issuer & credit provider</li>
            <li><strong>Program Manager:</strong> Expense & rule engine</li>
            <li><strong>Acquirer:</strong> Merchant acquiring bank</li>
            <li><strong>ERP / Accounting System:</strong> Expense booking</li>
            <li><strong>Auditors & Compliance:</strong> Oversight</li>
          </ul>
        </div>

        {/* TYPES */}
        <div className={styles.block}>
          <h2>Types of Corporate Cards</h2>
          <ul>
            <li>Employee Corporate Card</li>
            <li>Virtual Corporate Card</li>
            <li>Travel & Expense (T&E) Card</li>
            <li>Department-Level Corporate Card</li>
            <li>Executive / Management Card</li>
          </ul>
        </div>

        {/* ISSUANCE */}
        <div className={styles.block}>
          <h2>Corporate Card Issuance Flow</h2>
          <ol>
            <li>Company onboarding & agreement with issuer</li>
            <li>Credit assessment & limit assignment</li>
            <li>Employee enrollment</li>
            <li>Policy & category rules configured</li>
            <li>Card issued (physical or virtual)</li>
          </ol>
        </div>

        {/* MAIN FLOW */}
        <div className={styles.block}>
          <h2>Corporate Expense Transaction Flow</h2>

          <div className={styles.flow}>
            <span>Employee</span>
            <span>Merchant</span>
            <span>Acquirer</span>
            <span>Network</span>
            <span>Issuer</span>
            <span>Policy Engine</span>
          </div>

          <ol>
            <li>Employee makes business purchase</li>
            <li>Transaction routed to issuer</li>
            <li>Policy & limit validation performed</li>
            <li>Transaction approved or declined</li>
            <li>Expense recorded in system</li>
            <li>Receipt submission triggered</li>
          </ol>
        </div>

        {/* POLICY */}
        <div className={styles.block}>
          <h2>Expense Policies & Controls</h2>
          <ul>
            <li>Category-based spending limits</li>
            <li>Merchant & MCC restrictions</li>
            <li>Daily / monthly caps</li>
            <li>Geographic usage rules</li>
            <li>Role-based approvals</li>
          </ul>
        </div>

        {/* APPROVAL */}
        <div className={styles.block}>
          <h2>Approval & Reconciliation Workflow</h2>
          <ul>
            <li>Employee submits receipt</li>
            <li>Manager reviews expense</li>
            <li>Finance team reconciliation</li>
            <li>Expense posted to ERP</li>
            <li>Audit trail maintained</li>
          </ul>
        </div>

        {/* FRAUD */}
        <div className={styles.block}>
          <h2>Fraud Prevention & Compliance</h2>
          <ul>
            <li>Real-time anomaly detection</li>
            <li>Duplicate expense detection</li>
            <li>Policy violation alerts</li>
            <li>SOX & audit compliance</li>
          </ul>
        </div>

        {/* FAILURE */}
        <div className={styles.block}>
          <h2>Common Decline Scenarios</h2>
          <ul>
            <li>Policy violation</li>
            <li>Limit exceeded</li>
            <li>Unauthorized merchant</li>
            <li>Inactive employee card</li>
          </ul>
        </div>

        {/* SETTLEMENT */}
        <div className={styles.block}>
          <h2>Clearing & Settlement</h2>
          <p>
            Corporate card transactions follow standard clearing and settlement
            cycles, with consolidated billing provided to the company.
          </p>
        </div>

        {/* ADVANTAGES */}
        <div className={styles.block}>
          <h2>Advantages</h2>
          <ul>
            <li>Centralized expense control</li>
            <li>Improved policy compliance</li>
            <li>Reduced reimbursement overhead</li>
            <li>Real-time expense visibility</li>
          </ul>
        </div>

        {/* LIMITATIONS */}
        <div className={styles.block}>
          <h2>Limitations & Risks</h2>
          <ul>
            <li>Complex setup & governance</li>
            <li>Employee misuse risk</li>
            <li>Dependency on accurate receipts</li>
          </ul>
        </div>

        {/* SUMMARY */}
        <div className={styles.block}>
          <h2>Summary</h2>
          <p>
            Corporate Cards are powerful financial tools for enterprises.
            By combining policy enforcement, real-time controls, and accounting
            integration, they streamline business spending while ensuring
            compliance, transparency, and financial discipline.
          </p>
        </div>

      </section>
    </main>
  );
}
