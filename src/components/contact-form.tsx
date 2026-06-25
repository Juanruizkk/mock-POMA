"use client";

import { useState } from "react";

const ACTIVIDADES = [
  "Cascadas de la Costa",
  "La Ciénaga",
  "Cerro El Pelado",
  "Cafayate",
  "Santa María – Ruta de la Capia",
  "Quebrada de Los Sosa",
  "Vuelta al Lago",
  "Quilmes",
  "Loma La Cruz",
  "Fuerte Viejo",
  "Cueva Los Corrales",
  "Casco Céntrico",
  "Cascada Los Alisos",
  "Cascada El Rincón",
  "Servicio de Intérprete",
  "Salidas en Vehículo",
  "Experiencias a Medida",
  "Otro / Consulta general",
];

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full bg-transparent border-b border-[#d8c9ad] px-1 py-2.5 text-[15px] text-[#2a2a26] placeholder:text-[#a99e88] outline-none transition-colors focus:border-[#c08a2d]";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      fullName: fd.get("fullName"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      activity: fd.get("activity"),
      message: fd.get("message"),
      company: fd.get("company"), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setError(data.error ?? "Algo salió mal, intentá de nuevo.");
        setStatus("error");
      }
    } catch {
      setError("No se pudo enviar. Revisá tu conexión.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center"
          style={{ background: "var(--green)" }}
        >
          <i className="ti ti-check text-white text-2xl" />
        </div>
        <h3 className="font-serif text-2xl font-medium" style={{ color: "var(--deepgreen)" }}>
          ¡Consulta enviada!
        </h3>
        <p className="text-[14px] leading-relaxed max-w-xs" style={{ color: "var(--muted)" }}>
          Sergio o Naty te responden a la brevedad. Mientras tanto, podés escribirnos por WhatsApp.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="eyebrow text-[11px] underline underline-offset-4 mt-2"
          style={{ color: "var(--terra)" }}
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      {/* Honeypot — invisible para humanos */}
      <input name="company" type="text" className="hidden" tabIndex={-1} autoComplete="off" />

      <div>
        <label className="block eyebrow text-[11px] mb-2" style={{ color: "var(--muted)" }} htmlFor="fullName">
          Nombre *
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          placeholder="¿Cómo te llamás?"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block eyebrow text-[11px] mb-2" style={{ color: "var(--muted)" }} htmlFor="email">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="tu@email.com"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block eyebrow text-[11px] mb-2" style={{ color: "var(--muted)" }} htmlFor="phone">
          Teléfono *
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="+54 9 381 000-0000"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block eyebrow text-[11px] mb-2" style={{ color: "var(--muted)" }} htmlFor="activity">
          Excursión / Actividad *
        </label>
        <select
          id="activity"
          name="activity"
          required
          defaultValue=""
          className={inputClass + " cursor-pointer"}
          style={{ appearance: "none" }}
        >
          <option value="" disabled>
            Seleccioná una actividad…
          </option>
          {ACTIVIDADES.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block eyebrow text-[11px] mb-2" style={{ color: "var(--muted)" }} htmlFor="message">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Contanos qué te gustaría descubrir..."
          className={inputClass + " resize-none"}
        />
      </div>

      {status === "error" && (
        <p className="text-[13px]" style={{ color: "var(--terra)" }}>
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="press-btn w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-[13px] eyebrow text-white disabled:opacity-60 transition-opacity"
        style={{ background: "var(--green)" }}
      >
        {status === "sending" ? (
          <>
            <i className="ti ti-loader-2 animate-spin text-base" />
            Enviando…
          </>
        ) : (
          <>
            Enviar consulta <i className="ti ti-arrow-right text-base" />
          </>
        )}
      </button>
    </form>
  );
}
