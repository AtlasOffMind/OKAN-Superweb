"use client";

import { useRef, useState, type MouseEvent, type TouchEvent } from "react";

export function useTouchReveal() {
  const [revealed, setRevealed] = useState(false);
  const gesture = useRef<{ x: number; y: number; started: number; moved: boolean } | null>(null);
  const suppressClick = useRef(false);
  const touchInteraction = useRef(false);

  function onTouchStart(event: TouchEvent) {
    if (event.touches.length !== 1) return;
    const touch = event.touches[0];
    gesture.current = { x: touch.clientX, y: touch.clientY, started: Date.now(), moved: false };
    suppressClick.current = false;
    touchInteraction.current = true;
    setRevealed(true);
  }

  function onTouchMove(event: TouchEvent) {
    if (!gesture.current || !event.touches[0]) return;
    const touch = event.touches[0];
    if (Math.hypot(touch.clientX - gesture.current.x, touch.clientY - gesture.current.y) > 10) {
      gesture.current.moved = true;
      setRevealed(false);
    }
  }

  function onTouchEnd() {
    if (gesture.current) {
      suppressClick.current = gesture.current.moved || Date.now() - gesture.current.started >= 300;
    }
    gesture.current = null;
    setRevealed(false);
  }

  function onClick(event: MouseEvent) {
    if (suppressClick.current) event.preventDefault();
    suppressClick.current = false;
  }

  function onContextMenu(event: MouseEvent) {
    if (touchInteraction.current) event.preventDefault();
  }

  function onMouseDown() {
    touchInteraction.current = false;
  }

  return { revealed, onTouchStart, onTouchMove, onTouchEnd, onTouchCancel: onTouchEnd, onClick, onContextMenu, onMouseDown };
}