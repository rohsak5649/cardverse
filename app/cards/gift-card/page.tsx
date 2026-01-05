import styles from "./gift.module.css";

export default function GiftCardPage() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.card}>
          <div className={styles.topRow}>
            <span className={styles.bank}>CARDVERSE SYSTEM</span>
            <span className={styles.issuer}>CARDVERSE ISSUER</span>
          </div>

          <div className={styles.number}>
            4444&nbsp;7777&nbsp;9999&nbsp;1111
          </div>

          <div className={styles.footer}>
            <div>
              <span>Gift For</span>
              <strong>SPECIAL SOMEONE</strong>
            </div>
            <div className={styles.type}>GIFT CARD</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className={styles.content}>

        {/* INTRO */}
        <div className={styles.block}>
          <h2>What is a Gift Card?</h2>
          <p>
            A Gift Card is a <strong>prepaid, non-cash payment instrument</strong>
            loaded with a fixed value and intended to be given as a gift to
            another person. The recipient can use the card to make purchases
            within the allowed acceptance scope.
          </p>
          <p>
            Gift cards are usually <strong>non-reloadable</strong> and can be
            either <strong>closed-loop</strong> (single merchant) or
            <strong>semi-closed / open-loop</strong> depending on the program.
          </p>
        </div>

        {/* WHY IT EXISTS */}
        <div className={styles.block}>
          <h2>Why Gift Cards Exist</h2>
          <ul>
            <li>Easy and flexible gifting alternative to cash</li>
            <li>No need to choose a specific product</li>
            <li>High brand engagement and loyalty</li>
            <li>Simple distribution at scale</li>
            <li>Popular during festivals and campaigns</li>
          </ul>
        </div>

        {/* TYPES */}
        <div className={styles.block}>
          <h2>Types of Gift Cards</h2>
          <ul>
            <li><strong>Closed-Loop Gift Card:</strong> Single brand or merchant</li>
            <li><strong>Semi-Closed Gift Card:</strong> Partner merchant network</li>
            <li><strong>Open-Loop Gift Card:</strong> Wide acceptance (POS/Online)</li>
            <li><strong>Physical Gift Card:</strong> Plastic card</li>
            <li><strong>Digital / E-Gift Card:</strong> App, SMS, or email based</li>
          </ul>
        </div>

        {/* POSITIONING */}
        <div className={styles.block}>
          <h2>Gift Card vs Other Prepaid Cards</h2>
          <ul>
            <li>Gift cards are typically <strong>non-reloadable</strong></li>
            <li>Used by a recipient different from purchaser</li>
            <li>No personal banking relationship required</li>
            <li>Limited lifecycle and balance</li>
          </ul>
        </div>

        {/* ENTITIES */}
        <div className={styles.block}>
          <h2>Entities Involved in Gift Card Transactions</h2>
          <ul>
            <li><strong>Purchaser:</strong> Buys the gift card</li>
            <li><strong>Recipient:</strong> Uses the gift card</li>
            <li><strong>Merchant / POS / Online Store:</strong> Acceptance point</li>
            <li><strong>Gift Card Processor:</strong> Manages gift program</li>
            <li><strong>Prepaid Ledger:</strong> Stores gift card balance</li>
            <li><strong>Settlement System:</strong> Merchant reconciliation</li>
          </ul>
        </div>

        {/* ISSUANCE */}
        <div className={styles.block}>
          <h2>Gift Card Issuance Flow</h2>
          <ol>
            <li>Purchaser selects gift card value</li>
            <li>Payment made via cash, card, or online</li>
            <li>Gift card record created in system</li>
            <li>Initial balance credited to ledger</li>
            <li>Card delivered physically or digitally</li>
          </ol>
        </div>

        {/* BALANCE */}
        <div className={styles.block}>
          <h2>Gift Card Balance Model</h2>
          <p>
            Gift cards operate on a <strong>fixed-value prepaid ledger</strong>.
            The balance can only decrease with usage and cannot be increased.
          </p>
          <ul>
            <li>One-time funded balance</li>
            <li>No reload allowed</li>
            <li>Partial spends supported</li>
            <li>Balance tracked per transaction</li>
          </ul>
        </div>

        {/* POS FLOW */}
        <div className={styles.block}>
          <h2>Gift Card POS Transaction Flow</h2>

          <div className={styles.flow}>
            <span>Recipient</span>
            <span>POS</span>
            <span>Gift Processor</span>
            <span>Prepaid Ledger</span>
          </div>

          <ol>
            <li>Recipient presents gift card</li>
            <li>POS sends request to gift processor</li>
            <li>Processor validates card and balance</li>
            <li>Amount deducted from ledger</li>
            <li>Approval sent to POS</li>
          </ol>
        </div>

        {/* ONLINE FLOW */}
        <div className={styles.block}>
          <h2>Online / E-Commerce Transaction Flow</h2>
          <ol>
            <li>Recipient enters gift card number or code</li>
            <li>System validates card and remaining balance</li>
            <li>Order amount deducted</li>
            <li>Confirmation sent to user</li>
          </ol>
        </div>

        {/* PARTIAL SPEND */}
        <div className={styles.block}>
          <h2>Partial Spend & Balance Carry Forward</h2>
          <p>
            Gift cards support partial spending. If the transaction amount is
            less than the available balance:
          </p>
          <ul>
            <li>Remaining balance stays active</li>
            <li>Can be used for future purchases</li>
            <li>Ledger updated after every spend</li>
          </ul>
        </div>

        {/* DECLINES */}
        <div className={styles.block}>
          <h2>Common Decline Scenarios</h2>
          <ul>
            <li>Insufficient balance</li>
            <li>Gift card expired</li>
            <li>Invalid or already used card</li>
            <li>Merchant restriction violation</li>
          </ul>
        </div>

        {/* EXPIRY */}
        <div className={styles.block}>
          <h2>Expiry & Regulatory Considerations</h2>
          <p>
            Gift cards usually have an expiry date defined by issuer policy or
            local regulations. After expiry:
          </p>
          <ul>
            <li>Remaining balance may expire</li>
            <li>Refunds may or may not be allowed</li>
            <li>Issuer may reclaim unused funds</li>
          </ul>
        </div>

        {/* SETTLEMENT */}
        <div className={styles.block}>
          <h2>Clearing & Settlement</h2>
          <p>
            Settlement in gift card systems is typically internal or between the
            issuer and participating merchants.
          </p>
          <ul>
            <li>No interbank settlement required</li>
            <li>Simple reconciliation</li>
            <li>Low operational cost</li>
          </ul>
        </div>

        {/* ADVANTAGES */}
        <div className={styles.block}>
          <h2>Advantages</h2>
          <ul>
            <li>Extremely easy to distribute</li>
            <li>High customer satisfaction</li>
            <li>Low fraud risk</li>
            <li>Great marketing tool</li>
          </ul>
        </div>

        {/* LIMITATIONS */}
        <div className={styles.block}>
          <h2>Limitations</h2>
          <ul>
            <li>Limited acceptance scope</li>
            <li>No reload or cash withdrawal</li>
            <li>Expiry-related balance loss</li>
          </ul>
        </div>

        {/* SUMMARY */}
        <div className={styles.block}>
          <h2>Summary</h2>
          <p>
            Gift Cards are simple, powerful, and widely used prepaid instruments
            that enable controlled value gifting while driving customer
            engagement and merchant loyalty.
          </p>
        </div>

      </section>
    </main>
  );
}
