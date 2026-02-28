import Link from 'next/link';

export default function AwarenessHub() {
    const lessons = [
        {
            id: "upi-fraud",
            title: "UPI & Banking Fraud",
            icon: "💳",
            summary: "Never enter your PIN to receive money. Learn how scammers use fake QR codes and screen sharing apps.",
            readTime: "2 min read",
            tags: ["High Alert", "Financial"]
        },
        {
            id: "otp-scams",
            title: "OTP & Phishing Scams",
            icon: "📱",
            summary: "Understand how scammers trick you into sharing OTPs by posing as customer care or bank officials.",
            readTime: "3 min read",
            tags: ["Common"]
        },
        {
            id: "social-media",
            title: "Social Media Identity Theft",
            icon: "👤",
            summary: "Protect your accounts from hacking, impersonation, and fake friend requests asking for money.",
            readTime: "2 min read",
            tags: ["Privacy"]
        },
        {
            id: "job-frauds",
            title: "Fake Job & Visa Frauds",
            icon: "💼",
            summary: "Recognize the signs of fake offer letters requiring processing fees or upfront security deposits.",
            readTime: "4 min read",
            tags: ["Youth Focus"]
        }
    ];

    return (
        <div className="awareness-page">
            <div className="container" style={{ padding: '4rem 1.5rem' }}>

                <div className="text-center mb-12">
                    <h1 className="text-primary mb-4">Citizen Cyber Awareness Hub</h1>
                    <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Knowledge is your first line of defense. Explore our bite-sized lessons designed to help you quickly identify and avoid everyday digital scams.
                    </p>
                </div>

                {/* Weekly Threat Alert */}
                <div className="border-primary-top p-6 rounded mb-12" style={{ backgroundColor: '#ffffff', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' }}>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-saffron font-bold text-xl">⚠️ Weekly Threat Alert</span>
                    </div>
                    <h3 className="mb-2">AI Voice Cloning Scams on the Rise</h3>
                    <p className="text-muted mb-4">
                        Scammers are using AI to clone the voices of family members in distress to extort money.
                        Always verify the identity by asking a personal question or calling back on their known number before transferring funds.
                    </p>
                    <button className="btn btn-outline text-sm">Read Full Advisory</button>
                </div>

                {/* Knowledge Library Grid */}
                <h2 className="mb-6">Latest Lessons</h2>
                <div className="grid grid-2-cols md-grid-2">
                    {lessons.map((lesson) => (
                        <div key={lesson.id} className="card hover-lift flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-4xl">{lesson.icon}</span>
                                    <div className="flex gap-2">
                                        {lesson.tags.map(tag => (
                                            <span key={tag} className="badge bg-gray text-xs">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <h3 className="mb-2">{lesson.title}</h3>
                                <p className="text-muted text-sm mb-6">{lesson.summary}</p>
                            </div>

                            <div className="flex justify-between items-center pt-4 border-t">
                                <span className="text-xs text-muted font-bold">⏱️ {lesson.readTime}</span>
                                <Link href={`/awareness/${lesson.id}`} className="text-primary font-bold text-sm">
                                    Start Lesson →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
