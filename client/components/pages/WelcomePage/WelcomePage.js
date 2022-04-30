import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import R from 'ramda';

import Section from 'react-bulma-companion/lib/Section';
import Container from 'react-bulma-companion/lib/Container';
import Title from 'react-bulma-companion/lib/Title';

export default function WelcomePage() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));

  useEffect(() => {
    if (!R.isEmpty(user)) {
      dispatch(push('/home'));
    }
  }, []);

  return (
    <div className="welcome-page page">
      <Section>
        <Container>
          <Title>
            <h1 style={{fontSize:"50px", color:"darkblue"}}>Welcome To HomeDasher!</h1>
          </Title>
          <img src='https://media.istockphoto.com/vectors/delivery-guy-or-courier-male-character-on-bicycle-and-bike-and-with-vector-id1315577476?k=20&m=1315577476&s=612x612&w=0&h=uqoI91ja30v8LueFKPZpR0-jKVQelwv34HnxqOgSpZs='/>
          <p><h3>Think, Choose, Order, Delivered , Eat, Enjoy and Repeat</h3></p>
        </Container>
      </Section>
    </div>
  );
}
