export async function handler(event) {
    const h = event.headers;

    const ip = h["x-nf-client-connection-ip"] || h["x-forwarded-for"]?.split(",")[0] || h["client-ip"] || "Unknown";
    const userAgent = h["user-agent"] || "Unknown";
    const language = h["accept-language"] || "Unknown";
    const referer = h["referer"] || "Direct";

    // Bot filter
    if (/bot|crawler|spider|crawling/i.test(userAgent)) {
        return { statusCode: 200, body: "Bot ignored" };
    }

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
        console.error("DISCORD_WEBHOOK_URL is not defined!");
        return { statusCode: 500, body: "Webhook not configured" };
    }

    // Get geo info with fallback
    let geo = {};
    try {
        const geoRes = await fetch(`http://ip-api.com/json/${ip}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query`);
        const data = await geoRes.json();

        if (data.status === "success") {
            geo = {
                country: data.country,
                region: data.regionName,
                city: data.city,
                timezone: data.timezone,
                lat: data.lat,
                lon: data.lon,
                isp: data.isp,
                org: data.org,
                asn: data.as
            };
        }
    } catch (error) {
        console.error("Geo lookup failed:", error);
    }

    const message = {
        content: `
NEW VISITOR - nikhiljuluri.online

NETWORK INFO
IP Address: ${ip}
ISP: ${geo.isp || "Unknown"}
Organization: ${geo.org || "Unknown"}
ASN: ${geo.asn || "Unknown"}

LOCATION
Country: ${geo.country || "Unknown"}
Region: ${geo.region || "Unknown"}
City: ${geo.city || "Unknown"}
Timezone: ${geo.timezone || "Unknown"}
Coordinates: ${geo.lat || "N/A"}, ${geo.lon || "N/A"}

DEVICE INFO
User Agent: ${userAgent}
Language: ${language}

REFERRER
${referer}

TIMESTAMP
${new Date().toUTCString()}
        `.trim()
    };

    try {
        await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(message)
        });
    } catch (error) {
        console.error("Discord webhook failed:", error);
    }

    return {
        statusCode: 200,
        body: "ok"
    };
}