import styles from "./purchasingCard.module.css";

export default function PurchasingCardPage() {
  return (
    <main className={styles.wrapper}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.card}>
          <div className={styles.topRow}>
            <span className={styles.bank}>CARDVERSE ISSUER</span>
            <span className={styles.issuer}>PROCUREMENT</span>
          </div>

          <div className={styles.number}>
            5561&nbsp;42XX&nbsp;XXXX&nbsp;8830
          </div>

          <div className={styles.footer}>
            <div>
              <span>Authorized Buyer</span>
              <strong>ROHAN SAKHARE</strong>
            </div>
            <div className={styles.type}>P-CARD</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        <div className={styles.block}>
          <h2>What is a Purchasing Card (P-Card)?</h2>
          <p>
            A Purchasing Card (P-Card) is a corporate payment card used primarily
            for low-value, high-frequency procurement transactions such as office
            supplies, IT accessories, maintenance items, and approved vendor
            purchases.
          </p>
          <p>
            P-Cards are designed to replace traditional purchase orders (POs) and
            invoice-based procurement for routine spending, reducing operational
            overhead and procurement cycle time.
          </p>
        </div>

        <div className={styles.block}>
          <h2>P-Card Positioning</h2>
          <ul>
            <li><strong>Card Type:</strong> Corporate & Business Card</li>
            <li><strong>Primary Use:</strong> Procurement & vendor payments</li>
            <li><strong>Funding Model:</strong> Company-funded / credit-based</li>
            <li><strong>Risk Model:</strong> Policy & vendor controlled</li>
            <li><strong>Key Feature:</strong> PO-free purchasing</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Entities in P-Card Ecosystem</h2>
          <ul>
            <li><strong>Company:</strong> Policy owner & payer</li>
            <li><strong>Employee (Buyer):</strong> Authorized purchaser</li>
            <li><strong>Vendor / Supplier:</strong> Approved merchant</li>
            <li><strong>Issuing Bank:</strong> Card issuer & credit provider</li>
            <li><strong>Program Manager:</strong> Policy & rule engine</li>
            <li><strong>ERP / Procurement System:</strong> Accounting & controls</li>
            <li><strong>Audit & Compliance:</strong> Oversight & reporting</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Types of Purchasing Cards</h2>
          <ul>
            <li>Employee-Specific P-Card</li>
            <li>Department-Level P-Card</li>
            <li>Vendor-Locked P-Card</li>
            <li>Virtual P-Card</li>
            <li>Project-Specific P-Card</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>P-Card Issuance Flow</h2>
          <ol>
            <li>Company onboarding with issuer</li>
            <li>Procurement policies defined</li>
            <li>Authorized buyers enrolled</li>
            <li>Approved vendors & MCCs configured</li>
            <li>P-Card issued (physical or virtual)</li>
          </ol>
        </div>

        <div className={styles.block}>
          <h2>Procurement Transaction Flow</h2>

          <div className={styles.flow}>
            <span>Buyer</span>
            <span>Vendor</span>
            <span>Acquirer</span>
            <span>Network</span>
            <span>Issuer</span>
            <span>Policy Engine</span>
          </div>

          <ol>
            <li>Buyer places order with approved vendor</li>
            <li>Vendor processes P-Card payment</li>
            <li>Issuer validates policy & vendor rules</li>
            <li>Transaction approved or declined</li>
            <li>Expense auto-posted to ERP</li>
          </ol>
        </div>

        <div className={styles.block}>
          <h2>Policy Controls & Restrictions</h2>
          <ul>
            <li>Vendor whitelisting / blacklisting</li>
            <li>MCC-based category control</li>
            <li>Per-transaction & monthly limits</li>
            <li>Geographic usage restrictions</li>
            <li>Time-based purchasing windows</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>PO Matching & Accounting Integration</h2>
          <ul>
            <li>PO-less purchases for small spends</li>
            <li>Optional PO reference capture</li>
            <li>Automatic GL code assignment</li>
            <li>Three-way matching (optional)</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Fraud Prevention & Compliance</h2>
          <ul>
            <li>Duplicate purchase detection</li>
            <li>Out-of-policy alerts</li>
            <li>Vendor misuse prevention</li>
            <li>Audit-ready transaction logs</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Common Decline Scenarios</h2>
          <ul>
            <li>Unauthorized vendor</li>
            <li>MCC not permitted</li>
            <li>Limit exceeded</li>
            <li>Inactive or expired P-Card</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Clearing & Settlement</h2>
          <p>
            P-Card transactions are settled through standard card network cycles
            with consolidated statements provided to the organization for
            procurement accounting and reconciliation.
          </p>
        </div>

        <div className={styles.block}>
          <h2>Advantages</h2>
          <ul>
            <li>Reduced procurement cycle time</li>
            <li>Lower administrative overhead</li>
            <li>Improved spend visibility</li>
            <li>Better vendor management</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Limitations & Risks</h2>
          <ul>
            <li>Requires strict policy governance</li>
            <li>Potential misuse without monitoring</li>
            <li>Limited suitability for high-value purchases</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Summary</h2>
          <p>
            Purchasing Cards streamline corporate procurement by replacing
            traditional PO and invoice processes for routine spending. With
            strong policy enforcement, ERP integration, and audit controls,
            P-Cards deliver speed, transparency, and cost efficiency to
            enterprise purchasing operations.
          </p>
        </div>

      </section>
    </main>
  );
}
