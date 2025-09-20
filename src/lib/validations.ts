// Validation schemas using Zod (when added to project)
// For now, basic validation functions

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateRequired(value: any): boolean {
  return value !== null && value !== undefined && value !== '';
}

export function validateMinLength(value: string, minLength: number): boolean {
  return value.length >= minLength;
}

// Event validation
export function validateEventData(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!validateRequired(data.title)) {
    errors.push('Title is required');
  }
  
  if (!validateRequired(data.description)) {
    errors.push('Description is required');
  }
  
  if (!validateRequired(data.date)) {
    errors.push('Date is required');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}
