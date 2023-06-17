import { useEffect } from 'react';

export const useDebounce = (actionToPerform: any, whenPerform: any, delay: number) => {
    useEffect(() => {
        const handler = setTimeout(() => actionToPerform(), delay);

        return () => clearTimeout(handler);
    }, [...(whenPerform || []), delay]);
};