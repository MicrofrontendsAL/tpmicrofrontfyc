import { registerApplication, start } from 'single-spa';

registerApplication(
    'display-image',
    () => import('displayImage/DisplayImage'),
    location => location.pathname.startsWith('/')
);

registerApplication(
    'display-ticket',
    () => import('displayTicket/DisplayTicket'),
    location => location.pathname.startsWith('/')
);

registerApplication(
    'header',
    () => import('nav/Header'),
    location => location.pathname.startsWith('/')
);

registerApplication(
    'footer',
    () => import('nav/Footer'),
    location => location.pathname.startsWith('/')
);

registerApplication(
    'buy',
    () => import('buy/Buy'),
    location => location.pathname.startsWith('/')
);

start(
    {
        urlRerouteOnly: true,
    }
);
