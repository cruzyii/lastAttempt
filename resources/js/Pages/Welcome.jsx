import React from 'react';
import Banner from '@/Components/Banner';
import Hero from '@/Components/Hero';
import Layout from '@/Components/Layout';

function Welcome(){

    return(
        <div>
            <Layout>
                <Banner/>
                <Hero/>
            </Layout>
        </div>
    );
}

export default Welcome;