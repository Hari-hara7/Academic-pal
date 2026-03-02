import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Tutor from '@/models/Tutor';

export async function GET(req: NextRequest) {
  await connectDB();

  try {
    const url = new URL(req.url);
    const tutorId = url.searchParams.get('tutorId');
    const subject = url.searchParams.get('subject');
    const year = url.searchParams.get('year');
    const availability = url.searchParams.get('availability');

    // If tutorId is provided, fetch single tutor
    if (tutorId) {
      const tutor = await Tutor.findById(tutorId).lean();
      if (!tutor) {
        return NextResponse.json({ success: false, message: 'Tutor not found' }, { status: 404 });
      }
      return NextResponse.json({ success: true, tutors: [tutor] });
    }

    const query: Record<string, unknown> = {};

    if (subject) {
      query.subjects = subject;
    }
    if (year) {
      query.year = Number(year);
    }
    if (availability) {
      query.availability = availability;
    }

    const tutors = await Tutor.find(query).sort({ rating: -1 }).lean();

    return NextResponse.json({ success: true, tutors });
  } catch (err) {
    console.error('Tutor list error:', err);
    return NextResponse.json({ message: 'Failed to fetch tutors' }, { status: 500 });
  }
}

