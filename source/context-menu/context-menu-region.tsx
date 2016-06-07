import * as React from 'react';
import {ContextMenu} from './context-menu';

export class ContextMenuRegion extends React.Component<any,any>{
    
    onClick(event:MouseEvent){
        this.props.onClick(null);
        event.stopPropagation();
    }

    render(){
        const {menuItems,onMenuItemSelect,onClick,children,displayMenu,menuPosition,className} = this.props;
        let _className = className ? className+' context-menu-region' : 'context-menu-region';
        return (
            <div
                className={_className}
                onClick={this.onClick.bind(this)}
            >
                {children}
                <ContextMenu
                    menuItems={menuItems}
                    onMenuItemSelect={onMenuItemSelect}
                    displayMenu={displayMenu}
                    menuPosition={menuPosition}
                />
            </div>
        );
    }
}