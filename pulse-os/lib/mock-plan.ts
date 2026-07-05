export const mockPlan = {
    title: "Live Events Expiry System",
    summary:
      "Adds a Live Event option for Pulse posts, automatically expiring them after 3 hours.",
    affectedAreas: [
      "Supabase schema",
      "Post creation flow",
      "Map markers",
      "Feed filtering",
      "Expiry cleanup",
    ],
    backendTasks: [
      "Add live_event flag to posts or events table",
      "Add expires_at timestamp",
      "Create query filter for active live events",
      "Prepare cleanup strategy",
    ],
    frontendTasks: [
      "Add Live Event toggle",
      "Show expiry status on event cards",
      "Highlight live markers on the map",
    ],
    testingTasks: [
      "Test expired events disappear",
      "Test missing GPS state",
      "Test normal posts still behave correctly",
    ],
    risks: [
      "Timezone handling",
      "Expired data showing in cached UI",
      "Users abusing live event tagging",
    ],
  };