import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './screen/Login';

const AppStack = createStackNavigator({
    login:{
        screen:Login,
        navigationOptions:{
            // title:'Settings',
            // headerBackTitle:null,
            // headerTitleStyle:{
            //     fontSize:20,
            //     color:'white'
            // },
            // headerStyle: {
            //     backgroundColor: 'black',
            //   },
            header:null,
        },
    },
})

export default createAppContainer(AppStack);
