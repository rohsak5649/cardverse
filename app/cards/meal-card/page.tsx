import styles from "./mealCard.module.css";

export default function MealCardPage() {
  return (
    <main className={styles.wrapper}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.card}>
          <div className={styles.topRow}>
            <span className={styles.bank}>CARDVERSE ISSUER</span>
            <span className={styles.issuer}>VISA / RuPay</span>
          </div>

          <div className={styles.number}>
            6080&nbsp;45XX&nbsp;XXXX&nbsp;3312
          </div>

          <div className={styles.footer}>
            <div>
              <span>Cardholder</span>
              <strong>ROHAN SAKHARE</strong>
            </div>
            <div className={styles.type}>MEAL CARD</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        <div className={styles.block}>
          <h2>What is a Meal Card?</h2>
          <p>
            A Meal Card is a prepaid payment instrument provided by employers to
            employees as part of salary benefits. It is primarily used for food
            and meal-related expenses such as restaurants, cafeterias, and food
            delivery platforms.
          </p>
          <p>
            Meal cards are usually governed by tax and payroll regulations and
            are designed to restrict usage only to eligible merchant categories.
          </p>
        </div>

        <div className={styles.block}>
          <h2>Meal Card Positioning</h2>
          <ul>
            <li><strong>Card Type:</strong> Semi-Closed Prepaid Card</li>
            <li><strong>Funding Source:</strong> Employer-funded allowance</li>
            <li><strong>Usage Scope:</strong> Food & dining merchants only</li>
            <li><strong>Risk Model:</strong> Very Low (Prepaid + Restricted)</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Entities Involved in Meal Card Ecosystem</h2>
          <ul>
            <li><strong>Employee (Cardholder):</strong> End user</li>
            <li><strong>Employer:</strong> Funds meal allowance</li>
            <li><strong>Issuing Bank:</strong> Licensed prepaid issuer</li>
            <li><strong>Program Manager:</strong> Card & rule management</li>
            <li><strong>Merchant:</strong> Food & beverage outlets</li>
            <li><strong>MCC Engine:</strong> Merchant category filtering</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Types of Meal Cards</h2>
          <ul>
            <li>Physical Meal Card</li>
            <li>Virtual Meal Card</li>
            <li>Mobile Wallet–Linked Meal Card</li>
            <li>Cafeteria-only Corporate Meal Card</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Meal Card Issuance Flow</h2>
          <ol>
            <li>Employer partners with meal card provider</li>
            <li>Employee enrollment & KYC (light KYC)</li>
            <li>Meal wallet created for employee</li>
            <li>Monthly allowance credited</li>
            <li>Card issued and activated</li>
          </ol>
        </div>

        <div className={styles.block}>
          <h2>POS Transaction Flow (Restricted Use)</h2>

          <div className={styles.flow}>
            <span>Employee</span>
            <span>Restaurant POS</span>
            <span>Acquirer</span>
            <span>Network</span>
            <span>Issuer</span>
            <span>MCC Filter</span>
          </div>

          <ol>
            <li>Employee pays at food merchant</li>
            <li>POS sends transaction to acquirer</li>
            <li>Network routes to issuer</li>
            <li>MCC validation performed</li>
            <li>Meal wallet balance checked</li>
            <li>Amount debited from meal wallet</li>
            <li>Approval sent to merchant</li>
          </ol>
        </div>

        <div className={styles.block}>
          <h2>Merchant Category Code (MCC) Control</h2>
          <ul>
            <li>Only food & beverage MCCs allowed</li>
            <li>Non-eligible merchants automatically declined</li>
            <li>Ensures regulatory and tax compliance</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Reload & Expiry Model</h2>
          <ul>
            <li>Employer credits monthly allowance</li>
            <li>Unused balance may carry forward</li>
            <li>Expiry rules defined by employer/provider</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Security & Controls</h2>
          <ul>
            <li>PIN-based transactions</li>
            <li>Merchant restriction via MCC</li>
            <li>Daily spend limits</li>
            <li>Instant card block on loss</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Clearing & Settlement</h2>
          <p>
            Meal card transactions are cleared via card networks and settled
            between issuer and acquirer. Wallet balance updates immediately,
            while employer funding is handled separately.
          </p>
        </div>

        <div className={styles.block}>
          <h2>Advantages</h2>
          <ul>
            <li>Tax-efficient employee benefit</li>
            <li>Controlled spending on meals</li>
            <li>No misuse at non-food merchants</li>
            <li>Convenient alternative to cash vouchers</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Limitations</h2>
          <ul>
            <li>Restricted usage</li>
            <li>Not usable for groceries in some regions</li>
            <li>Dependent on merchant acceptance</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h2>Summary</h2>
          <p>
            Meal Cards are structured prepaid instruments that bridge payroll,
            taxation, and digital payments, offering employers control and
            employees convenience for daily food expenses.
          </p>
        </div>

      </section>
    </main>
  );
}
