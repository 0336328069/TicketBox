'use client';

import Button from '@/src/components/atoms/Button';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div>
      <h1>Welcome to TicketBox Landing Page!</h1>
      <Link href="/ticketbox">Xem sự kiện</Link>
      <Button variant="primary" size="md" disabled={false} onClick={(e) => console.log(e)}>Click me</Button>
    </div>
  );
}