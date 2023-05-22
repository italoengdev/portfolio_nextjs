// utils/analytics.js

import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-P75DW6P224');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
