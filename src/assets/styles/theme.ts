import Aura from '@primeng/themes/aura';
import {definePreset} from '@primeng/themes';

export const wolfTheme = definePreset(Aura, {
  primitive: {
    /* Primary (mesmo tom do pink, para consistência) */
    primary: {
      50: '#fef1fb',
      100: '#fee5f9',
      200: '#ffcaf7',
      300: '#ff9fee',
      400: '#ff63df',
      500: '#ff1fc7', // Rosa Neon principal
      600: '#f012ae',
      700: '#d1058e',
      800: '#ad0775',
      900: '#8f0c63',
      950: '#580039'
    },

    /* Botão principal (p-button) */
    pink: {
      50: '#fef1fb',
      100: '#fee5f9',
      200: '#ffcaf7',
      300: '#ff9fee',
      400: '#ff63df',
      500: '#ff1fc7', // Rosa Neon principal
      600: '#f012ae',
      700: '#d1058e',
      800: '#ad0775',
      900: '#8f0c63',
      950: '#580039'
    },

    /* Help (botão p-button-help) */
    purple: {
      50: '#f3e8ff',
      100: '#e9d5ff',
      200: '#d8b4fe',
      300: '#c084fc',
      400: '#a855f7',
      500: '#9333ea',
      600: '#7e22ce',
      700: '#6b21a8',
      800: '#581c87',
      900: '#3b0c61',
      950: '#22003a'
    },

    /* Success (botão p-button-success) */
    green: {
      50: '#ecfbd4',
      100: '#d9f7ac',
      200: '#bff078',
      300: '#a0e548',
      400: '#82c336',
      500: '#66a32c',
      600: '#4e7e23',
      700: '#3a5d1b',
      800: '#293f13',
      900: '#1b2b0d',
      950: '#0d1805'
    },

    /* Warning (botão p-button-warning) */
    yellow: {
      50: '#fff4d6',
      100: '#ffe7ad',
      200: '#ffd97a',
      300: '#ffc94d',
      400: '#ffb623',
      500: '#f69e45',
      600: '#d07c25',
      700: '#a85e18',
      800: '#7f4311',
      900: '#572d0a',
      950: '#2e1604'
    },

    /* Danger (botão p-button-danger) */
    red: {
      50: '#ffe6eb',
      100: '#ffb3c2',
      200: '#ff8098',
      300: '#ff4d6f',
      400: '#ff1f4d',
      500: '#e42b56',
      600: '#b81f40',
      700: '#8f142e',
      800: '#660c1f',
      900: '#3d0512',
      950: '#1d0005'
    },

    /* Info (botão p-button-info) */
    blue: {
      50: '#e0f7ff',
      100: '#b3ecff',
      200: '#7dd3fc',
      300: '#38bdf8',
      400: '#0ea5e9',
      500: '#0284c7',
      600: '#0369a1',
      700: '#075985',
      800: '#0c4a6e',
      900: '#08354c',
      950: '#052638'
    },

    /* Neutral (botão p-button-secondary, backgrounds, etc) */
    neutral: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617'
    }
  },
  semantic: {
    primary: {
      50: '#fef1fb',
      100: '#fee5f9',
      200: '#ffcaf7',
      300: '#ff9fee',
      400: '#ff63df',
      500: '#ff1fc7',
      600: '#f012ae',
      700: '#d1058e',
      800: '#ad0775',
      900: '#8f0c63',
      950: '#580039'
    },
    success: {
      50: '#ecfbd4',
      100: '#d9f7ac',
      200: '#bff078',
      300: '#a0e548',
      400: '#82c336',
      500: '#66a32c',
      600: '#4e7e23',
      700: '#3a5d1b',
      800: '#293f13',
      900: '#1b2b0d',
      950: '#0d1805'
    },
    warn: {
      50: '#fff4d6',
      100: '#ffe7ad',
      200: '#ffd97a',
      300: '#ffc94d',
      400: '#ffb623',
      500: '#f69e45',
      600: '#d07c25',
      700: '#a85e18',
      800: '#7f4311',
      900: '#572d0a',
      950: '#2e1604'
    },
    danger: {
      50: '#ffe6eb',
      100: '#ffb3c2',
      200: '#ff8098',
      300: '#ff4d6f',
      400: '#ff1f4d',
      500: '#e42b56',
      600: '#b81f40',
      700: '#8f142e',
      800: '#660c1f',
      900: '#3d0512',
      950: '#1d0005'
    },
    info: {
      50: '#e0f7ff',
      100: '#b3ecff',
      200: '#7dd3fc',
      300: '#38bdf8',
      400: '#0ea5e9',
      500: '#0284c7',
      600: '#0369a1',
      700: '#075985',
      800: '#0c4a6e',
      900: '#08354c',
      950: '#052638'
    },
    help: {
      50: '#f3e8ff',
      100: '#e9d5ff',
      200: '#d8b4fe',
      300: '#c084fc',
      400: '#a855f7',
      500: '#9333ea',
      600: '#7e22ce',
      700: '#6b21a8',
      800: '#581c87',
      900: '#3b0c61',
      950: '#22003a'
    },
    neutral: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617'
    }
  },
  colorScheme: {
    dark: {
      primary: {
        color: '#ff1fc7',
        contrastColor: '#000000',
        hoverColor: '#ff4fd4',
        activeColor: '#cc1aa3'
      },
      highlight: {
        background: '#ff9fee',
        focusBackground: '#ff63df',
        color: '#ff1fc7',
        focusColor: '#d1058e'
      },
      success: {
        color: '#a0e548',
        contrastColor: '#000000',
        hoverColor: '#bff078',
        activeColor: '#82c336'
      },
      warn: {
        color: '#f69e45',
        contrastColor: '#000000',
        hoverColor: '#f9b76c',
        activeColor: '#d07c25'
      },
      danger: {
        color: '#e42b56',
        contrastColor: '#ffffff',
        hoverColor: '#ec5c7b',
        activeColor: '#b81f40'
      },
      info: {
        color: '#38bdf8',
        contrastColor: '#000000',
        hoverColor: '#7dd3fc',
        activeColor: '#0ea5e9'
      },
      help: {
        color: '#c084fc',
        contrastColor: '#000000',
        hoverColor: '#d8b4fe',
        activeColor: '#a855f7'
      },
      neutral: {
        color: '#64748b',
        contrastColor: '#ffffff',
        hoverColor: '#94a3b8',
        activeColor: '#475569'
      }
    }
  }
});
