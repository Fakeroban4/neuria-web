"use client";

import { useEffect, useState } from "react";

const CLIENT_ID =
  "BAAHUdcPUz6P8cGGfMk0aCsLszOCCKm6S2JR8kuiLwpSmSj6niauVtwrJ03TinB3YGAQ4CKwxwC0G5KBv4";
const PLAN_ID = "P-4N0138436H516424MNKBZXYQ";
const CONTAINER_ID = `paypal-button-container-${PLAN_ID}`;
const SDK_SRC = `https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}&vault=true&intent=subscription`;

declare global {
  interface Window {
    paypal?: {
      Buttons: (options: {
        style?: Record<string, string>;
        createSubscription: (
          data: unknown,
          actions: {
            subscription: { create: (opts: { plan_id: string }) => Promise<string> };
          },
        ) => Promise<string>;
        onApprove: (data: { subscriptionID: string }) => void;
      }) => { render: (selector: string) => void };
    };
  }
}

export default function PayPalSubscribeButton() {
  const [subscriptionId, setSubscriptionId] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    function renderButton() {
      if (cancelled || !window.paypal) return;
      const container = document.getElementById(CONTAINER_ID);
      if (!container || container.childElementCount > 0) return;

      window.paypal
        .Buttons({
          style: {
            shape: "pill",
            color: "blue",
            layout: "vertical",
            label: "subscribe",
          },
          createSubscription: (_data, actions) =>
            actions.subscription.create({ plan_id: PLAN_ID }),
          onApprove: (data) => {
            if (!cancelled) setSubscriptionId(data.subscriptionID);
          },
        })
        .render(`#${CONTAINER_ID}`);
    }

    if (window.paypal) {
      renderButton();
    } else {
      const existing = document.querySelector<HTMLScriptElement>(
        `script[src="${SDK_SRC}"]`,
      );
      if (existing) {
        existing.addEventListener("load", renderButton);
      } else {
        const script = document.createElement("script");
        script.src = SDK_SRC;
        script.setAttribute("data-sdk-integration-source", "button-factory");
        script.addEventListener("load", renderButton);
        document.body.appendChild(script);
      }
    }

    return () => {
      cancelled = true;
    };
  }, []);

  if (subscriptionId) {
    return (
      <div className="rounded-xl border border-accent/40 bg-accent/10 p-4 text-center text-sm text-foreground">
        ¡Listo! Tu suscripción quedó activada.
        <span className="mt-1 block text-xs text-muted">
          ID: {subscriptionId}
        </span>
      </div>
    );
  }

  return <div id={CONTAINER_ID} />;
}
