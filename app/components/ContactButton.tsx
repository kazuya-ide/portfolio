// app/components/ContactButton.tsx
"use client";

import React from 'react';
import Link from 'next/link';

const ContactButton = () => {
  return (
    <div className="mt-4 text-center flex items-center justify-center">
      <Link
        href="/contact"
        className="bg-gray-200 hover:bg-gray-300 text-black font-medium py-2 px-4 rounded"
      >
        正式なご依頼はこちらから
      </Link>
    </div>
  );
};

export default ContactButton;