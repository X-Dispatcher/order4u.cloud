const form = document.getElementById("contact-form");

function getStringValue(formData, key) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = getStringValue(data, "name");
    const company = getStringValue(data, "company");
    const industry = getStringValue(data, "industry");
    const phone = getStringValue(data, "phone");
    const message = getStringValue(data, "message");

    const subject = `Inquiry from ${name || "website"}`;
    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Industry: ${industry}`,
      `Phone: ${phone}`,
      "",
      message
    ].join("\n");

    window.location.href =
      `mailto:hello@order4u.cloud?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
