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
      { name: "Travel Card", link: "/cards/travel-prepaid" },
      { name: "Forex Card", link: "/cards/forex-prepaid" },
      { name: "Meal Card", link: "/cards/meal-card" }
    ],
  },
  {
  title: "Usage-Based Cards",
  subtitle: "Cards designed for specific usage, channels and scenarios",
  cards: [
    { name: "Virtual Card", link: "/cards/virtual-card" },
    { name: "E-Commerce Card", link: "/cards/ecommerce-card" },
    { name: "Contactless Card", link: "/cards/contactless-card" },
    { name: "Subscription Card", link: "/cards/subscription-card" },
    { name: "Transit Card", link: "/cards/transit-card" },
    { name: "Toll Card", link: "/cards/toll-card" },
    { name: "Fuel Card", link: "/cards/fuel-card" },
    { name: "Parking Card", link: "/cards/parking-card" },
  ],
},
  {
  title: "Corporate & Business Cards",
  subtitle: "Enterprise, travel, fleet and expense management cards",
  cards: [
    { name: "Corporate Card", link: "/cards/corporate-card" },
    { name: "Fleet Card", link: "/cards/fleet-card" },
    { name: "Travel Corporate Card", link: "/cards/travel-corporate-card" },
    { name: "Purchasing Card (P-Card)", link: "/cards/purchasing-card" },
    { name: "Expense Management Card", link: "/cards/expense-card" },
    { name: "Vendor Payment Card", link: "/cards/vendor-card" },
    { name: "Project-Based Card", link: "/cards/project-card" },
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
          Disclaimer: <strong>CardVerse</strong> is a conceptual product name for knowledge purposes only.
        </p>

        <span className={styles.credit}>
          Developed by Rohan Avinash Sakhare
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
