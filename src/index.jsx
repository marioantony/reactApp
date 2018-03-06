import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Main from './common/main.component.jsx'
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Car from './car/car.component.jsx'
import CarDetail from './car/car-detail.component.jsx'

const data = [
    {
    id: 1,
		name: 'Silesian Wing Pigeon',
		year: 'SriLanka',
		model: 'Blue Barless',
		make: 'Silesian Wing Pigeon',
		media: 'http://pigeonfanciers.ca/random/lrg-pics/pigeon45.jpg',
		price: '10,000/='

	}, {
		id: 2,
		name: 'Taganrog Tumbler',
		year: 'Africa',
		model: 'Fancy Pigeon Breed',
		make: 'Taganrog Tumbler',
		media: 'https://i.ytimg.com/vi/pBvYIxFjrU4/maxresdefault.jpg',
		price: '6000/='

	}, {
	    id: 3,
	    name: 'Barking Pigeon',
	    year: 'America',
	    model: 'Barking breed',
	    make: 'Barking',
	    media: 'http://www.freakingnews.com/pictures/129500/Barking-Pigeon--129810.jpg',
	    price: '100000/='
	}, {
	    id: 4,
	    name: 'Pink Pigeon',
	    year: 'Qutor',
	    model: 'Ford breed',
	    make: 'Ford',
	    media: 'https://www.durrell.org/wildlife/wp-content/uploads/2014/12/Pink-pigeon-profile-bg1.jpg',
	    price: '1000000/='
	}, {
	    id: 5,
	    name: 'Sno-King Racing Pigeon',
	    year: 'Singapura',
	    model: 'Racing breed',
	    make: 'Dodge',
	    media: 'http://www.sno-kingracingCars.com/images/Pigeon%201a.jpg',
      price: '12000/='
    }
];


render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
            <Route path="/cars" component={Car} data={data}/>
            {/* Parameter route*/}
            <Route path="/cars/:id" component={CarDetail} data={data}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>,
    document.getElementById('container')
);
