'use client';

import * as React from 'react';
import { AppButton } from '@/comps';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <AppButton variant="ghost" size="icon" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? (
        <Moon className="h-[1.5rem] w-[1.3rem text-primary-foreground" />
      ) : (
        <Sun className="h-[1.5rem] w-[1.3rem text-primary-foreground" />
      )}
    </AppButton>
  );
}
