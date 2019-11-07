import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './screen/Login';
import AddLec from './screen/AddLec';
import Profile from './screen/profile';
import Home from './screen/Home';
const AppStack = createStackNavigator({
    login:{
        screen:Login,
        navigationOptions:{
            header:null,
        },
    },
    Profile:{
        screen:Profile,
        navigationOptions:{
            header:null
        }
    },
    home:{
        screen: Home,
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
    Add:{
        screen: AddLec
    },
    
})

export default createAppContainer(AppStack);
