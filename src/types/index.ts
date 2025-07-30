
/**
 * Defines the structure of a User object.
 * We only include fields that are actively used in the application UI
 * to keep the type definitions clean and focused.
 */
export interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

/**
 * Defines the structure of the API response from the user service.
 * It contains an array of User objects.
 */
export interface ApiResponse {
  results: User[];
}
