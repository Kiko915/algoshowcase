"use client";

import { useCallback } from "react";
import Particles from "@tsparticles/react";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";

type AuthParticlesProps = {
  className?: string;
};

export function AuthParticles({ className }: AuthParticlesProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const options: ISourceOptions = {
    fullScreen: { enable: false },
    fpsLimit: 60,
    background: { color: "transparent" },
    particles: {
      number: { value: 90, density: { enable: true, area: 900 } },
      color: { value: "#F2E9FF" },
      opacity: { value: 0.6 },
      size: { value: { min: 1, max: 4 } },
      move: { enable: true, speed: 0.5, direction: "none", outModes: "out" },
      links: {
        enable: true,
        distance: 150,
        color: "#F2E9FF",
        opacity: 0.35,
        width: 1,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: false, mode: "push" },
        resize: true,
      },
      modes: {
        repulse: { distance: 90, duration: 0.4 },
        push: { quantity: 2 },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="auth-particles"
      init={particlesInit}
      options={options}
      className={cn("absolute inset-0 z-0 pointer-events-none", className)}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
