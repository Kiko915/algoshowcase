"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

type SeverityValue = "P1" | "P2" | "P3" | "P4";

type SeveritySelectProps = {
  name?: string;
  value?: SeverityValue;
  onChange?: (value: SeverityValue) => void;
  label?: string;
  description?: string;
  className?: string;
};

type Option = {
  value: SeverityValue;
  title: string;
  body: string;
  hue: string;
};

const OPTIONS: Option[] = [
  {
    value: "P1",
    title: "Critical outage",
    body: "All customers blocked or critical data at risk.",
    hue: "#d92d20",
  },
  {
    value: "P2",
    title: "Major workflow blocked",
    body: "Primary path impaired with limited workarounds.",
    hue: "#f79009",
  },
  {
    value: "P3",
    title: "Degraded experience",
    body: "Functionality available but noticeably impaired.",
    hue: "#dc6803",
  },
  {
    value: "P4",
    title: "Cosmetic issue",
    body: "Minor UI bug or copy fix with no workflow impact.",
    hue: "#6941c6",
  },
];

export function SeveritySelect({
  name = "severity",
  value,
  onChange,
  label = "Severity",
  description = "Choose the priority that best matches the impact.",
  className,
}: SeveritySelectProps) {
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [internalValue, setInternalValue] = useState<SeverityValue>(
    value ?? "P3",
  );
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState<{
    top: number;
    left: number;
    width: number;
  }>({
    top: 0,
    left: 0,
    width: 0,
  });
  const [portalTarget, setPortalTarget] = useState<Element | null>(null);

  useEffect(() => {
    if (typeof document !== "undefined") {
      setPortalTarget(document.body);
    }
  }, []);

  const selected = useMemo(
    () => OPTIONS.find((opt) => opt.value === internalValue) ?? OPTIONS[2],
    [internalValue],
  );

  useEffect(() => {
    if (value && value !== internalValue) {
      setInternalValue(value);
    }
  }, [value, internalValue]);

  const updateCoords = useCallback(() => {
    const node = triggerRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    setCoords({
      top: rect.bottom + window.scrollY + 8,
      left: rect.left + window.scrollX,
      width: rect.width,
    });
  }, []);

  useEffect(() => {
    if (!open) return;

    updateCoords();

    const handleScroll = () => updateCoords();
    const handleResize = () => updateCoords();
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (triggerRef.current && triggerRef.current.contains(target)) {
        return;
      }
      if (menuRef.current && menuRef.current.contains(target)) {
        return;
      }
      setOpen(false);
    };

    window.addEventListener("scroll", handleScroll, true);
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, updateCoords]);

  const handleSelect = (nextValue: SeverityValue) => {
    setInternalValue(nextValue);
    onChange?.(nextValue);
    setOpen(false);
  };

  return (
    <div className={cn("space-y-2", className)}>
      <div className="space-y-1">
        <span className="text-label-sm text-muted-foreground">{label}</span>
        <p className="text-body-md text-muted-foreground">{description}</p>
      </div>

      <input type="hidden" name={name} value={internalValue} />

      <button
        ref={triggerRef}
        type="button"
        className="w-full rounded-full border border-border bg-white px-5 py-3 text-left transition hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary/40"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <SeverityBadge color={selected.hue} />
            <div>
              <p className="text-sm font-semibold text-foreground">
                {selected.value} · {selected.title}
              </p>
              <p className="text-xs text-muted-foreground">{selected.body}</p>
            </div>
          </div>
          <span aria-hidden="true" className="text-foreground/60">
            {open ? "–" : "+"}
          </span>
        </div>
      </button>

      {open &&
        portalTarget &&
        createPortal(
          <div
            ref={menuRef}
            className="z-50 rounded-3xl border border-border bg-white p-2"
            style={{
              position: "absolute",
              top: coords.top,
              left: coords.left,
              width: coords.width,
            }}
          >
            <ul className="space-y-1">
              {OPTIONS.map((option) => (
                <li key={option.value}>
                  <button
                    type="button"
                    className={cn(
                      "w-full rounded-2xl px-4 py-3 text-left transition",
                      option.value === internalValue
                        ? "bg-muted"
                        : "hover:bg-muted/70",
                    )}
                    onClick={() => handleSelect(option.value)}
                  >
                    <div className="flex items-center gap-3">
                      <SeverityBadge color={option.hue} />
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {option.value} · {option.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {option.body}
                        </p>
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>,
          portalTarget,
        )}
    </div>
  );
}

function SeverityBadge({ color }: { color: string }) {
  return (
    <span
      className="inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white"
      style={{
        background: color,
      }}
    >
      !
    </span>
  );
}
