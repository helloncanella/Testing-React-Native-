import React from 'react';
import proxyquire from 'proxyquire';
import { shallow } from 'enzyme';
import { expect, assert } from 'chai';
import { stub } from 'sinon';

// This ensures that proxyquire won't run the file before we
// mock its imports.
const proxyquireStrict = proxyquire.noCallThru();
// Let's create our mocked version of the libraries
const Meteor = {
  loginWithPassword: null,
};
const Router = {
  Actions: {
    dashboard: null,
  },
};

// Here we just inject them as the libraries
const Login = proxyquireStrict('./Login.js', {
  'react-native-meteor': Meteor,
  'react-native-router-flux': Router,
  // No need to mock RN, react-native-mock already did that
  // for us ;) 
});


describe('<Login/>', () => {
  it('should call Meteor.loginWithPassword whenever TouchableHighlight gets pressed', () => {
    Meteor.loginWithPassword = stub();
    clickOnLoginBtn();
    
    const callArgs = Meteor.loginWithPassword.args[0];
    assert(Meteor.loginWithPassword.called);
    expect(callArgs[0]).to.equal(credentials.email);
    expect(callArgs[1]).to.equal(credentials.password);
    expect(callArgs[2]).to.be.a('function');
  });
  
  it('should call Actions.dashboard on successul login', () => {
    Router.Actions.dashboard = stub();
    // Call last arg which is the callback with null assigned to error
    Meteor.loginWithPassword = stub().callsArgWith(2, null);
    
    clickOnLoginBtn();
    
    assert(Router.Actions.dashboard.calledOnce);
  });
  
    it('should not call Actions.dashboard on unsuccessul login', () => {
    Router.Actions.dashboard = stub();
    // Call last arg which is the callback with null assigned to error
    Meteor.loginWithPassword = stub().callsArgWith(2, true);
    
    clickOnLoginBtn();
    
    expect(Router.Actions.dashboard.calledOnce).to.be.false;
  });
});

function clickOnLoginBtn(){
  const wrapper = shallow(<Login/>);
  const credentials = {
    email: 'user@email.com',
    password: 'password',
  };
  // Set the state
  wrapper.setState(credentials);
  // Force the call for onPress prop so we can detect
  // if there was a call to Meteor.loginWithPassword.
  wrapper.find('TouchableHighlight').prop('onPress')();
}