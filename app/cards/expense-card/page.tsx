import styles from "./expenseCard.module.css";

export default function ExpenseCardPage() {
  return (
    <main className={styles.wrapper}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.card}>
          <div className={styles.topRow}>
            <span className={styles.bank}>CARDVERSE ISSUER</span>
            <span className={styles.issuer}>EXPENSE MGMT</span>
          </div>

          <div className={styles.number}>
            5199&nbsp;03XX&nbsp;XXXX&nbsp;6408
          </div>

          <div className={styles.footer}>
            <div>
              <span>Employee</span>
              <strong>ROHAN SAKHARE</strong>
            </div>
            <div className={styles.type}>EXPENSE</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        {/* INTRO */}
        <div className={styles.block}>
          <h2>What is an Expense Card?</h2>
          <p>
            An Expense Card is a corporate payment card issued to employees
            exclusively for official business expenses such as meals, local
            travel, subscriptions, client entertainment, office supplies, and
            ad-hoc operational costs.
          </p>
          <p>
            Expense cards eliminate reimbursement delays by allowing employees
            to pay directly while maintaining strict company control and
            visibility over spending.
          </p>
        </div>

        {/* POSITIONING */}
        <div className={styles.block}>
          <h2>Expense Card Positioning</h2>
          <ul>
            <li><strong>Card Type:</strong> Corporate & Business Card</li>
            <li><strong>Primary Use:</strong> Day-to-day business expenses</li>
            <li><strong>Funding Model:</strong> Company-funded / credit line</li>
            <li><strong>Risk Model:</strong> Policy & receipt driven</li>
            <li><strong>Key Feature:</strong> Real-time expense control</li>
          </ul>
        </div>

        {/* ECOSYSTEM */}
        <div className={styles.block}>
          <h2>Entities in Expense Card Ecosystem</h2>
          <ul>
            <li><strong>Company:</strong> Expense owner & policy setter</li>
            <li><strong>Employee:</strong> Expense initiator</li>
            <li><strong>Issuing Bank:</strong> Card & credit provider</li>
            <li><strong>Expense Platform:</strong> Receipt & approval engine</li>
            <li><strong>ERP / Accounting:</strong> Financial posting</li>
            <li><strong>Auditors:</strong> Compliance & review</li>
          </ul>
        </div>

        {/* TYPES */}
        <div className={styles.block}>
          <h2>Types of Expense Cards</h2>
          <ul>
            <li>Employee Expense Card</li>
            <li>Virtual Expense Card</li>
            <li>Department Expense Card</li>
            <li>Temporary / Project Expense Card</li>
            <li>Subscription-Only Expense Card</li>
          </ul>
        </div>

        {/* ISSUANCE */}
        <div className={styles.block}>
          <h2>Expense Card Issuance Flow</h2>
          <ol>
            <li>Company onboarding with issuer</li>
            <li>Expense policy configuration</li>
            <li>Employee enrollment & role mapping</li>
            <li>Spending limits assigned</li>
            <li>Card issued (physical / virtual)</li>
          </ol>
        </div>

        {/* MAIN FLOW */}
        <div className={styles.block}>
          <h2>Expense Transaction Flow</h2>

          <div className={styles.flow}>
            <span>Employee</span>
            <span>Merchant</span>
            <span>Acquirer</span>
            <span>Network</span>
            <span>Issuer</span>
            <span>Expense Engine</span>
          </div>

          <ol>
            <li>Employee makes business expense</li>
            <li>Transaction routed to issuer</li>
            <li>Policy, category & limit checks</li>
            <li>Transaction approved or declined</li>
            <li>Expense auto-captured</li>
            <li>Receipt request triggered</li>
          </ol>
        </div>

        {/* RECEIPTS */}
        <div className={styles.block}>
          <h2>Receipt Capture & Matching</h2>
          <ul>
            <li>Mobile photo receipt upload</li>
            <li>OCR-based receipt extraction</li>
            <li>Auto-matching with transactions</li>
            <li>Missing receipt reminders</li>
          </ul>
        </div>

        {/* POLICY */}
        <div className={styles.block}>
          <h2>Expense Policies & Controls</h2>
          <ul>
            <li>Category-based spend limits</li>
            <li>MCC & merchant restrictions</li>
            <li>Per-transaction & monthly caps</li>
            <li>Geo & time-based rules</li>
          </ul>
        </div>

        {/* APPROVAL */}
        <div className={styles.block}>
          <h2>Approval & Audit Workflow</h2>
          <ul>
            <li>Employee submits expense</li>
            <li>Manager approval</li>
            <li>Finance review</li>
            <li>ERP posting</li>
            <li>Audit trail maintained</li>
          </ul>
        </div>

        {/* FRAUD */}
        <div className={styles.block}>
          <h2>Fraud Prevention & Compliance</h2>
          <ul>
            <li>Duplicate expense detection</li>
            <li>Out-of-policy alerts</li>
            <li>Behavior-based anomaly detection</li>
            <li>SOX & audit compliance</li>
          </ul>
        </div>

        {/* DECLINES */}
        <div className={styles.block}>
          <h2>Common Decline Scenarios</h2>
          <ul>
            <li>Category not allowed</li>
            <li>Limit exceeded</li>
            <li>Missing receipt compliance</li>
            <li>Inactive employee card</li>
          </ul>
        </div>

        {/* SETTLEMENT */}
        <div className={styles.block}>
          <h2>Clearing & Settlement</h2>
          <p>
            Expense card transactions follow standard card settlement cycles.
            Consolidated statements are provided to finance teams for expense
            booking and reconciliation.
          </p>
        </div>

        {/* ADVANTAGES */}
        <div className={styles.block}>
          <h2>Advantages</h2>
          <ul>
            <li>No reimbursement delays</li>
            <li>Real-time expense visibility</li>
            <li>Improved policy compliance</li>
            <li>Reduced finance workload</li>
          </ul>
        </div>

        {/* LIMITATIONS */}
        <div className={styles.block}>
          <h2>Limitations & Risks</h2>
          <ul>
            <li>Requires disciplined receipt capture</li>
            <li>Policy complexity</li>
            <li>Employee misuse risk if poorly governed</li>
          </ul>
        </div>

        {/* SUMMARY */}
        <div className={styles.block}>
          <h2>Summary</h2>
          <p>
            Expense Cards modernize employee spending by combining real-time
            controls, automated receipts, and seamless accounting integration.
            They are a cornerstone of modern corporate finance operations.
          </p>
        </div>

      </section>
    </main>
  );
}
