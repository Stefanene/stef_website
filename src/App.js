import React from 'react';
import { motion } from 'framer-motion';
import './styles.css';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
}

function Header() {
  return (
    <header>
      <motion.h1 initial={{ y: -250 }} animate={{ y: 0 }} transition={{ duration: 1 }}>
        My Portfolio
      </motion.h1>
    </header>
  );
}

function MainContent() {
  return (
    <div className="container">
      <Section title="About Me">
        <p>Hi, I'm Stefan Ene, a passionate low-level Software Developer and undergraduate senior.</p>
        <HighlightLink href="#projects">Check out my projects</HighlightLink>
      </Section>
      <Section title="Projects">
        <motion.div className="card" whileHover={{ scale: 1.025 }}>
          Project 1
        </motion.div>
        <motion.div className="card" whileHover={{ scale: 1.025 }}>
          Project 2
        </motion.div>
        <motion.div className="card" whileHover={{ scale: 1.025 }}>
          Project 3
        </motion.div>
      </Section>
      <Section title="Contact">
        <p>You can reach me at: <HighlightLink href="mailto:your.email@example.com">your.email@example.com</HighlightLink></p>
        <motion.button whileHover={{ scale: 1.1 }}>Get in Touch</motion.button>
      </Section>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        {title}
      </motion.h2>
      {children}
    </section>
  );
}

function HighlightLink({ href, children }) {
  return (
    <a href={href}>
      {children}
    </a>
  );
}

export default App;
