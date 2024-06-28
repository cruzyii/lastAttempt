import React, { useEffect, useState } from 'react';
import EditForm from '@/Components/EditForm';
import Layout from '@/Components/Layout';




function Edit() {
    return (
        <Layout>
            <div className="flex justify-center">
                <EditForm/>
            </div>
        </Layout>
    )
}
export default Edit;