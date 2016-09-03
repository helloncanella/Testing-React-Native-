#Testing React Native

This is a fix suggestions for the article found [here](https://medium.com/@_gabrielrubens/testing-react-native-components-with-mocha-chai-sinon-enzyme-e00b64c49588#.bj7e351b5)


##Some typos found:

Consider the snippet

    const Login = proxyquireStrict(‘./Login.js’, { 
        ‘react-native-meteor’: Meteor, 
        ‘react-native-router-flux’: Router)
    });


As long you are exporting `Login` module as default, you need to do

    const Login = proxyquireStrict(‘./Login.js’, { 
        ‘react-native-meteor’: Meteor, 
        ‘react-native-router-flux’: Router)
        }).default;

One more thing:

    function clickOnLoginBtn(){ 
        const wrapper = shallow(<Login/>);
        const credentials = {
            email: ‘user@email.com’,
            password: ‘password’,
        };
 
        wrapper.find(‘TouchableHighlight’).prop(‘onPress’)();   
    }

You are using the constant `credentials` in your tests. However, it is defined in the scope of clickOnLoginBtn. Your specs don’t have access to it.


