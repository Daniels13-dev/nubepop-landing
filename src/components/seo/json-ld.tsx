export function JsonLd() {
    const siteUrl = "https://nubepop.com"
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "573126928258"
    const schema = {
        "@context": "https://schema.org",
        "@type": "OnlineStore",
        "name": "NubePop",
        "description": "Tienda premium de vapers, destilados y accesorios en Colombia.",
        "url": siteUrl,
        "logo": `${siteUrl}/logo-negro.png`,
        "sameAs": [
            "https://instagram.com/nubepop",
            "https://facebook.com/nubepop"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": `+${phoneNumber}`,
            "contactType": "Customer Service",
            "areaServed": "CO",
            "availableLanguage": "Spanish"
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": `${siteUrl}/productos?q={search_term_string}`,
            "query-input": "required name=search_term_string"
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
