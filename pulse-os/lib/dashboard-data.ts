export const dashboardCards = [
    {
      title: "Pulse Status",
      value: "Online",
      description: "Website repo detected and ready.",
      status: "Healthy",
      tone: "success" as const,
    },
    {
      title: "Active Branch",
      value: "main",
      description: "No sandbox branch currently running.",
      status: "Clean",
      tone: "neutral" as const,
    },
    {
      title: "Last Agent Run",
      value: "None yet",
      description: "Spec Writer, Coder, and Tester are waiting.",
      status: "Idle",
      tone: "warning" as const,
    },
    {
      title: "Open Tasks",
      value: "0",
      description: "No pending build tasks.",
      status: "Clear",
      tone: "success" as const,
    },
    {
      title: "Model Usage",
      value: "£0.00",
      description: "OpenAI spend tracked here later.",
      status: "Safe",
      tone: "success" as const,
    },
    {
      title: "Access Level",
      value: "Owner",
      description: "Full control over agents, merge, and settings.",
      status: "Unlocked",
      tone: "danger" as const,
    },
  ];