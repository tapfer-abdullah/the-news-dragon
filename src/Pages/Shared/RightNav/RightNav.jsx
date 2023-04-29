import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import Findus from './FindUs';
import QZone from './QZone';
import RightSideNews from './RightSideNews';

const RightNav = () => {
    return (
        <div>
            <h2>Log in with</h2>
            <Button variant="outline-info"><FaGoogle/> Log in with Google</Button>
            <Button variant="outline-dark"><FaGithub/> Log in with Github</Button>

            <Findus></Findus>
            <QZone></QZone>
            <RightSideNews></RightSideNews>
        </div>

    );
};

export default RightNav;