'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import en from '../../locales/en.json';
import hi from '../../locales/hi.json';
import te from '../../locales/te.json';

type Language = 'en' | 'hi' | 'te';
type Mode = 'named' | 'anonymous' | null;
type Step = 1 | 2 | 3;

export default function ComplaintBox() {
    const [lang, setLang] = useState<Language>('en');
    const [mode, setMode] = useState<Mode>(null);
    const [step, setStep] = useState<Step>(1);
    const [trackingId, setTrackingId] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Simple dictionary selector
    const dict = lang === 'en' ? en.complaint : lang === 'hi' ? hi.complaint : te.complaint;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call and Encryption
        setTimeout(() => {
            setIsSubmitting(false);
            const generatedId = `LR-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
            setTrackingId(generatedId);
            setStep(3);
        }, 1500);
    };

    return (
        <div className="complaint-page">
            <div className="container" style={{ maxWidth: '800px', padding: '4rem 1.5rem' }}>

                {/* Header & Language Switcher */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-primary" style={{ marginBottom: '0.25rem' }}>{dict.title}</h1>
                        <p className="text-muted">{dict.subtitle}</p>
                    </div>

                    <div className="lang-switcher">
                        <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
                        <button className={`lang-btn ${lang === 'hi' ? 'active' : ''}`} onClick={() => setLang('hi')}>HI</button>
                        <button className={`lang-btn ${lang === 'te' ? 'active' : ''}`} onClick={() => setLang('te')}>TE</button>
                    </div>
                </div>

                <div className="card shadow-lg border-primary-top">

                    {/* STEP 1: MODE SELECTION */}
                    {step === 1 && (
                        <div className="step-content fade-in">
                            <h2 className="step-title">{dict.step1_title}</h2>

                            <div className="mode-grid">
                                <button
                                    className={`mode-card ${mode === 'named' ? 'selected' : ''}`}
                                    onClick={() => setMode('named')}
                                >
                                    <div className="mode-icon">👤</div>
                                    <h3>{dict.mode_named}</h3>
                                    <p>{dict.mode_named_desc}</p>
                                </button>

                                <button
                                    className={`mode-card anonymous-mode ${mode === 'anonymous' ? 'selected' : ''}`}
                                    onClick={() => setMode('anonymous')}
                                >
                                    <div className="mode-icon">🕵️</div>
                                    <h3>{dict.mode_anonymous}</h3>
                                    <p>{dict.mode_anonymous_desc}</p>
                                </button>
                            </div>

                            <div className="mt-8 text-center">
                                <button
                                    className="btn btn-primary btn-large"
                                    disabled={!mode}
                                    onClick={() => setStep(2)}
                                >
                                    {dict.continue}
                                </button>
                            </div>
                        </div>
                    )}

                    {/* STEP 2: COMPLAINT FORM */}
                    {step === 2 && (
                        <div className="step-content fade-in">
                            <h2 className="step-title">{dict.step2_title} <span className="badge">{mode === 'anonymous' ? dict.mode_anonymous : dict.mode_named}</span></h2>

                            <form onSubmit={handleSubmit} className="complaint-form mt-6">
                                <div className="form-group">
                                    <label>{dict.incident_type} *</label>
                                    <select required>
                                        <option value="">{dict.select_type}</option>
                                        <option value="financial">{dict.type_financial}</option>
                                        <option value="social">{dict.type_social}</option>
                                        <option value="harassment">{dict.type_harassment}</option>
                                        <option value="other">{dict.type_other}</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>{dict.description} *</label>
                                    <textarea rows={5} placeholder={dict.desc_placeholder} required></textarea>
                                </div>

                                <div className="grid grid-2-cols">
                                    <div className="form-group">
                                        <label>{dict.date_time} *</label>
                                        <input type="datetime-local" required />
                                    </div>
                                    <div className="form-group">
                                        <label>{dict.location}</label>
                                        <input type="text" placeholder="City / State" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>{dict.upload_evidence}</label>
                                    <input type="file" multiple accept="image/*,.pdf" className="file-input" />
                                    <small className="text-muted block mt-1">Encrypted before upload.</small>
                                </div>

                                <div className="form-group">
                                    <label>{dict.contact_info}</label>
                                    <input type="text" placeholder="Email or Phone" required={mode === 'named'} />
                                </div>

                                <div className="flex justify-between items-center mt-8 pt-4 border-t">
                                    <button type="button" className="btn btn-outline" onClick={() => setStep(1)}>
                                        Back
                                    </button>
                                    <button type="submit" className="btn btn-danger btn-large" disabled={isSubmitting}>
                                        {isSubmitting ? dict.submitting : dict.submit}
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* STEP 3: SUCCESS & TRACKING */}
                    {step === 3 && (
                        <div className="step-content text-center fade-in">
                            <div className="success-icon mb-4">✅</div>
                            <h2 className="text-success mb-2">{dict.step3_title}</h2>

                            <div className="tracking-box mt-6 mb-8">
                                <p className="tracking-label text-muted uppercase">{dict.tracking_id}</p>
                                <div className="tracking-number">{trackingId}</div>
                                <p className="tracking-warning mt-2 text-danger text-sm font-bold">⚠️ {dict.tracking_warning}</p>
                            </div>

                            <div className="guidance-box bg-light text-left p-4 rounded mb-8">
                                <h4 className="flex items-center gap-2 mb-2">🛡️ {dict.safety_guidance}</h4>
                                <p>{dict.guidance_text}</p>
                            </div>

                            <Link href="/" className="btn btn-primary">
                                {dict.back_home}
                            </Link>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
