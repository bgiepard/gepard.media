import { useState, useEffect, useRef, useCallback } from 'react';

const DURATION = 850;

export function useFullPageScroll(total: number) {
    const [current, setCurrent] = useState(0);
    const currentRef = useRef(0);
    const locked = useRef(false);
    const touchStartY = useRef(0);

    const goTo = useCallback((index: number) => {
        if (locked.current) return;
        const next = Math.max(0, Math.min(total - 1, index));
        if (next === currentRef.current) return;
        locked.current = true;
        currentRef.current = next;
        setCurrent(next);
        setTimeout(() => { locked.current = false; }, DURATION + 50);
    }, [total]);

    useEffect(() => {
        const onWheel = (e: WheelEvent) => {
            e.preventDefault();
            goTo(currentRef.current + (e.deltaY > 0 ? 1 : -1));
        };

        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowDown' || e.key === 'PageDown') goTo(currentRef.current + 1);
            if (e.key === 'ArrowUp'   || e.key === 'PageUp')   goTo(currentRef.current - 1);
        };

        const onTouchStart = (e: TouchEvent) => {
            touchStartY.current = e.touches[0].clientY;
        };

        const onTouchEnd = (e: TouchEvent) => {
            const diff = touchStartY.current - e.changedTouches[0].clientY;
            if (Math.abs(diff) > 50) goTo(currentRef.current + (diff > 0 ? 1 : -1));
        };

        window.addEventListener('wheel', onWheel, { passive: false });
        window.addEventListener('keydown', onKey);
        window.addEventListener('touchstart', onTouchStart, { passive: true });
        window.addEventListener('touchend', onTouchEnd, { passive: true });

        return () => {
            window.removeEventListener('wheel', onWheel);
            window.removeEventListener('keydown', onKey);
            window.removeEventListener('touchstart', onTouchStart);
            window.removeEventListener('touchend', onTouchEnd);
        };
    }, [goTo]);

    return { current, goTo, duration: DURATION };
}
