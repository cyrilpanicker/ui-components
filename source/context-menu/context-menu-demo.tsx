import * as React from 'react';
import {ContextMenuRegion} from './context-menu-region';

const menuItems = [
    {id:1,name:'item1'},
    {id:2,name:'item2'},
    {id:3,name:'item3'}
];

const files = [
    'file1',
    'file2',
    'file3',
    'file4',
    'file5'
];


export class ContextMenuDemo extends React.Component<any,any>{
    
    onMenuItemSelect(id){
        console.log(id+' selected');
    }
    
    render(){
        return (
            <ContextMenuRegion menuItems={menuItems} onMenuItemSelect={this.onMenuItemSelect} />
        );
    }
    
}