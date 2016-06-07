import * as React from 'react';
import * as $ from 'jquery';

export class ContextMenu extends React.Component<any,any>{

    static defaultStyles = {
        backgroundColor:'white',
        width:'100px',
        display:'none',
        position:'absolute'
    };
    
    onMenuItemSelect(menuId:number,event:MouseEvent){
        this.props.onMenuItemSelect(menuId);
        event.stopPropagation();
    }

    render(){

        const {displayMenu,menuPosition,menuItems,onMenuItemSelect} = this.props;
        
        const styles = $.extend({},ContextMenu.defaultStyles,{
            display:displayMenu?'block':'none',
            top:menuPosition.y,
            left:menuPosition.x
        });
        
        return (
            <ul style={styles} className='context-menu' >
            {
                menuItems.map(item=>{
                    return (
                        <li
                            key={item.id}
                            onClick={this.onMenuItemSelect.bind(this,item.id)}
                        >
                            {item.name}
                        </li>
                    );
                })
            }
            </ul>
        );

    }
}