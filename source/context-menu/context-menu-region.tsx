import * as React from 'react';
import {ContextMenu} from './context-menu';

export class ContextMenuRegion extends React.Component<any,any>{
    
    static defaultState = {
        displayMenu : false,
        menuPosition:{x:0,y:0}
    };
    
    constructor(){
        super();
        this.state = ContextMenuRegion.defaultState
    }

    render(){
        const {menuItems,onMenuItemSelect,className} = this.props;
        const {displayMenu,menuPosition} = this.state;
        let _className = className ? className+' context-menu-region' : 'context-menu-region';
        return (
            <ContextMenu
                menuItems={menuItems}
                onMenuItemSelect={onMenuItemSelect}
                displayMenu={displayMenu}
                menuPosition={menuPosition}
            />
        );
    }
}