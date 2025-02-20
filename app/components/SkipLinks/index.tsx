import React from 'react';

import "./style.css"

export default function SkipLinks() {
  return (
    <nav aria-label="Skip links">
      <ul className="skip-links">
        <li>
          <a href="#main-content" className="skip-link">
            Skip to Main Content
          </a>
        </li>
        <li>
          <a href="#navigation" className="skip-link">
            Skip to Navigation
          </a>
        </li>
        <li>
          <a href="#footer" className="skip-link">
            Skip to Footer
          </a>
        </li>
      </ul>
    </nav>
  );
}
