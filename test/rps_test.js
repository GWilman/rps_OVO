/* global describe, it */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Picks from '../src/components/Picks';
import Buttons from '../src/components/Buttons';
import Scoreboard from '../src/components/Scoreboard';

describe('Picks tests', () => {

  it('should render player, computer and winner containers', done => {

    const wrapper = shallow(<Picks />);
    expect(wrapper.find('p').length).to.equal(4);
    expect(wrapper.find('span').length).to.equal(1);
    done();
  });

  it('should display player, computer and winner text', done => {
    const props = {
      playerPick: 'Rock',
      computerPick: 'Paper',
      winner: 'Rock'
    };

    const wrapper = shallow(<Picks {...props} />);
    expect(wrapper.childAt(0).childAt(1).text()).to.equal('Rock');
    expect(wrapper.childAt(2).childAt(1).text()).to.equal('Paper');
    expect(wrapper.childAt(1).text()).to.equal('Rock');
    done();
  });

});

describe('Buttons tests', () => {

  it('should render 3 buttons', done => {

    const wrapper = shallow(<Buttons />);
    expect(wrapper.find('button').length).to.equal(3);
    done();
  });

  it('should render 3 buttons with correct icons', done => {

    const wrapper = shallow(<Buttons />);
    expect(wrapper.find({ value: 'Rock' }).childAt(0).hasClass('fa-hand-rock')).to.equal(true);
    expect(wrapper.find({ value: 'Paper' }).childAt(0).hasClass('fa-hand-paper')).to.equal(true);
    expect(wrapper.find({ value: 'Scissors' }).childAt(0).hasClass('fa-hand-scissors')).to.equal(true);
    done();
  });

});

describe('Scoreboard tests', () => {

  it('should render player and computer score containers', done => {

    const wrapper = shallow(<Scoreboard />);
    expect(wrapper.find('p').length).to.equal(4);
    done();
  });

  it('should display player and computer scores', done => {
    const props = {
      playerScore: 4,
      computerScore: 5
    };

    const wrapper = shallow(<Scoreboard {...props} />);
    expect(wrapper.childAt(0).childAt(1).text()).to.equal('4');
    expect(wrapper.childAt(2).childAt(1).text()).to.equal('5');
    done();
  });

  it('should render reset button', done => {

    const wrapper = shallow(<Scoreboard />);
    expect(wrapper.find('button').length).to.equal(1);
    expect(wrapper.find('button').text()).to.equal('Reset');
    done();
  });

});
