import * as React from 'react';
import * as $ from 'jquery';
import {ContextMenuRegion} from './context-menu-region';
import {ContextMenuTarget} from './context-menu-target';
import './context-menu-styles';

const menuItems = [
    {id:1,name:'item1'},
    {id:2,name:'item2'},
    {id:3,name:'item3'}
];

const files = [
    {id:'1',name:'target-item-1'},
    {id:'2',name:'target-item-2'},
    {id:'3',name:'target-item-3'},
    {id:'4',name:'target-item-4'},
    {id:'5',name:'target-item-5'}
];


export class ContextMenuDemo extends React.Component<any,any>{
    
    constructor(){
        super();
        this.state = {
            selectedTarget:0,
            displayMenu : false,
            menuPosition:{x:0,y:0},
        };
    }
    
    resetMenu(){
        console.log('menu reset');
        this.setState($.extend({},this.state,{
            displayMenu:false
        }));
    }
    
    onMenuItemSelect(menuItemId:number){
        console.log('menu item '+menuItemId+' selected for target '+this.state.selectedTarget);
        this.resetMenu();
    }
    
    onContextMenu(targetId:number,position){
        console.log('target '+targetId+' selected');
        this.setState($.extend({},this.state,{
            selectedTarget:targetId,
            displayMenu:true,
            menuPosition:{x:position.x,y:position.y}
        }));
    }
    
    render(){
        const {displayMenu,menuPosition} = this.state;
        return (
            <ContextMenuRegion
                menuItems={menuItems}
                onMenuItemSelect={this.onMenuItemSelect.bind(this)}
                displayMenu={displayMenu}
                menuPosition={menuPosition}
                onClick={this.resetMenu.bind(this)}
            >
                non-target-item-1
                {files.map(file=>{return (
                    <ContextMenuTarget
                        key={file.id}
                        targetId={file.id}
                        onClick={this.resetMenu.bind(this)}
                        onContextMenu={this.onContextMenu.bind(this)}
                    >
                        {file.name}
                    </ContextMenuTarget>
                );})}
                non-target-item-2
            </ContextMenuRegion>
        );
    }
    
}