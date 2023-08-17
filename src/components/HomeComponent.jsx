import React from 'react';
import HomeSliderComponent from './HomeSliderComponent.jsx';
import HomeCollectionsContainer from './HomeCollectionsContainer.jsx';
import HomeMerchandiseComponent from './HomeMerchandiseComponent.jsx';
import HomeTopSellingComponent from './HomeTopSellingComponent.jsx';
import HomeMembershipComponent from './HomeMembershipComponent.jsx';

export default function HomeComponent() {
    return (
        <div>
            <HomeSliderComponent />
            <div>
                <button id="go_to_top" title="Go to top">^</button>
                <section id="hero_text_container"></section>

                <HomeCollectionsContainer />
                <HomeMerchandiseComponent />
                <HomeTopSellingComponent />
                <HomeMembershipComponent />
            </div >

        </div>
    )
}