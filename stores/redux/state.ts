declare global {
  interface AuthState {
    user: any;
    authenticated?: boolean;
    loading?: boolean;
  }
}
export { type AuthState };
