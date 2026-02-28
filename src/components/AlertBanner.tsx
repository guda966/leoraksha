'use client';

import { useState } from 'react';

export default function AlertBanner() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="alert-banner">
            <div className="container alert-container">
                <div className="alert-content">
                    <span className="alert-badge">URGENT ADVISORY</span>
                    <span className="alert-text">Beware of fraudulent calls claiming to be from FedEx or Customs demanding immediate payment. RBI or Customs will never ask for payments via personal UPI.</span>
                </div>
                <button
                    className="alert-close"
                    onClick={() => setIsVisible(false)}
                    aria-label="Dismiss alert"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}
