#Testing React Native

This is a reprodution of steps suggested by the article found [here](https://medium.com/@_gabrielrubens/testing-react-native-components-with-mocha-chai-sinon-enzyme-e00b64c49588#.bj7e351b5)

Running mocha, the console's outputs the following: 

`

<Login/>
Warning: React.createElement: type should not be null, undefined, boolean, or number. It should be a string (for DOM elements) or a ReactClass (for composite components).
    1) should call Meteor.loginWithPassword whenever TouchableHighlight gets pressed
Warning: React.createElement: type should not be null, undefined, boolean, or number. It should be a string (for DOM elements) or a ReactClass (for composite components).
    2) should call Actions.dashboard on successul login
Warning: React.createElement: type should not be null, undefined, boolean, or number. It should be a string (for DOM elements) or a ReactClass (for composite components).
    3) should not call Actions.dashboard on unsuccessul login


  0 passing (16ms)
  3 failing

  1) <Login/> should call Meteor.loginWithPassword whenever TouchableHighlight gets pressed:
     TypeError: Component is not a function
      at ReactCompositeComponentMixin._constructComponentWithoutOwner (node_modules/react/lib/ReactCompositeComponent.js:310:27)
      at ReactCompositeComponentMixin.mountComponent (node_modules/react/lib/ReactCompositeComponent.js:190:21)
      at Object.ReactReconciler.mountComponent (node_modules/react/lib/ReactReconciler.js:47:35)
      at ReactShallowRenderer._render (node_modules/react/lib/ReactTestUtils.js:402:21)
      at _batchedRender (node_modules/react/lib/ReactTestUtils.js:383:12)
      at Object.ReactDefaultBatchingStrategy.batchedUpdates (node_modules/react/lib/ReactDefaultBatchingStrategy.js:61:7)
      at Object.batchedUpdates (node_modules/react/lib/ReactUpdates.js:98:20)
      at ReactShallowRenderer.render (node_modules/react/lib/ReactTestUtils.js:376:16)
      at render (node_modules/enzyme/build/react-compat.js:153:39)
      at node_modules/enzyme/build/ShallowWrapper.js:90:26
      at ReactDefaultBatchingStrategyTransaction.Mixin.perform (node_modules/react/lib/Transaction.js:138:20)
      at Object.ReactDefaultBatchingStrategy.batchedUpdates (node_modules/react/lib/ReactDefaultBatchingStrategy.js:63:19)
      at batchedUpdates (node_modules/react/lib/ReactUpdates.js:98:20)
      at node_modules/enzyme/build/ShallowWrapper.js:89:41
      at withSetStateAllowed (node_modules/enzyme/build/Utils.js:196:3)
      at new ShallowWrapper (node_modules/enzyme/build/ShallowWrapper.js:88:38)
      at shallow (node_modules/enzyme/build/shallow.js:19:10)
      at clickOnLoginBtn (both/components/Login/spec_login.js:31:1)
      at Context.<anonymous> (both/components/Login/spec_login.js:32:3)

  2) <Login/> should call Actions.dashboard on successul login:
     TypeError: Component is not a function
      at ReactCompositeComponentMixin._constructComponentWithoutOwner (node_modules/react/lib/ReactCompositeComponent.js:310:27)
      at ReactCompositeComponentMixin.mountComponent (node_modules/react/lib/ReactCompositeComponent.js:190:21)
      at Object.ReactReconciler.mountComponent (node_modules/react/lib/ReactReconciler.js:47:35)
      at ReactShallowRenderer._render (node_modules/react/lib/ReactTestUtils.js:402:21)
      at _batchedRender (node_modules/react/lib/ReactTestUtils.js:383:12)
      at Object.ReactDefaultBatchingStrategy.batchedUpdates (node_modules/react/lib/ReactDefaultBatchingStrategy.js:61:7)
      at Object.batchedUpdates (node_modules/react/lib/ReactUpdates.js:98:20)
      at ReactShallowRenderer.render (node_modules/react/lib/ReactTestUtils.js:376:16)
      at render (node_modules/enzyme/build/react-compat.js:153:39)
      at node_modules/enzyme/build/ShallowWrapper.js:90:26
      at ReactDefaultBatchingStrategyTransaction.Mixin.perform (node_modules/react/lib/Transaction.js:138:20)
      at Object.ReactDefaultBatchingStrategy.batchedUpdates (node_modules/react/lib/ReactDefaultBatchingStrategy.js:63:19)
      at batchedUpdates (node_modules/react/lib/ReactUpdates.js:98:20)
      at node_modules/enzyme/build/ShallowWrapper.js:89:41
      at withSetStateAllowed (node_modules/enzyme/build/Utils.js:196:3)
      at new ShallowWrapper (node_modules/enzyme/build/ShallowWrapper.js:88:38)
      at shallow (node_modules/enzyme/build/shallow.js:19:10)
      at clickOnLoginBtn (both/components/Login/spec_login.js:31:1)
      at Context.<anonymous> (both/components/Login/spec_login.js:46:5)

  3) <Login/> should not call Actions.dashboard on unsuccessul login:
     TypeError: Component is not a function
      at ReactCompositeComponentMixin._constructComponentWithoutOwner (node_modules/react/lib/ReactCompositeComponent.js:310:27)
      at ReactCompositeComponentMixin.mountComponent (node_modules/react/lib/ReactCompositeComponent.js:190:21)
      at Object.ReactReconciler.mountComponent (node_modules/react/lib/ReactReconciler.js:47:35)
      at ReactShallowRenderer._render (node_modules/react/lib/ReactTestUtils.js:402:21)
      at _batchedRender (node_modules/react/lib/ReactTestUtils.js:383:12)
      at Object.ReactDefaultBatchingStrategy.batchedUpdates (node_modules/react/lib/ReactDefaultBatchingStrategy.js:61:7)
      at Object.batchedUpdates (node_modules/react/lib/ReactUpdates.js:98:20)
      at ReactShallowRenderer.render (node_modules/react/lib/ReactTestUtils.js:376:16)
      at render (node_modules/enzyme/build/react-compat.js:153:39)
      at node_modules/enzyme/build/ShallowWrapper.js:90:26
      at ReactDefaultBatchingStrategyTransaction.Mixin.perform (node_modules/react/lib/Transaction.js:138:20)
      at Object.ReactDefaultBatchingStrategy.batchedUpdates (node_modules/react/lib/ReactDefaultBatchingStrategy.js:63:19)
      at batchedUpdates (node_modules/react/lib/ReactUpdates.js:98:20)
      at node_modules/enzyme/build/ShallowWrapper.js:89:41
      at withSetStateAllowed (node_modules/enzyme/build/Utils.js:196:3)
      at new ShallowWrapper (node_modules/enzyme/build/ShallowWrapper.js:88:38)
      at shallow (node_modules/enzyme/build/shallow.js:19:10)
      at clickOnLoginBtn (both/components/Login/spec_login.js:31:1)
      at Context.<anonymous> (both/components/Login/spec_login.js:56:5)


`