import React from 'react';
import Layout from '../components/Layout/Layout';

import Link from 'next/link';

export default function Page() {
  return (
    <Layout navbar={true} userType="student">
      <div>
        Página de estudiante. Agenda.
      </div>
    </Layout>
  );
}




        