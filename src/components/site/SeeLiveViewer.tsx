import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Minus, Maximize2, X } from "lucide-react";

export const SEE_LIVE = {
  linkId: "834",
  publicKey: "pk_live_1af988cbabd1c1de38c95b88924eced30b95dc1f",
  url: "https://web.360world.com/seelive/?deep_link_sub1=quickconnectlink&deep_link_sub2=834",
};

type Msg = {
  source?: string;
  event?: string;
  data?: {
    state?: string;
    videoAR?: string;
    queuePosition?: number;
    position?: number;
    errorMessage?: string;
  };
};

const STATE_LABEL: Record<string, string> = {
  loading: "Loading…",
  validating: "Checking availability…",
  validation_failed: "Showroom unavailable",
  joining_queue: "Joining the line…",
  waiting_in_queue: "Waiting in line",
  director_available: "Connecting…",
  in_call: "Live",
  call_ending: "Ending…",
  ended: "Session ended",
  error: "Something went wrong",
};

export function SeeLiveViewer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [minimized, setMinimized] = useState(false);
  const [state, setState] = useState("loading");
  const [queue, setQueue] = useState<number | null>(null);
  const [ar, setAr] = useState("landscape");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    setState("loading");
    setError(null);
    setMinimized(false);
    const onMsg = (e: MessageEvent) => {
      const msg = e.data as Msg;
      if (!msg || msg.source !== "360world-app") return;
      const d = msg.data ?? {};
      if (d.videoAR) setAr(d.videoAR);
      if (d.state) setState(d.state);
      if (typeof d.queuePosition === "number") setQueue(d.queuePosition);
      if (msg.event === "join_queue" && typeof d.position === "number") setQueue(d.position);
      if (msg.event === "call_started") setState("in_call");
      if (msg.event === "session_ended") setState("ended");
      if (d.errorMessage) setError(d.errorMessage);
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, [open]);

  useEffect(() => {
    if (state === "ended") {
      const t = setTimeout(onClose, 2500);
      return () => clearTimeout(t);
    }
  }, [state, onClose]);

  if (!open || typeof document === "undefined") return null;

  const aspect = ar === "portrait" ? "9 / 16" : ar === "square" ? "1 / 1" : "16 / 9";
  let label = STATE_LABEL[state] ?? state;
  if (state === "waiting_in_queue" && queue) label = `Waiting — you're #${queue} in line`;

  const frameWidth = minimized
    ? ar === "portrait" ? "10rem" : "18rem"
    : ar === "portrait" ? "min(24rem, 92vw)" : "min(56rem, 92vw)";

  return createPortal(
    <>
      {!minimized && (
        <div className="fixed inset-0 z-40 bg-foreground/50" onClick={() => setMinimized(true)} />
      )}
      <div
        className={
          minimized
            ? "fixed bottom-4 right-4 z-50"
            : "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2"
        }
      >
        <div
          className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
          style={{ width: frameWidth }}
        >
          <div className="flex items-center justify-between gap-2 border-b border-border px-3 py-2">
            <div className="flex min-w-0 items-center gap-2 text-sm font-semibold">
              <span
                className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                  state === "in_call" ? "bg-destructive animate-pulse" : "bg-muted-foreground"
                }`}
              />
              <span className="truncate">{label}</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                aria-label={minimized ? "Expand" : "Minimize"}
                onClick={() => setMinimized((m) => !m)}
                className="rounded-md p-1.5 hover:bg-muted"
              >
                {minimized ? <Maximize2 className="h-4 w-4" /> : <Minus className="h-4 w-4" />}
              </button>
              <button
                type="button"
                aria-label="Close"
                onClick={onClose}
                className="rounded-md p-1.5 hover:bg-muted"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="relative bg-foreground" style={{ aspectRatio: aspect, maxHeight: "80vh" }}>
            <iframe
              src={SEE_LIVE.url}
              title="Roga — Live Showroom"
              className="h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; xr-spatial-tracking; fullscreen; camera; microphone"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          {error && !minimized && (
            <p className="px-3 py-2 text-sm text-destructive">{error}</p>
          )}
        </div>
      </div>
    </>,
    document.body,
  );
}
