"use client";

import { useEffect } from "react";

export default function VisitorTracker() {
    useEffect(() => {
        fetch("/.netlify/functions/visitor");
    }, []);

    return null;
}
