import path from 'path';

export const Validators = {
  isPositiveNumber: (value: any): boolean =>
    typeof value === 'number' && value >= 0,
  isNonEmptyString: (value: any): boolean =>
    typeof value === 'string' && value.trim().length > 0,
  isInRange:
    (min: number, max: number) =>
    (value: any): boolean =>
      typeof value === 'number' && value >= min && value <= max,
  isFilePath: (value: any): boolean => {
    if (typeof value !== 'string' || value.trim().length === 0) {
      return false;
    }

    // Check for invalid characters
    const invalidChars = /[<>:"|?*]/;
    if (invalidChars.test(value)) {
      return false;
    }

    // Attempt to parse the path
    const parsed = path.parse(value);
    if (!parsed.root && !parsed.dir && !parsed.base) {
      return false;
    }

    // Additional checks can be added here
    return true;
  },
};
