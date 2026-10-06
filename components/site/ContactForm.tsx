"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Arrow } from "./Icons";

export default function ContactForm({ initialSubject = "Información general" }: { initialSubject?: string }) {
  const [subject, setSubject] = useState(initialSubject);
  const [validated, setValidated] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setValidated(true); }
  return <form className="contact-form" onSubmit={submit} onChange={() => setValidated(false)}>
    <div className="form-heading"><h3>Prepara tu consulta</h3><span>DEMOSTRACIÓN</span></div>
    <p className="form-intro">Selecciona un tema y cuéntanos qué información necesitas.</p>
    <div className="form-row"><label>Nombre y apellidos<input name="nombre" autoComplete="name" placeholder="Tu nombre completo" required maxLength={100} /></label><label>Correo electrónico<input name="correo" type="email" autoComplete="email" placeholder="nombre@correo.com" required maxLength={254} /></label></div>
    <label>Tema de la consulta<select name="asunto" value={subject} onChange={event => setSubject(event.target.value)}><option>Información general</option><option>Huevos de consumo</option><option>Carne de aves</option><option>Alimentos balanceados</option><option>Colaboración institucional</option></select></label>
    <label>Mensaje<textarea name="mensaje" placeholder="Indica el producto o la información que te interesa…" rows={4} required minLength={10} maxLength={2000} /></label>
    <label className="checkbox-label"><input type="checkbox" required /><span>He leído la <Link href="/privacidad">información de privacidad</Link>.</span></label>
    <button className="button button-red" type="submit">{validated ? "Consulta revisada" : "Revisar consulta"}<Arrow /></button>
    <p className={`form-note ${validated ? "success-note" : ""}`} role="status">{validated ? "La consulta está completa. Esta demostración no envía ni guarda mensajes." : "Formulario de demostración. El envío se habilitará con el canal oficial de la entidad."}</p>
  </form>;
}
