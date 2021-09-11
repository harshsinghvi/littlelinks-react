import React from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";
import data from "./data.json";

const init = () => {
  if (!data.googleAnalyticsTrackingId) return;
  const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
  ReactGA.initialize(data.googleAnalyticsTrackingId, { debug: isDev });
};

const sendPageview = (path) => {
  if (!data.googleAnalyticsTrackingId) return;
  ReactGA.set({ page: path });
  ReactGA.pageview(path);
};

export const sendEvent = (payload) => {
  if (!data.googleAnalyticsTrackingId) return;
  ReactGA.event(payload);
};

export default function useGoogleAnalytics() {
  const location = useLocation();

  React.useEffect(() => {
    init();
  }, []);

  React.useEffect(() => {
    // TODO: Does this window.location.search required? /transcript?oid= is a unique url
    const currentPath = location.pathname + location.search;
    sendPageview(currentPath);
  }, [location]);
}
