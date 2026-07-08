export const getBotReply = async (message, complaints = []) => {
  const text = message.toLowerCase();

  if (["hi", "hello", "hey"].some(w => text.includes(w))) {
    return "Hello 👋 How can I help you today?";
  }

  if (text.includes("how many")) {
    return `You have ${complaints.length} complaint(s) raised.`;
  }

  if (text.includes("status")) {
    if (!complaints.length) {
      return "You have not raised any complaints yet.";
    }

    const latest = complaints[0];
    return `Your latest complaint "${latest.title}" is currently "${latest.status}".`;
  }

  if (text.includes("resolved")) {
    const resolved = complaints.find(c => c.status === "Resolved");
    return resolved
      ? `Yes, your complaint "${resolved.title}" has been resolved.`
      : "None of your complaints are resolved yet.";
  }

  if (text.includes("feedback")) {
    const eligible = complaints.find(
      c => c.status === "Resolved" && !c.feedback
    );

    return eligible
      ? `You can submit feedback for "${eligible.title}" from the Feedback page.`
      : "You have no complaints pending for feedback.";
  }

  if (text.includes("pending")) {
    return "A complaint is Pending when it has not yet been assigned to staff.";
  }

  if (text.includes("raise")) {
    return "You can raise a complaint from Student Dashboard → Raise Complaint.";
  }

  return "I can help with complaint status, feedback, or raising complaints.";
};
