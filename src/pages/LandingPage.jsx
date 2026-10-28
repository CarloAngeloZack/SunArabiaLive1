import { useEffect, useRef, useState } from "react";
import jamesPhoto from "../assets/a1.jpg";
import janPhoto from "../assets/a2.jpg";
import charliePhoto from "../assets/a3.jpg";
import mattPhoto from "../assets/a4.jpg";
import stevePhoto from "../assets/a5.jpg";

const testimonials = [
  {
    quote:
      "We run an investment and seed-funding company in California. The team from the Philippines has assisted us, and I'm extremely happy with their work and quickness.",
    name: "James T.",
    role: "Venture Capitalist",
    market: "UAE",
    img: jamesPhoto,
  },
  {
    quote:
      "Sun Arabia has helped us with our targets in MENA. I would recommend their services with full confidence.",
    name: "G. Jan. W.",
    role: "Pharmaceutical Director",
    market: "UK",
    img: janPhoto,
  },
  {
    quote:
      "Working with Carlo and the team has been great. Everything on time, completed to a high standard. Good communication and knowledge to meet all business needs.",
    name: "Charlie M",
    role: "Lotu Education",
    market: "USA",
    img: charliePhoto,
  },
  {
    quote:
      "I enjoyed working with them on one of my start ups. It was very fun.",
    name: "Matt. K.M",
    role: "UK and UAE Real Estate Developer",
    market: "UAE / USA",
    img: mattPhoto,
  },
  {
    quote:
      "Sun Arabia brought clarity, commercial focus, and the kind of execution that turns strategy into measurable growth. The process was sharp, fast, and highly effective.",
    name: "Steve M.",
    role: "CEO of Xcite Entertainment",
    market: "USA",
    img: stevePhoto,
  },
];
const phases = [
  {
    title: "Diagnostic",
    desc: "Identifying revenue leaks in your current funnel — from traffic sources to conversion points — with forensic precision.",
  },
  {
    title: "Architecture",
    desc: "Building a high-conversion digital flagship. Every page, every touchpoint, every message engineered to close.",
  },
  {
    title: "Deployment",
    desc: "Omnichannel promotion across global markets — paid, organic, earned, and owned — in perfect strategic alignment.",
  },
  {
    title: "Optimization",
    desc: "Continuous data-looping to increase Customer Lifetime Loyalty. We compound your growth every single month.",
  },
];
const differences = [
  ["Long-Term Contract Traps", "Performance-Based Retention"],
  ["Focus on “Impressions”", "Focus on Pipeline Velocity"],
  ["Generalist Staff", "Senior-Level Revenue Architects"],
  ["Opaque Reporting", "Real-Time Data Transparency"],
];
const markets = [
  {
    region: "USA / UK",
    title: "The Western Perspective",
    desc: "We leverage high-velocity demand generation and aggressive scale-up tactics — turning market noise into qualified pipeline with relentless precision.",
  },
  {
    region: "UAE / MENA",
    title: "The Eastern Ambition",
    desc: "We tap into the luxury-tier relationship building and rapid infrastructure growth of the MENA region — where trust is currency and positioning is everything.",
  },
  {
    region: "Sun Arabia Bridge",
    title: "The Synthesis",
    desc: "We act as your strategic bridge, allowing your brand to maintain a unified voice while executing localized dominance in the world's three most influential markets.",
  },
];
const fields = [
  {
    key: "name",
    label: "Full name",
    type: "text",
    autoComplete: "name",
    placeholder: "Your full name",
    required: true,
  },
  {
    key: "email",
    label: "Email address",
    type: "email",
    autoComplete: "email",
    placeholder: "you@company.com",
    required: true,
  },
  {
    key: "company",
    label: "Company / brand",
    type: "text",
    autoComplete: "organization",
    placeholder: "Your company name",
  },
];
function Arrow({ diagonal = false }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} />
    </svg>
  );
}
function SunMark() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="10" />
      <circle
        cx="24"
        cy="24"
        r="18"
        strokeDasharray="1 6"
        strokeLinecap="round"
      />
      <path d="M24 0v8m0 32v8M0 24h8m32 0h8M7 7l6 6m22 22 6 6M7 41l6-6m22-22 6-6" />
    </svg>
  );
}
function Brand() {
  return (
    <a className="brand" href="#hero" aria-label="Sun Arabia home">
      <SunMark />
      <span>
        SUN ARABIA<small>MARKETING AGENCY</small>
      </span>
    </a>
  );
}
function Portrait({ client }) {
  return (
    <div className="client">
      <img src={client.img} alt="" width="48" height="48" loading="lazy" />
      <div>
        <strong>{client.name}</strong>
        <span>{client.role}</span>
      </div>
      <span className="client-market">{client.market}</span>
    </div>
  );
}

function MarketBridge() {
  return (
    <div
      className="market-bridge"
      role="img"
      aria-label="Sun Arabia connects the USA and UK with the UAE and MENA markets"
    >
      <svg viewBox="0 0 1000 220" fill="none" aria-hidden="true">
        <path
          className="bridge-track"
          d="M130 90C300 90 330 170 500 170S700 90 870 90"
        />
        <path
          className="bridge-track bridge-track-secondary"
          d="M130 90C300 90 330 30 500 30S700 90 870 90"
        />
        <path
          className="bridge-connection"
          d="M130 90C300 90 330 170 500 170S700 90 870 90"
        />
        <circle cx="130" cy="90" r="6" />
        <circle cx="870" cy="90" r="6" />
        <path d="m487 162 13 8-13 8m26-156-13 8 13 8" />
      </svg>
      <span className="bridge-label bridge-west">USA / UK</span>
      <span className="bridge-brand">
        <SunMark />
        <span>Sun Arabia</span>
      </span>
      <span className="bridge-label bridge-east">UAE / MENA</span>
      <span className="bridge-caption">
        A global perspective. A unified voice.
      </span>
    </div>
  );
}

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePhase, setActivePhase] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [motionPaused, setMotionPaused] = useState(false);
  const motionDisabled = motionPaused || prefersReducedMotion;
  const pageRef = useRef(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    msg: "",
  });
  const [reviewing, setReviewing] = useState(false);
  const menuButton = useRef(null);
  const firstMenuLink = useRef(null);
  const reviewHeading = useRef(null);
  useEffect(() => {
    const page = pageRef.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onPreference = (event) => setPrefersReducedMotion(event.matches);
    preference.addEventListener("change", onPreference);
    const desktop = window.matchMedia("(min-width: 981px)");
    const onDesktop = (event) => {
      if (event.matches) setMenuOpen(false);
    };
    desktop.addEventListener("change", onDesktop);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) target.dataset.inView = "true";
          if (target.classList.contains("solar-visual")) {
            target.dataset.running = String(isIntersecting && !document.hidden);
          }
        });
      },
      { threshold: 0.15 },
    );
    page
      .querySelectorAll(
        ".section-heading, .principle, .testimonial-featured, .solar-visual, .market-bridge",
      )
      .forEach((element) => observer.observe(element));

    const onVisibility = () => {
      const visual = page.querySelector(".solar-visual");
      const bounds = visual.getBoundingClientRect();
      visual.dataset.running = String(
        !document.hidden &&
          bounds.bottom > 0 &&
          bounds.top < window.innerHeight,
      );
    };
    const onScroll = () => {
      page.querySelector(".site-header").dataset.scrolled = String(
        window.scrollY > 24,
      );
    };
    const navigationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) return;
          page.querySelectorAll(".desktop-nav a").forEach((link) => {
            if (link.hash === `#${target.id}`)
              link.setAttribute("aria-current", "location");
            else link.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
    );
    page
      .querySelectorAll("main section[id]")
      .forEach((section) => navigationObserver.observe(section));
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      observer.disconnect();
      navigationObserver.disconnect();
      preference.removeEventListener("change", onPreference);
      desktop.removeEventListener("change", onDesktop);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  useEffect(() => {
    if (motionDisabled) return;
    const panel = document.getElementById(`phase-panel-${activePhase}`);
    const animation = panel.animate(
      [
        { opacity: 0.65, transform: "translateX(12px)", filter: "blur(2px)" },
        { opacity: 1, transform: "translateX(0)", filter: "blur(0)" },
      ],
      { duration: 320, easing: "cubic-bezier(0.16, 1, 0.3, 1)" },
    );
    return () => animation.cancel();
  }, [activePhase, motionDisabled]);
  useEffect(() => {
    if (!menuOpen) return;
    firstMenuLink.current?.focus();
    const onEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [menuOpen]);
  useEffect(() => {
    if (reviewing) reviewHeading.current?.focus();
  }, [reviewing]);
  const closeMenu = () => setMenuOpen(false);
  const navigatePhase = (event, i) => {
    let next;
    if (event.key === "ArrowDown") next = (i + 1) % phases.length;
    if (event.key === "ArrowUp") next = (i + phases.length - 1) % phases.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = phases.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      setActivePhase(next);
      document.getElementById(`phase-tab-${next}`)?.focus();
    }
  };
  return (
    <div
      className="landing-page"
      ref={pageRef}
      data-motion={motionDisabled ? "paused" : "playing"}
    >
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container nav-inner">
          <Brand />
          <nav aria-label="Main navigation" className="desktop-nav">
            <a href="#about">Our approach</a>
            <a href="#process">The Solar Cycle</a>
            <a href="#voices">Client voices</a>
          </nav>
          <a className="button button-small header-cta" href="#contact">
            Let’s talk <Arrow diagonal />
          </a>
          <button
            className="menu-toggle"
            ref={menuButton}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span className={menuOpen ? "is-open" : ""} />
          </button>
        </div>
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Mobile navigation"
          hidden={!menuOpen}
        >
          <a ref={firstMenuLink} onClick={closeMenu} href="#about">
            Our approach
          </a>
          <a onClick={closeMenu} href="#process">
            The Solar Cycle
          </a>
          <a onClick={closeMenu} href="#voices">
            Client voices
          </a>
          <a onClick={closeMenu} href="#pricing">
            The workshop
          </a>
          <a onClick={closeMenu} href="#contact">
            Let’s talk <Arrow diagonal />
          </a>
        </nav>
      </header>
      <main id="main">
        <section id="hero" className="hero-section container">
          <div className="hero-content">
            <h1>
              Architecting
              <br />
              market dominance.
              <br />
              <em>
                For the best
                <br className="desktop-break" /> in the world.
              </em>
            </h1>
            <p>
              We don’t manage budgets. We deploy capital. Sun Arabia is the
              strategic revenue partner for B2B enterprises that demand a seat
              at the head of the table.
            </p>
            <div className="hero-actions">
              <a className="button" href="#pricing">
                Explore the Clarity Workshop <Arrow diagonal />
              </a>
              <a className="text-link" href="#about">
                Our approach <Arrow />
              </a>
            </div>
          </div>
          <div
            className="solar-visual"
            aria-label="Explore the Solar Cycle phases"
            role="group"
            style={{ "--phase-angle": `${activePhase * 90}deg` }}
          >
            <div className="solar-art">
              <div className="solar-halo" aria-hidden="true" />
              <div className="orbit orbit-outer" />
              <div className="orbit orbit-middle" />
              <div className="orbit orbit-inner" />
              <div className="solar-indicator" aria-hidden="true">
                <span />
              </div>
              <div className="solar-core">
                <span>
                  SUN
                  <br />
                  <em>ARABIA</em>
                </span>
                <small aria-live="polite">{phases[activePhase].title}</small>
              </div>
            </div>
            <div className="orbit-controls">
              {phases.map((phase, index) => (
                <button
                  key={phase.title}
                  className={`orbit-label orbit-label-${["top", "right", "bottom", "left"][index]}`}
                  aria-pressed={activePhase === index}
                  onClick={() => setActivePhase(index)}
                >
                  0{index + 1} / {phase.title}
                </button>
              ))}
            </div>
            <div className="solar-footer">
              <button
                className="motion-toggle"
                aria-pressed={motionDisabled}
                disabled={prefersReducedMotion}
                onClick={() => setMotionPaused(!motionPaused)}
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  aria-hidden="true"
                >
                  {motionDisabled ? (
                    <path d="m6 3 6 5-6 5Z" />
                  ) : (
                    <path d="M5 3v10m6-10v10" />
                  )}
                </svg>
                {prefersReducedMotion
                  ? "Reduced motion"
                  : motionPaused
                    ? "Play motion"
                    : "Pause motion"}
              </button>
              <span className="visual-caption">
                A continuous cycle.
                <br />A compounding advantage.
              </span>
            </div>
          </div>
          <div className="hero-bottom">
            <span className="established">
              Independent thinking.
              <br />
              <span>Global ambition. Est. 2014.</span>
            </span>
            <div className="hero-stat">
              <strong>
                100<span>+</span>
              </strong>
              <span>Global clients</span>
            </div>
            <div className="hero-stat">
              <strong>
                10<span>+</span>
              </strong>
              <span>Years of experience</span>
            </div>
            <div className="hero-stat">
              <strong>3</strong>
              <span>Markets. One partner.</span>
            </div>
            <a
              className="scroll-link"
              href="#about"
              aria-label="Discover our approach"
            >
              <Arrow />
            </a>
          </div>
        </section>
        <section id="about" className="section container about-section">
          <div className="section-heading">
            <h2>
              The antithesis of the
              <br />
              <em>traditional agency.</em>
            </h2>
            <p>
              Institutional-grade strategy.
              <br /> High-end brand sovereignty.
            </p>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p>
                Having navigated the world’s most competitive landscapes for
                over a decade, we understand that true growth is not found in
                vanity metrics, but in the compounding value of{" "}
                <strong>Customer Lifetime Loyalty.</strong>
              </p>
              <p>
                We are a high-conviction partner for B2B enterprises that
                prioritize revenue over “reach.” We serve a global portfolio of
                visionaries who demand more than just deliverables — they demand
                a seat at the head of the table.
              </p>
              <p>
                We don’t manage budgets; we deploy capital to ensure your brand
                doesn’t just participate in the market,{" "}
                <strong>but dictates it.</strong>
              </p>
              <a className="text-link" href="#process">
                Meet your growth framework <Arrow />
              </a>
            </div>
            <div className="principle">
              <blockquote>
                “Growth is not a campaign.
                <br />
                It is a culture —{" "}
                <em>
                  compounded,
                  <br />
                  daily, deliberately.
                </em>
                ”
              </blockquote>
              <p>Sun Arabia Operating Principle</p>
              <div className="principle-facts">
                <div>
                  <strong>50M+</strong>
                  <span>Engagements</span>
                </div>
                <div>
                  <strong>98%</strong>
                  <span>Retention</span>
                </div>
                <div>
                  <strong>∞</strong>
                  <span>Potential</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="process" className="process-section section">
          <div className="container">
            <div className="section-heading">
              <h2>
                The <em>Solar Cycle.</em>
              </h2>
              <p>
                A four-phase proprietary framework engineered
                <br /> for compounding revenue growth.
              </p>
            </div>
            <div className="process-layout">
              <div
                className="phase-list"
                role="tablist"
                aria-label="Solar Cycle phases"
                aria-orientation="vertical"
              >
                {phases.map((phase, i) => (
                  <button
                    key={phase.title}
                    id={`phase-tab-${i}`}
                    className={`phase-tab ${activePhase === i ? "active" : ""}`}
                    role="tab"
                    aria-selected={activePhase === i}
                    aria-controls={`phase-panel-${i}`}
                    tabIndex={activePhase === i ? 0 : -1}
                    onClick={() => setActivePhase(i)}
                    onKeyDown={(event) => navigatePhase(event, i)}
                  >
                    <span>0{i + 1}</span>
                    <span>{phase.title}</span>
                    <Arrow diagonal />
                  </button>
                ))}
              </div>
              {phases.map((phase, i) => (
                <div
                  key={phase.title}
                  id={`phase-panel-${i}`}
                  className="phase-panel"
                  role="tabpanel"
                  aria-labelledby={`phase-tab-${i}`}
                  tabIndex="0"
                  hidden={activePhase !== i}
                >
                  <div
                    className={`phase-diagram phase-diagram-${i}`}
                    aria-hidden="true"
                  >
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="phase-detail">
                    <span>PHASE 0{i + 1} / 04</span>
                    <h3>{phase.title}</h3>
                    <p>{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section container markets-section">
          <div className="section-heading">
            <h2>
              Three power hubs.
              <br />
              <em>One growth engine.</em>
            </h2>
            <p>
              A global perspective.
              <br /> Precisely local execution.
            </p>
          </div>
          <MarketBridge />
          <div className="markets-grid">
            {markets.map((market) => (
              <article className="market" key={market.region}>
                <span className="market-region">{market.region}</span>
                <h3>{market.title}</h3>
                <p>{market.desc}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="voices" className="section voices-section">
          <div className="container">
            <div className="section-heading">
              <h2>
                Results that
                <br />
                <em>speak for themselves.</em>
              </h2>
              <p>
                Trusted by visionary leaders across three of
                <br /> the world’s most competitive markets.
              </p>
            </div>
            <div className="testimonials">
              <article className="testimonial testimonial-featured">
                <span className="quote-mark" aria-hidden="true">
                  “
                </span>
                <blockquote>{testimonials[0].quote}</blockquote>
                <Portrait client={testimonials[0]} />
              </article>
              <div className="testimonial-grid">
                {testimonials.slice(1).map((client) => (
                  <article className="testimonial" key={client.name}>
                    <blockquote>“{client.quote}”</blockquote>
                    <Portrait client={client} />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="section container difference-section">
          <div className="section-heading">
            <h2>
              Categorically <em>different.</em>
            </h2>
            <p>
              Our focus is your growth.
              <br /> Our model reflects it.
            </p>
          </div>
          <table className="comparison">
            <caption className="sr-only">
              Traditional agencies compared with Sun Arabia
            </caption>
            <thead>
              <tr>
                <th scope="col">Traditional agencies</th>
                <th scope="col">
                  <SunMark />
                  Sun Arabia
                </th>
              </tr>
            </thead>
            <tbody>
              {differences.map(([before, after]) => (
                <tr key={before}>
                  <td>{before}</td>
                  <td>
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <path d="m4 10 4 4 8-8" />
                    </svg>
                    {after}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section id="pricing" className="workshop-section section">
          <div className="container workshop-layout">
            <div>
              <h2>
                Clarity first.
                <br />
                <em>Dominance follows.</em>
              </h2>
              <p className="workshop-intro">
                Stop guessing. Start executing. Our Paid Strategy & Audit is a
                deep-tissue diagnostic of your Website, Social, and Revenue
                Architecture.
              </p>
              <p>
                We provide the roadmap; you decide if we are the ones to drive
                it. No long-term contracts. Just pure ROI.
              </p>
            </div>
            <div className="workshop-offer">
              <div className="workshop-offer-heading">
                <SunMark />
                <h3>The Clarity Workshop</h3>
              </div>
              <div className="workshop-price">
                $5,000<span>Paid strategy & audit</span>
              </div>
              <ul>
                {["Website Audit", "Social Audit", "Revenue Architecture"].map(
                  (item) => (
                    <li key={item}>
                      <span>{item}</span>
                      <Arrow diagonal />
                    </li>
                  ),
                )}
              </ul>
              <a className="button" href="#contact">
                Book your Clarity Workshop <Arrow diagonal />
              </a>
              <p>
                No long-term commitment. Fully refundable within 48h if not
                satisfied.
              </p>
            </div>
          </div>
        </section>
        <section id="contact" className="section container contact-section">
          <div>
            <h2>
              Ready to dictate
              <br />
              <em>your market?</em>
            </h2>
            <p>
              Start with a conversation.
              <br />
              Tell us where you want to go.
            </p>
            <div className="contact-signature">
              <SunMark />
              <span>
                Independent strategy.
                <br />
                Shared ambition.
              </span>
            </div>
          </div>
          <div className="contact-form-wrap">
            {reviewing ? (
              <div className="enquiry-review">
                <h3 ref={reviewHeading} tabIndex="-1">
                  Your enquiry preview
                </h3>
                <p>
                  Online enquiries are not connected yet. Your details have not
                  been sent.
                </p>
                <dl>
                  <dt>Name</dt>
                  <dd>{formState.name}</dd>
                  <dt>Email</dt>
                  <dd>{formState.email}</dd>
                  {formState.company && (
                    <>
                      <dt>Company</dt>
                      <dd>{formState.company}</dd>
                    </>
                  )}
                  {formState.msg && (
                    <>
                      <dt>Your goals</dt>
                      <dd>{formState.msg}</dd>
                    </>
                  )}
                </dl>
                <button
                  className="button"
                  onClick={() => {
                    setReviewing(false);
                    requestAnimationFrame(() =>
                      document.getElementById("name")?.focus(),
                    );
                  }}
                >
                  Edit your details <Arrow />
                </button>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setReviewing(true);
                }}
              >
                <p className="form-notice" id="form-notice">
                  Online enquiries are currently unavailable. You can preview
                  your enquiry below; it will not be sent.
                </p>
                <div className="form-grid">
                  {fields.map(({ key, label, ...inputProps }) => (
                    <div className={`field field-${key}`} key={key}>
                      <label htmlFor={key}>
                        {label}
                        {!inputProps.required && <span>Optional</span>}
                      </label>
                      <input
                        {...inputProps}
                        id={key}
                        name={key}
                        value={formState[key]}
                        onChange={(event) =>
                          setFormState({
                            ...formState,
                            [key]: event.target.value,
                          })
                        }
                      />
                    </div>
                  ))}
                  <div className="field field-message">
                    <label htmlFor="msg">
                      Your goals <span>Optional</span>
                    </label>
                    <textarea
                      id="msg"
                      name="msg"
                      rows="4"
                      placeholder="What would meaningful growth look like for your business?"
                      value={formState.msg}
                      onChange={(event) =>
                        setFormState({ ...formState, msg: event.target.value })
                      }
                    />
                  </div>
                </div>
                <button
                  className="button"
                  type="submit"
                  aria-describedby="form-notice"
                >
                  Preview your enquiry <Arrow diagonal />
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <footer className="site-footer container">
        <div className="footer-wordmark" aria-hidden="true">
          SUN <em>ARABIA</em>
          <span>
            <SunMark />
          </span>
        </div>
        <div className="footer-top">
          <Brand />
          <nav aria-label="Footer navigation">
            <a href="#about">Our approach</a>
            <a href="#pricing">The workshop</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="text-link" href="#hero">
            Back to top <Arrow diagonal />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Sun Arabia Marketing Agency</span>
          <span>USA · UK · UAE</span>
          <span>Strategy. Sovereignty. Growth.</span>
        </div>
      </footer>
    </div>
  );
}
