'use client';

import { createContext, useContext } from 'react';

export type CursorType = 'default' | 'hover' | 'action' | 'text';

export interface CursorState {
  type: CursorType;
  setCursorType: (type: CursorType) => void;
}

export const CursorContext = createContext<CursorState>({
  type: 'default',
  setCursorType: () => {},
});

export function useCursor(): CursorState {
  return useContext(CursorContext);
}
