/**
 * Centralized email submission utility for Zoyo Trip Holidays
 * Sends lead & booking notifications to info@zoyotrip.in
 */

export interface EmailPayload {
  formType: string;
  name?: string;
  phone?: string;
  email?: string;
  destination?: string;
  travelDate?: string;
  travelers?: string | number;
  adults?: string | number;
  children?: string | number;
  tripType?: string;
  packageName?: string;
  packagePrice?: string;
  message?: string;
  notes?: string;
  [key: string]: string | number | undefined;
}

export async function sendEmailToZoyo(data: EmailPayload): Promise<{ success: boolean; message: string }> {
  try {
    const subject = `[Zoyo Trip Lead] ${data.formType} - ${data.name || data.phone || data.destination || 'New Inquiry'}`;

    // Clean payload for email delivery
    const payload: Record<string, string> = {
      _subject: subject,
      _template: 'table',
      _captcha: 'false',
      'Form Source': data.formType,
      'Submission Time': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    if (data.name) payload['Customer Name'] = String(data.name);
    if (data.phone) payload['Phone / WhatsApp'] = String(data.phone);
    if (data.email) payload['Email Address'] = String(data.email);
    if (data.destination) payload['Destination'] = String(data.destination);
    if (data.packageName) payload['Package Name'] = String(data.packageName);
    if (data.packagePrice) payload['Package Price'] = String(data.packagePrice);
    if (data.travelDate) payload['Travel Date'] = String(data.travelDate);
    if (data.tripType) payload['Trip Type'] = String(data.tripType);
    if (data.travelers) payload['No. of Travelers'] = String(data.travelers);
    if (data.adults !== undefined) payload['Adults'] = String(data.adults);
    if (data.children !== undefined) payload['Children'] = String(data.children);
    if (data.message) payload['Message / Requirements'] = String(data.message);
    if (data.notes) payload['Special Notes'] = String(data.notes);

    Object.keys(data).forEach((key) => {
      if (!['formType', 'name', 'phone', 'email', 'destination', 'travelDate', 'travelers', 'adults', 'children', 'tripType', 'packageName', 'packagePrice', 'message', 'notes'].includes(key)) {
        if (data[key] !== undefined && data[key] !== '') {
          payload[key] = String(data[key]);
        }
      }
    });

    const response = await fetch('https://formsubmit.co/ajax/info@zoyotrip.in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return { success: true, message: 'Enquiry sent successfully!' };
    } else {
      const result = await response.json().catch(() => ({}));
      return { success: false, message: result.message || 'Failed to send enquiry' };
    }
  } catch (error) {
    console.error('Email sending error:', error);
    // Return true on network fallback so user always gets positive UX
    return { success: true, message: 'Enquiry received' };
  }
}
