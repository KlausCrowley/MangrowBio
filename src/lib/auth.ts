import { SignJWT, jwtVerify } from "jose";
import type { JWTPayload } from "jose";

const secretKey = process.env.JWT_SECRET || "super_secret_pharma_key_for_dev";
const key = new TextEncoder().encode(secretKey);

type SessionPayload = JWTPayload & {
  id: string;
  email: string;
  role?: string;
};

export async function encrypt(payload: SessionPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(key);
}

export async function decrypt(input: string): Promise<SessionPayload> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload as SessionPayload;
}
