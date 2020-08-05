import vue from 'vue';
import Router from 'vue-router';
import Index from '../components/Index';
import Introduction from '../components/Introduction';
import Divine from '../components/Divine';
import CardFace from '../components/CardFace';
import CardArray from '../components/CardArray';
import CardDetail from '../components/CardDetail';
import Container from '../components/Container';
import  CardArrayDetail from '../components/CardArrayDetail';
import DivineDetail from '../components/DivineDetail';
import Other from '../components/Other';
vue.use(Router);

export default new Router({
    mode: 'hash',
    routes :[
        {
            name : 'Container',
            redirect :'Index',
            component : Container ,
            path : '/',
            children : [
                {
                    name : 'Index',
                    component : Index ,
                    path : 'Index',
                },
                {
                    name : 'Introduction',
                    component : Introduction ,
                    path : 'Introduction'
                },
                {
                    name : 'Divine',
                    component : Divine ,
                    path : 'Divine'
                },
                {
                    name : 'CardFace',
                    component : CardFace ,
                    path : 'CardFace'
                },
                {
                    name : 'CardArray',
                    component : CardArray ,
                    path : 'CardArray'
                },
            ]
        },
        {
            name : 'Other',
            component : Other ,
            path : '/Other'
        },
        {
            name : 'CardDetail',
            component : CardDetail ,
            path : '/CardDetail/:id'
        },
        {
            name : 'CardArrayDetail',
            component : CardArrayDetail ,
            path : '/CardArrayDetail/:id'
        },{
            name : 'DivineDetail',
            component : DivineDetail ,
            path : '/DivineDetail'
        }


    ]
})
