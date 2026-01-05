import Link from "next/link";
import styles from "./page.module.css";

const sections = [
  {
    title: "Bank Cards",
    subtitle: "Core cards linked directly to bank accounts",
    cards: [
      { name: "Debit Card", link: "/cards/debit" },
      { name: "Credit Card", link: "/cards/credit" },
      { name: "Charge Card", link: "/cards/charge" },
      { name: "ATM Card", link: "/cards/atm" },
    ],
  },
  {
    title: "Prepaid Cards",
    subtitle: "Stored-value and controlled spending cards",
    cards: [
      { name: "Semi-Closed Prepaid", link: "/cards/semi-closed-prepaid" },
      { name: "Open-Loop Prepaid", link: "/cards/open-loop-prepaid" },
      { name: "Reloadable Prepaid", link: "/cards/reloadable-prepaid" },
      { name: "Non-Reloadable Prepaid", link: "/cards/non-reloadable-prepaid" },
      { name: "Gift Card", link: "/cards/gift-card" },
      { name: "Payroll Card", link: "/cards/payroll-card" },
    ],
  },
  {
    title: "Corporate & Business",
    subtitle: "Enterprise, travel and expense management cards",
    cards: [
      { name: "Corporate Card", link: "#" },
      { name: "Fleet Card", link: "#" },
      { name: "Travel Card", link: "#" },
      { name: "Purchasing Card (P-Card)", link: "#" },
    ],
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>CardVerse</h1>
        <p className={styles.tagline}>
          Complete guide to payment cards and transaction flows
        </p>

        <p className={styles.disclaimer}>
          Disclaimer: <strong>CardVerse</strong> is an educational platform.
          This website does not issue cards and is not affiliated with any bank,
          card network, or financial institution. All card types and transaction
          flows are explained purely for learning and knowledge purposes.
        </p>

        <span className={styles.credit}>
          Developed by Rohan Sakhare
        </span>
      </section>

      {/* CONTENT */}
      {sections.map((section) => (
        <section key={section.title} className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>{section.title}</h2>
            <p>{section.subtitle}</p>
          </div>

          <div className={styles.row}>
            {section.cards.map((card) => (
              <Link key={card.name} href={card.link} className={styles.card}>
                <div className={styles.cardTitle}>{card.name}</div>
                <div className={styles.cardLink}>View details →</div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
