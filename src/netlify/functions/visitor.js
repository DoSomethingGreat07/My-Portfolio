export async function handler(event) {
    const h = event.headers;

    const ip =
        h["x-forwarded-for"]?.split(",")[0] ||
        h["client-ip"] ||
        "Unknown";

    const userAgent = h["user-agent"] || "Unknown";
    const language = h["accept-language"] || "Unknown";
    const referer = h["referer"] || "Direct";

    // Bot filter
    if (/bot|crawler|spider|crawling/i.test(userAgent)) {
        return { statusCode: 200 };
    }

    // Geo lookup (legal & common)
    const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
    const geo = await geoRes.json();

    const message = {
        content: `
🔔 **New Visitor – nikhiljuluri.online**

🌐 **Network**
IP: ${ip}
ISP: ${geo.org || "N/A"}
ASN: ${geo.asn || "N/A"}

📍 **Location (Approx)**
Country: ${geo.country_name || "N/A"}
Region: ${geo.region || "N/A"}
City: ${geo.city || "N/A"}
Timezone: ${geo.timezone || "N/A"}
Lat / Long: ${geo.latitude || "N/A"}, ${geo.longitude || "N/A"}

💻 **Device**
User-Agent: ${userAgent}
Language: ${language}

🔗 **Referrer**
${referer}

⏰ **Time**
${new Date().toUTCString()}
    `
    };

    await fetch(process.env.DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message)
    });

    return {
        statusCode: 200,
        body: "ok"
    };
}
