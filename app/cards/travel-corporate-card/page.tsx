import styles from "./travelCorporateCard.module.css";

export default function TravelCorporateCardPage() {
  return (
    <main className={styles.wrapper}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.card}>
          <div className={styles.topRow}>
            <span className={styles.bank}>CARDVERSE ISSUER</span>
            <span className={styles.issuer}>TRAVEL & EXPENSE</span>
          </div>

          <div className={styles.number}>
            4021&nbsp;66XX&nbsp;XXXX&nbsp;1189
          </div>

          <div className={styles.footer}>
            <div>
              <span>Employee</span>
              <strong>ROHAN SAKHARE</strong>
            </div>
            <div className={styles.type}>TRAVEL</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        <div className={styles.block}>
          <h2>What is a Travel Corporate Card?</h2>
          <p>
            A Travel Corporate Card is a specialized corporate payment card
            issued to employees for managing business travel expenses such as
            flight tickets, hotel stays, cab bookings, meals, and incidental
            expenses during official travel.
          </p>
          <p>
            These cards are tightly integrated with corporate travel policies,
            approval workflows, and expense management systems.
          </p>
        </div>

        <div className={styles.block}>
          <h2>Travel Corporate Card Positioning</h2>
          <ul>
            <li><strong>Card Type:</strong> Corporate & Business Card</li>
            <li><strong>Primary Use:</strong> Business travel expenses</li>
            <li><strong>Funding Model:</strong> Company-funded / credit-based</li>
            <li><strong>Risk Model:</strong> Policy & itinerary driven</li>
            <li><strong>Key Feature:</strong> Travel expense governance</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Entities in Travel Card Ecosystem</h2>
          <ul>
            <li><strong>Company:</strong> Policy owner</li>
            <li><strong>Employee:</strong> Traveler</li>
            <li><strong>Travel Desk / TMC:</strong> Booking & approvals</li>
            <li><strong>Issuing Bank:</strong> Card & credit provider</li>
            <li><strong>Program Manager:</strong> Expense & policy engine</li>
            <li><strong>ERP / Finance System:</strong> Accounting & audits</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Types of Travel Corporate Cards</h2>
          <ul>
            <li>Domestic Travel Card</li>
            <li>International Travel Card</li>
            <li>Virtual Travel Card</li>
            <li>Executive Travel Card</li>
            <li>Project-Based Travel Card</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Travel Card Issuance Flow</h2>
          <ol>
            <li>Company signs agreement with issuer</li>
            <li>Employee enrollment & role mapping</li>
            <li>Travel policy & spend limits configured</li>
            <li>Card issued (physical / virtual)</li>
            <li>International & forex permissions enabled</li>
          </ol>
        </div>

        <div className={styles.block}>
          <h2>Travel Transaction Flow</h2>

          <div className={styles.flow}>
            <span>Employee</span>
            <span>Airline/Hotel</span>
            <span>Acquirer</span>
            <span>Network</span>
            <span>Issuer</span>
            <span>Policy Engine</span>
          </div>

          <ol>
            <li>Employee books travel service</li>
            <li>Transaction routed to issuer</li>
            <li>Policy & category checks applied</li>
            <li>Forex & international checks (if applicable)</li>
            <li>Transaction approved or declined</li>
            <li>Expense logged automatically</li>
          </ol>
        </div>

        <div className={styles.block}>
          <h2>Travel Policies & Controls</h2>
          <ul>
            <li>Airfare class restrictions</li>
            <li>Hotel category limits</li>
            <li>Per-diem meal caps</li>
            <li>Country & region restrictions</li>
            <li>Advance booking requirements</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Forex & International Usage</h2>
          <ul>
            <li>Multi-currency support</li>
            <li>Dynamic currency conversion</li>
            <li>Cross-border risk controls</li>
            <li>Real-time FX reporting</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Expense Reconciliation & Audits</h2>
          <ul>
            <li>Automatic receipt capture</li>
            <li>Trip-wise expense grouping</li>
            <li>Manager & finance approval</li>
            <li>Audit trail maintenance</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Common Decline Scenarios</h2>
          <ul>
            <li>Policy violation</li>
            <li>Exceeded travel budget</li>
            <li>Unauthorized merchant category</li>
            <li>International usage blocked</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Clearing & Settlement</h2>
          <p>
            Travel card transactions are settled through standard card network
            cycles with consolidated billing provided to the company for easier
            accounting.
          </p>
        </div>

        <div className={styles.block}>
          <h2>Advantages</h2>
          <ul>
            <li>End-to-end travel expense visibility</li>
            <li>Reduced reimbursement workload</li>
            <li>Policy-compliant travel spending</li>
            <li>Better vendor & airline negotiations</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Limitations & Risks</h2>
          <ul>
            <li>Complex policy setup</li>
            <li>Dependency on accurate booking data</li>
            <li>Higher exposure during international travel</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Summary</h2>
          <p>
            Travel Corporate Cards are essential tools for organizations with
            frequent employee travel. By combining spend controls, travel
            policies, and automated reconciliation, they ensure cost-efficient,
            compliant, and transparent business travel management.
          </p>
        </div>

      </section>
    </main>
  );
}
