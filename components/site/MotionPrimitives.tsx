"use client";

import { LazyMotion, MotionConfig, animate, type MotionValue, useInView, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import * as m from "motion/react-m";
import { useEffect, useRef, type ReactNode } from "react";

const loadFeatures = () => import("./motion-features").then(module => module.default);

export function MotionProvider({ children }: { children: ReactNode }) {
  return <LazyMotion features={loadFeatures} strict><MotionConfig reducedMotion="user" transition={{ duration: .55, ease: [.22, 1, .36, 1] }}>{children}</MotionConfig></LazyMotion>;
}

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 180, damping: 35 });
  const reducedMotion = useReducedMotion();
  return <m.div className="reading-progress" aria-hidden="true" style={{ scaleX: reducedMotion ? scrollYProgress : progress }} />;
}

export function Reveal({ children, className, id, delay = 0, as = "div" }: { children: ReactNode; className?: string; id?: string; delay?: number; as?: "div" | "section" }) {
  const reducedMotion = useReducedMotion();
  const Tag = as === "section" ? m.section : m.div;
  return <Tag className={className} id={id} initial={false} whileInView={reducedMotion ? { opacity: 1 } : { opacity: [0, 1], y: [34, 0] }} viewport={{ once: true, amount: .12 }} transition={{ duration: reducedMotion ? 0 : .8, delay: reducedMotion ? 0 : delay, ease: [.22, 1, .36, 1] }}>{children}</Tag>;
}

/* Capa que se desplaza más lento que la página; el contenedor debe recortar el desbordamiento. */
export function Parallax({ children, className = "parallax-layer", distance = 6 }: { children: ReactNode; className?: string; distance?: number }) {
  const layer = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: layer, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${distance}%`, `${distance}%`]);
  return <m.div ref={layer} className={className} style={{ y: reducedMotion ? 0 : y }}>{children}</m.div>;
}

/* El servidor entrega la cifra final; el conteo solo se ejecuta al entrar en pantalla. */
export function Counter({ value, from = 0, duration = 1.8 }: { value: number; from?: number; duration?: number }) {
  const node = useRef<HTMLSpanElement>(null);
  const inView = useInView(node, { once: true, amount: .6 });
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    const element = node.current;
    if (!inView || reducedMotion || !element) return;
    const controls = animate(from, value, { duration, ease: [.22, 1, .36, 1], onUpdate: latest => { element.textContent = String(Math.round(latest)); }, onComplete: () => { element.textContent = String(value); } });
    return () => { controls.stop(); element.textContent = String(value); };
  }, [inView, reducedMotion, from, value, duration]);
  return <span ref={node}>{value}</span>;
}

function ScrollWord({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const reducedMotion = useReducedMotion();
  const opacity = useTransform(progress, range, [.22, 1]);
  return <m.span aria-hidden="true" style={{ opacity: reducedMotion ? 1 : opacity }}>{children}</m.span>;
}

/* Titular cuyas palabras se encienden a medida que el bloque cruza la pantalla. */
export function ScrollWords({ text, className = "scroll-words" }: { text: string; className?: string }) {
  const block = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({ target: block, offset: ["start 0.9", "end 0.45"] });
  const words = text.split(" ");
  return <h2 ref={block} className={className} aria-label={text}>{words.map((word, index) => <ScrollWord key={index} progress={scrollYProgress} range={[index / words.length, (index + 1) / words.length]}>{word}</ScrollWord>)}</h2>;
}

export function Wordmark({ text }: { text: string }) {
  const reducedMotion = useReducedMotion();
  return <p className="wordmark" aria-hidden="true">{[...text].map((letter, index) => <m.span key={index} initial={false} whileInView={reducedMotion ? { opacity: 1 } : { y: ["100%", "0%"] }} viewport={{ once: true, amount: .2 }} transition={{ duration: .9, delay: reducedMotion ? 0 : index * .06, ease: [.22, 1, .36, 1] }}>{letter}</m.span>)}</p>;
}
