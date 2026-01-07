import styles from "./vendorCard.module.css";

export default function VendorCardPage() {
  return (
    <main className={styles.wrapper}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.card}>
          <div className={styles.topRow}>
            <span className={styles.bank}>CARDVERSE ISSUER</span>
            <span className={styles.issuer}>VENDOR PAY</span>
          </div>

          <div className={styles.number}>
            4312&nbsp;88XX&nbsp;XXXX&nbsp;9041
          </div>

          <div className={styles.footer}>
            <div>
              <span>Authorized Vendor</span>
              <strong>ROHAN SUPPLIERS</strong>
            </div>
            <div className={styles.type}>VENDOR</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        {/* INTRO */}
        <div className={styles.block}>
          <h2>What is a Vendor Payment Card?</h2>
          <p>
            A Vendor Payment Card (Vendor Card) is a specialized corporate card
            issued for making payments to specific, pre-approved suppliers or
            service providers. It is commonly used by finance and procurement
            teams to simplify vendor payments while maintaining strong control.
          </p>
          <p>
            Vendor cards reduce reliance on bank transfers, cheques, and manual
            invoice processing by enabling controlled, card-based payments.
          </p>
        </div>

        {/* POSITIONING */}
        <div className={styles.block}>
          <h2>Vendor Card Positioning</h2>
          <ul>
            <li><strong>Card Type:</strong> Corporate & Business Card</li>
            <li><strong>Primary Use:</strong> Supplier & vendor payments</li>
            <li><strong>Funding Model:</strong> Company-funded / credit-based</li>
            <li><strong>Risk Model:</strong> Vendor-locked & policy-driven</li>
            <li><strong>Key Feature:</strong> Controlled accounts payable</li>
          </ul>
        </div>

        {/* ECOSYSTEM */}
        <div className={styles.block}>
          <h2>Entities in Vendor Card Ecosystem</h2>
          <ul>
            <li><strong>Company:</strong> Payer & policy owner</li>
            <li><strong>Vendor / Supplier:</strong> Approved payee</li>
            <li><strong>Finance / AP Team:</strong> Card administrator</li>
            <li><strong>Issuing Bank:</strong> Card issuer & credit provider</li>
            <li><strong>Program Manager:</strong> Rules & controls engine</li>
            <li><strong>ERP / AP System:</strong> Accounting & reconciliation</li>
          </ul>
        </div>

        {/* TYPES */}
        <div className={styles.block}>
          <h2>Types of Vendor Cards</h2>
          <ul>
            <li>Single-Vendor Locked Card</li>
            <li>Multi-Vendor Restricted Card</li>
            <li>Virtual Vendor Card</li>
            <li>Project-Specific Vendor Card</li>
            <li>Recurring Vendor Payment Card</li>
          </ul>
        </div>

        {/* ISSUANCE */}
        <div className={styles.block}>
          <h2>Vendor Card Issuance Flow</h2>
          <ol>
            <li>Vendor onboarding & approval</li>
            <li>Card configuration & vendor locking</li>
            <li>Spend limits & validity period set</li>
            <li>Virtual or physical card issued</li>
            <li>ERP mapping & activation</li>
          </ol>
        </div>

        {/* MAIN FLOW */}
        <div className={styles.block}>
          <h2>Vendor Payment Transaction Flow</h2>

          <div className={styles.flow}>
            <span>Finance Team</span>
            <span>Vendor</span>
            <span>Acquirer</span>
            <span>Network</span>
            <span>Issuer</span>
            <span>AP System</span>
          </div>

          <ol>
            <li>Vendor submits invoice</li>
            <li>Finance team approves payment</li>
            <li>Vendor card payment initiated</li>
            <li>Issuer validates vendor & limits</li>
            <li>Transaction approved or declined</li>
            <li>Payment posted to ERP</li>
          </ol>
        </div>

        {/* CONTROLS */}
        <div className={styles.block}>
          <h2>Controls & Restrictions</h2>
          <ul>
            <li>Vendor name & MCC locking</li>
            <li>Per-transaction & monthly limits</li>
            <li>Card expiry after payment</li>
            <li>Country & currency restrictions</li>
            <li>Time-based usage windows</li>
          </ul>
        </div>

        {/* INVOICE */}
        <div className={styles.block}>
          <h2>Invoice Matching & AP Automation</h2>
          <ul>
            <li>Invoice-to-payment matching</li>
            <li>Automatic GL coding</li>
            <li>PO & contract reference capture</li>
            <li>Reduced manual reconciliation</li>
          </ul>
        </div>

        {/* FRAUD */}
        <div className={styles.block}>
          <h2>Fraud Prevention & Compliance</h2>
          <ul>
            <li>Unauthorized vendor blocking</li>
            <li>Duplicate invoice detection</li>
            <li>Out-of-policy alerts</li>
            <li>Audit-ready transaction logs</li>
          </ul>
        </div>

        {/* DECLINES */}
        <div className={styles.block}>
          <h2>Common Decline Scenarios</h2>
          <ul>
            <li>Vendor mismatch</li>
            <li>Limit exceeded</li>
            <li>Expired or disabled card</li>
            <li>Unauthorized merchant category</li>
          </ul>
        </div>

        {/* SETTLEMENT */}
        <div className={styles.block}>
          <h2>Clearing & Settlement</h2>
          <p>
            Vendor card payments are settled via standard card network cycles.
            Consolidated vendor payment statements simplify AP reconciliation and
            reporting.
          </p>
        </div>

        {/* ADVANTAGES */}
        <div className={styles.block}>
          <h2>Advantages</h2>
          <ul>
            <li>Faster vendor payments</li>
            <li>Reduced bank transfer overhead</li>
            <li>Improved cash flow visibility</li>
            <li>Strong vendor-level controls</li>
          </ul>
        </div>

        {/* LIMITATIONS */}
        <div className={styles.block}>
          <h2>Limitations & Risks</h2>
          <ul>
            <li>Vendor acceptance dependency</li>
            <li>Requires strict configuration</li>
            <li>Limited for high-value contracts</li>
          </ul>
        </div>

        {/* SUMMARY */}
        <div className={styles.block}>
          <h2>Summary</h2>
          <p>
            Vendor Payment Cards modernize accounts payable by enabling secure,
            controlled, and automated supplier payments. With vendor locking,
            ERP integration, and real-time controls, they significantly reduce
            AP complexity while improving efficiency and compliance.
          </p>
        </div>

      </section>
    </main>
  );
}
