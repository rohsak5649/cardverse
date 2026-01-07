import styles from "./projectCard.module.css";

export default function ProjectCardPage() {
  return (
    <main className={styles.wrapper}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.card}>
          <div className={styles.topRow}>
            <span className={styles.bank}>CARDVERSE ISSUER</span>
            <span className={styles.issuer}>PROJECT FINANCE</span>
          </div>

          <div className={styles.number}>
            6239&nbsp;51XX&nbsp;XXXX&nbsp;7724
          </div>

          <div className={styles.footer}>
            <div>
              <span>Project Owner</span>
              <strong>ROHAN SAKHARE</strong>
            </div>
            <div className={styles.type}>PROJECT</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        {/* INTRO */}
        <div className={styles.block}>
          <h2>What is a Project Card?</h2>
          <p>
            A Project Card is a specialized corporate payment card issued for
            managing expenses related to a specific project, contract, or
            initiative. All spending done using this card is directly mapped
            to a defined project budget and cost center.
          </p>
          <p>
            Project cards are widely used in IT services, construction,
            consulting, infrastructure, R&D, and large enterprise programs
            where strict budget control and cost attribution are critical.
          </p>
        </div>

        {/* POSITIONING */}
        <div className={styles.block}>
          <h2>Project Card Positioning</h2>
          <ul>
            <li><strong>Card Type:</strong> Corporate & Business Card</li>
            <li><strong>Primary Use:</strong> Project-specific expenses</li>
            <li><strong>Funding Model:</strong> Project budget–backed</li>
            <li><strong>Risk Model:</strong> Budget & phase controlled</li>
            <li><strong>Key Feature:</strong> Cost-center level tracking</li>
          </ul>
        </div>

        {/* ECOSYSTEM */}
        <div className={styles.block}>
          <h2>Entities in Project Card Ecosystem</h2>
          <ul>
            <li><strong>Company:</strong> Program sponsor</li>
            <li><strong>Project Manager:</strong> Budget owner</li>
            <li><strong>Team Members:</strong> Authorized spenders</li>
            <li><strong>Vendors:</strong> Project suppliers</li>
            <li><strong>Issuer / Program Manager:</strong> Rules & limits engine</li>
            <li><strong>ERP / Project Accounting:</strong> Cost tracking</li>
          </ul>
        </div>

        {/* TYPES */}
        <div className={styles.block}>
          <h2>Types of Project Cards</h2>
          <ul>
            <li>Single-Project Card</li>
            <li>Phase-Based Project Card</li>
            <li>Virtual Project Card</li>
            <li>Vendor-Specific Project Card</li>
            <li>Temporary Project Card</li>
          </ul>
        </div>

        {/* ISSUANCE */}
        <div className={styles.block}>
          <h2>Project Card Issuance Flow</h2>
          <ol>
            <li>Project created in ERP / PM system</li>
            <li>Budget & cost center assigned</li>
            <li>Authorized users & vendors mapped</li>
            <li>Spend rules & phase limits configured</li>
            <li>Project card issued & activated</li>
          </ol>
        </div>

        {/* MAIN FLOW */}
        <div className={styles.block}>
          <h2>Project Expense Transaction Flow</h2>

          <div className={styles.flow}>
            <span>Team Member</span>
            <span>Vendor</span>
            <span>Acquirer</span>
            <span>Network</span>
            <span>Issuer</span>
            <span>Project Ledger</span>
          </div>

          <ol>
            <li>Expense incurred for project</li>
            <li>Transaction routed to issuer</li>
            <li>Project budget & rule validation</li>
            <li>Transaction approved or declined</li>
            <li>Cost posted to project ledger</li>
            <li>Budget updated in real time</li>
          </ol>
        </div>

        {/* BUDGET */}
        <div className={styles.block}>
          <h2>Budget & Phase Controls</h2>
          <ul>
            <li>Total project budget enforcement</li>
            <li>Phase-wise spending caps</li>
            <li>Milestone-based card activation</li>
            <li>Auto-blocking on budget exhaustion</li>
          </ul>
        </div>

        {/* VENDOR */}
        <div className={styles.block}>
          <h2>Vendor & Category Restrictions</h2>
          <ul>
            <li>Approved vendor lists</li>
            <li>MCC & spend-category control</li>
            <li>Material vs service separation</li>
            <li>Location-based vendor rules</li>
          </ul>
        </div>

        {/* VISIBILITY */}
        <div className={styles.block}>
          <h2>Real-Time Visibility & Reporting</h2>
          <ul>
            <li>Live project spend dashboard</li>
            <li>Forecast vs actual comparison</li>
            <li>Cost overrun alerts</li>
            <li>Phase completion analytics</li>
          </ul>
        </div>

        {/* FRAUD */}
        <div className={styles.block}>
          <h2>Fraud Prevention & Governance</h2>
          <ul>
            <li>Out-of-project expense detection</li>
            <li>Unauthorized vendor blocking</li>
            <li>Duplicate expense identification</li>
            <li>Audit-ready logs</li>
          </ul>
        </div>

        {/* DECLINES */}
        <div className={styles.block}>
          <h2>Common Decline Scenarios</h2>
          <ul>
            <li>Project budget exceeded</li>
            <li>Phase not active</li>
            <li>Unauthorized vendor or category</li>
            <li>Expired project card</li>
          </ul>
        </div>

        {/* SETTLEMENT */}
        <div className={styles.block}>
          <h2>Clearing & Settlement</h2>
          <p>
            Project card transactions are settled through standard card network
            cycles. Costs are posted to project accounts, enabling accurate
            billing, margin analysis, and client invoicing.
          </p>
        </div>

        {/* ADVANTAGES */}
        <div className={styles.block}>
          <h2>Advantages</h2>
          <ul>
            <li>Strong project budget discipline</li>
            <li>Clear cost attribution</li>
            <li>Reduced manual tracking</li>
            <li>Improved project profitability</li>
          </ul>
        </div>

        {/* LIMITATIONS */}
        <div className={styles.block}>
          <h2>Limitations & Risks</h2>
          <ul>
            <li>Requires accurate project setup</li>
            <li>Change management complexity</li>
            <li>Dependency on ERP integration</li>
          </ul>
        </div>

        {/* SUMMARY */}
        <div className={styles.block}>
          <h2>Summary</h2>
          <p>
            Project Cards enable enterprises to manage project finances with
            precision and transparency. By tying every expense directly to a
            project budget and lifecycle, they help organizations deliver
            projects on time, within budget, and with full financial control.
          </p>
        </div>

      </section>
    </main>
  );
}
