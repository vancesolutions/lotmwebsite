"use server";

export type InquiryState = {
  error?: string;
  success?: boolean;
};

export async function submitInquiry(
  _prevState: InquiryState,
  formData: FormData
): Promise<InquiryState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name) {
    return { error: "Please enter your name." };
  }

  if (!email || !email.includes("@")) {
    return { error: "Please enter a valid email address." };
  }

  if (!message) {
    return { error: "Please tell us about your retreat plans." };
  }

  console.info("Inquiry received:", { name, email, phone, message });

  return { success: true };
}
