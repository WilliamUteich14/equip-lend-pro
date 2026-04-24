// Mock auth — frontend-only session for the admin area.

const STORAGE_KEY = "rentalpro.admin.session";
const VALID_EMAIL = "teste@teste.com";
const VALID_PASSWORD = "teste123123";

export type AdminSession = {
  email: string;
  name: string;
  loggedInAt: number;
};

export function login(email: string, password: string): AdminSession | null {
  if (email.trim().toLowerCase() !== VALID_EMAIL) return null;
  if (password !== VALID_PASSWORD) return null;
  const session: AdminSession = {
    email: VALID_EMAIL,
    name: "Administrador",
    loggedInAt: Date.now(),
  };
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  }
  return session;
}

export function logout() {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(STORAGE_KEY);
  }
}

export function getSession(): AdminSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AdminSession;
  } catch {
    return null;
  }
}
