
import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { User } from '@/models/User';
import { comparePassword } from '@/lib/hash';
import { signToken } from '@/lib/auth';
import { verifyTurnstileToken } from '@/lib/turnstile';

export async function POST(req: Request) {
  const { email, password, turnstileToken } = await req.json();
  
  // Verify Turnstile token
  const isValidToken = await verifyTurnstileToken(turnstileToken);
  if (!isValidToken) {
    return NextResponse.json({ message: 'Verification failed. Please try again.' }, { status: 400 });
  }
  
  await connectDB();

  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }

  const token = signToken(user);
  const res = NextResponse.json({ success: true });
  res.cookies.set('token', token, { httpOnly: true });
  return res;
}

