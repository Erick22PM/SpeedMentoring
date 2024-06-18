import React from 'react';
import Layout from '../../components/Layout/Layout';

import Link from 'next/link';

export default function Page() {
  return (
    <Layout navbar={true} userType="admin">
      <div>
        Página del admin. Reporte.
      </div>
    </Layout>
  );
}


